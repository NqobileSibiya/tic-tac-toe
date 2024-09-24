import { useContext } from "react"; // Fixed spacing in import
import Router from "./Router";
import { GlobalStyles } from "./styles/Global.styled";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/theme";
import { ThemeContext } from "./contexts/ThemeContext"; // Ensure "contexts" path is correct
import MusicPlayer from "./components/musicPlayer/MusicPlayer";
function App() {
  // Declare variables before return
  const theme = useContext(ThemeContext);
  // console.log(useContext(ThemeContext));
  const mode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={mode}>
         <GlobalStyles />

         <Router />
         <MusicPlayer />
    </ThemeProvider>
  );
}

export default App;

