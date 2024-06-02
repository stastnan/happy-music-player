import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

import { InputWrapper, NotFoundText, TableTitle, Wrapper } from "./styled";
import TracksTable from "components/TracksTable";
import { search } from "services/api";
import Input from "components/ui/Input";
import SearchIcon from "assets/icons/search.svg";

function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [tracks, isLoading] = useDebounceLoadData(searchQuery);
  return (
    <Wrapper>
      <InputWrapper>
        <Input
          value={searchQuery}
          placeholder="Search..."
          onChange={(e) => setSearchQuery(e.target.value)}
          startIcon={SearchIcon}
        />
      </InputWrapper>
      {searchQuery && (
        <div>
          <TableTitle>Results by : {searchQuery}</TableTitle>
          {(isLoading || (!isLoading && tracks?.length > 0)) && (
            <TracksTable tracks={tracks} isLoading={isLoading} />
          )}
        </div>
      )}
      {searchQuery && !isLoading && tracks?.length <= 0 && (
        <NotFoundText>Nothing was found :(</NotFoundText>
      )}
    </Wrapper>
  );
}

function useDebounceLoadData(searchQuery) {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState();
  const fetchTimeout = useRef();

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        const searchData = await search(searchQuery);
        setData(searchData);
      } catch (err) {
        toast.error(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    if (searchQuery) {
      clearTimeout(fetchTimeout.current);
      fetchTimeout.current = setTimeout(loadData, 500);
    } else {
      setData(null);
    }
  }, [searchQuery]);

  return [data, isLoading];
}
export default Search;
