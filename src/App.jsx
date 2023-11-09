import "./App.css";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <div
        style={{
          background: `linear-gradient(166deg, rgba(5,6,20,1) 30%, rgba(253,29,29,1) 75%, rgba(224,153,54,1) 100%)`
          // background: `linear-gradient(162deg, rgba(4,3,22,1) 25%, rgba(249,2,2,1) 90%, rgba(255,192,0,1) 100%)`,
        }}
      >
        <Header />
        <Banner />
        <Skills />
        <Skills />
        <Skills />
      </div>
    </>
  );
}

export default App;
