import Layout from "./components/Layout/Layout";
import withSplashScreen from "./components/splashscreen";


function App() {
  return <Layout />;
  // Mengembalikan komponen Layout.
}

export default withSplashScreen(App);
// export default withSplashScreen;
