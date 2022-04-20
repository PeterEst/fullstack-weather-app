import Header from "./components/Header";
import InputBox from "./components/InputBox";
import DisplayBox from "./components/DisplayBox";
import PoweredBy from "./components/PoweredBy"
import React ,{ useState } from "react";

function App() {
  const [refresh, setRefresh] = useState(0);
  const dataFromInput = () =>{
    setRefresh(refresh + 1);
  }
  const [OpenWeatherlogoLoading , setOpenWeatherLoading] = useState(true)
  const getLoading = (loading) =>{
    setOpenWeatherLoading(loading);
  };

  return (
    <div className="App">
      <Header />
      <InputBox  onSubmit={dataFromInput} />
      <DisplayBox refreshToken={refresh} loadingToken={getLoading}/>
      <PoweredBy loading = {OpenWeatherlogoLoading}/>
    </div>
  );
}

export default App;
