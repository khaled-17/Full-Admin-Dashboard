import ProtectedProvider from "./provider/ProtectedProvider/ProtectedProvider";
import LayoutProvider from "./provider/LayoutProvider/LayoutProvider";
import TheThemeProvider from "./provider/Theme/TheThemeProvider";

function App() {
  return (
    <>

      <TheThemeProvider>
        <LayoutProvider />
      </TheThemeProvider>
      
     </>
  );
}

export default App;
