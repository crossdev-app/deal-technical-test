// import '@/styles/globals.css'
import "bootstrap/dist/css/bootstrap.css";
import { Provider } from "react-redux";
import "src/styles/custom_style/custom_style.css";
import store from "../store/store";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
