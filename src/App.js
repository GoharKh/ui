import "./App.css";
import "./styles/reset.css";

import Banner from "./sections/banner";
import Footer from "./sections/footer";
import Header from "./sections/header";
import Products from "./sections/products";
import Navigation from "./sections/navigation";
import Services from "./sections/services";

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Banner
        firstBanner
        buttonTitle="Shop Now"
        title="Fiberglass and specialty metals are in stock across the United States"
      />
      <Products />
      <Banner
        buttonTitle="Shop Now"
        title="Large Inventory Of Power Tools & Accessories"
        content="Find the Aluminum and Stainless Steel items for your project in stock and ready to ship today! Avoid project delays and long lead times in a challenging supply chain for specialty metals and non-ferrous items. We are well stocked and here to serve you with guided support."
      />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
