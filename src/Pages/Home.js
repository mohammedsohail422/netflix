import Navbar from "../components/Navbar/Navbar";
import Download from "./components/Download";
import Hero from "./components/Hero";
import Tvone from "./components/Tvone";
import image2 from "../assets/section5/device.png";
import image1 from "../assets/section2/tv.png";
import Footer from "../components/Footer/Footer";

import "./Home.css";
import ChildrenProfile from "./components/ChildrenProfile";
import Faq from "./components/Faq";

const Home = () => {
  const data = [
    {
      heading: "Enjoy on your TV.",
      subHeading:
        "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
      imag: image1,
      cls: "",
    },
    {
      heading: "Watch everywhere.",
      subHeading:
        "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
      imag: image2,
      cls: "active",
    },
  ];

  return (
    <>
      <Navbar />
      <Hero />
      <Tvone dynamic={data[0]} />
      <Download />
      <Tvone dynamic={data[1]} />
      <ChildrenProfile />
      <Faq />
      <Footer />
    </>
  );
};

export default Home;
