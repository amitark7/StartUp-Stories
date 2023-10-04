import "./App.css";
import Choose from "./Component/Choose";
import Request from "./Component/Request";
import Service from "./Component/Service";
import Slider from "./Component/Slider";
import Team from "./Component/Team";
import Welcome from "./Component/Welcome";
//import Footer from "./Component/Footer";
//import Update from "./Component/Update";
//import Blogs from "./Component/Blogs";
//import BlogPost from "./Component/BlogPost";

function App() {
  return (
    <>
        <Slider />
        <Welcome />
        <Service />
        <Choose />
        <Request />
        <Team />
    </>
  );
}

export default App;
