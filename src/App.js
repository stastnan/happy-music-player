import { ToastContainer } from "react-toastify";
import { SkeletonTheme } from "react-loading-skeleton";
import { ThemeProvider } from "styled-components";
import { theme } from "styles/Theme";
import { GlobalStyles } from "styles/Global";
import Home from "pages/Home";

// Import skeleton loader styles
import "react-loading-skeleton/dist/skeleton.css";

// Import react toastify styles
import "react-toastify/dist/ReactToastify.css";
import Player from "components/Player";

//Import rc-slider styles
import "rc-slider/assets/index.css";
import { initialState, playerReducer } from "context/playerReducer";
import { useReducer } from "react";
import { PlayerContext, PlayerDispatchContext } from "context/playerContext";
import Search from "pages/Search";
import { Route, Routes } from "react-router-dom";
import Layout from "components/Layout";
import Error from "pages/Error";

function App() {
  const [state, dispatch] = useReducer(playerReducer, initialState);
  return (
    <PlayerContext.Provider value={state}>
      <PlayerDispatchContext.Provider value={dispatch}>
        <ThemeProvider theme={theme}>
          <SkeletonTheme
            baseColor={theme.colors.secondaryBlack}
            highlightColor={theme.colors.lightWhite}
          >
            <GlobalStyles />
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/search" element={<Search />} />
                <Route path="*" element={<Error />} />
              </Route>
            </Routes>
            <ToastContainer
              position="bottom-left"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
          </SkeletonTheme>
        </ThemeProvider>
      </PlayerDispatchContext.Provider>
    </PlayerContext.Provider>
  );
}

export default App;
