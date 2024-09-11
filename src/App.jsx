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
        components: {
          Input: {
            fontFamily:
              "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Arial, Noto Sans, sans-serif",
          },
        },
      }}
    >
      <AppRouter />
    </ConfigProvider>
  );
}

export default App;
