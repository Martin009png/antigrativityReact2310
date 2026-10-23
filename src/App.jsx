import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Header from "./layouts/Header";
import PedidosProvider from "./providers/PedidosProvider";

function App() {
  return (
    <PedidosProvider>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Header title="Gestor de Elementos" />
      </LocalizationProvider>
    </PedidosProvider>
  );
}

export default App;
