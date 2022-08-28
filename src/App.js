import AllRoutes from "./AllRoutes/AllRoutes";
import LargeWithLogoLeft from "./Components/Footer";
import WithSubnavigation from "./Components/Home/respnavbar.tsx";
import Svg from "./Components/Home/svg";


function App() {
  return (
    <div>
      <Svg/>
      <WithSubnavigation/>
      <AllRoutes/>
      <LargeWithLogoLeft/>

  
    </div>
  );
}

export default App;
