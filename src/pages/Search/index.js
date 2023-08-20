import { useEffect, useState } from "react";
import { InputWrapper, NotFoundText, TableTitle, Wrapper } from "./styled";
import { toast } from "react-toastify";
import TracksTable from "components/TracksTable";
import { search } from "services/api";
import Input from "components/ui/Input";
import SearchIcon from "assets/icons/search.svg";

function Search() {
  console.log(SearchIcon);

  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [tracks, setTracks] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        const data = await search(searchQuery);
        setTracks(data);
      } catch (err) {
        toast.error(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    if (searchQuery) loadData();
  }, [searchQuery]);

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

export default Search;
