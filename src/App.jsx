import { CryptoContextProvider } from "./crypro-context";
import { AppLayout } from "./components/layout/AppLayout";

function App() {
  return (
    <CryptoContextProvider>
      <AppLayout />
    </CryptoContextProvider>
  );
}

export default App;
