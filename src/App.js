import AllRoutes from "./AllRoutes/AllRoutes";
import SignupCard from "./Authentication/Registration";


import LargeWithLogoLeft from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Registration from "./Authentication/Registration";


function App() {
  return (
    <div>
      <Navbar/>
      <AllRoutes/>
      <LargeWithLogoLeft/>
      {/* <Login/> */}
  
    </div>
  );
}

export default App;
