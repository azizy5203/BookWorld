// import { Button } from "primereact/button";
import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
import Spinner from "./components/shared/Spinner/Spinner";
import router from "./router";
import { ThemeProvider } from "./providers/theme-provider";
import { ToastContainer } from "react-toastify";
import {useDispatch } from "react-redux";
import { setUser } from "./store/user";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUser({name:"Jacob Jones"}))
  }, []);
  
  return (
    <>
      <ToastContainer />
      <ThemeProvider
        defaultTheme="light"
        storageKey="vite-ui-theme">
        <RouterProvider
          fallbackElement={<Spinner />}
          router={router}
        />
      </ThemeProvider>
      <SpeedInsights />
      <Analytics />
    </>
  );
}

export default App;
