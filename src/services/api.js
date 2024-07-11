import axios from "axios";

const API_BASE_URL = "https://api.deezer.com";
const API_CHART_URL = "/chart";
const API_GENRES_URL = "/genre";
const API_SEARCH_URL = "/search";
const API_TOP_TRACKS_RADIO_URL = "/radio/37151/tracks";
const API_ARTISTS_URL = "/artist";

export const loadChart = async () => {
  try {
    const data = await axios(API_CHART_URL);

    if (!data?.data) throw Error();

    return data.data;
  } catch (err) {
    throw Error("Failed to load chart!");
  }
};

export const loadGenres = async () => {
  try {
    const data = await axios(API_GENRES_URL);

    if (!data?.data?.data) throw Error();

    return data.data.data.filter((genre) => {
      const genreName = genre.name.toLowerCase();
      return genreName !== "all" && genreName !== "všechny";
    });
  } catch (err) {
    throw Error("Failed to load genres!");
  }
};

export const search = async (searchQuery) => {
  try {
    const data = await axios(`${API_SEARCH_URL}?q=${searchQuery}`);

    if (!data?.data?.data) throw Error();

    return data.data.data;
  } catch (err) {
    throw Error("Failed to load tracks!");
  }
};

export const loadTopRadioTracks = async () => {
  try {
    const data = await axios(`${API_TOP_TRACKS_RADIO_URL}?limit=100`);

    if (!data?.data?.data) throw Error();

    return data.data.data;
  } catch (err) {
    throw Error("Failed to load radio!");
  }
};

export const loadGenre = async (genreId) => {
  try {
    const [genreData, radiosData] = await Promise.all([
      axios(`${API_GENRES_URL}/${genreId}`),
      axios(`${API_GENRES_URL}/${genreId}/radios`),
    ]);

    if (!genreData?.data || !radiosData?.data) throw Error();

    const radios = radiosData.data.data;
    const randomIndex = Math.floor(Math.random() * radios.length);

    const tracksData = await axios(radios[randomIndex].tracklist.replace(API_BASE_URL, ""));

    return {
      genre: genreData.data,
      tracks: tracksData.data.data,
    };
  } catch (err) {
    throw Error("Failed to load genre!");
  }
};

export const loadArtist = async (artistId) => {
  try {
    const [artistData, tracksData] = await Promise.all([
      axios(`${API_ARTISTS_URL}/${artistId}`),
      axios(`${API_ARTISTS_URL}/${artistId}/top`),
    ]);

    if (!artistData?.data || !tracksData?.data?.data) throw Error();

    return {
      artist: artistData.data,
      tracks: tracksData.data.data,
    };
  } catch (err) {
    throw Error("Failed to load artist!");
  }
};
