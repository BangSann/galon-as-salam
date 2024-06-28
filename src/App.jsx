import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import AirRo from "./pages/ApaItuRo";
import HomeBanner from "./pages/home-banner";
import Order from "./pages/order";
import Profile from "./pages/profile";
import Services from "./pages/services";

function App() {
  return (
    <section className="flex flex-col justify-center items-center w-full relative bg-cover bg-no-repeat bg-[url('src/assets/background/bg1.jpg')]">
      <Header />
      <HomeBanner />
      <Profile />
      <AirRo />
      <Services />
      <Order />
      <Footer />
    </section>
  );
}

export default App;
