import { ConfigProvider } from "antd";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#F24E1E",
          fontFamily: "NixGon",
        },
      }}
    >
      <AppRouter />
    </ConfigProvider>
  );
}

export default App;
