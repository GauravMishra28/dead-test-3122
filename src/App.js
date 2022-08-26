import AllRoutes from "./AllRoutes/AllRoutes";
import SignupCard from "./Authentication/Registration";


import LargeWithLogoLeft from "./Components/Footer";
import WithSubnavigation from "./Components/Home/respnavbar.tsx";
import Svg from "./Components/Home/svg";
import Navbar from "./Components/Navbar";




function App() {
  return (
    <div>
      <Svg/>
      {/* <Navbar/> */}
      <WithSubnavigation/>
      <AllRoutes/>
      <LargeWithLogoLeft/>

  
    </div>
  );
}

export default App;
