import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import About from "@/pages/web/aboutSection/About";
import Contact from "@/pages/web/contactSection/Contact";
import Dashboard from "@/pages/web/homeSection/Home";
import Pricing from "@/pages/web/pricingSection/Pricing";

function HomeLayout() {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <div id="home"><Dashboard /></div>
      <div id="about"><About /></div>
      <div id="pricing"><Pricing /></div>
      <div id="contact"><Contact /></div>
      <Footer />
    </div>
  );
}

export default HomeLayout;
