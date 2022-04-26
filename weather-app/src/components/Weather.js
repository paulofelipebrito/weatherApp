import { useEffect, useState } from 'react';

import WeatherApp from '../api/openWeatherMap';
import WeatherForm from './WeatherForm';
import WeatherMessage from './WeatherMessage';
import ErrorModal from './ErrorModal';

export default function Weather(props){
  const [isLoading, setIsLoading] = useState(false);
  const [temp, setTemp] = useState();
  const [location, setLocation] = useState();
  const [errorMessage, setErrorMessage] = useState();
      
  useEffect(()=>{  
    if(location && location.length > 0) {
      handleSearch(location);
      window.location.hash ='#/';
    }
  }, [location]);

  function handleSearch(location){
    setIsLoading(true); 
    
    WeatherApp
      .getTemp(location)
      .then((temp)=> {
        console.log(temp)
        setLocation(location);
        setTemp(temp);
        setIsLoading(false);
      })
      .catch((error)=>{
        setIsLoading(false);
        setErrorMessage(error.message)
      });
  }

  function renderMessage() {
      if(isLoading) {
          return <h3 className="text-center">Fetching weather...</h3>;
      } else if(temp && location) {
          return <WeatherMessage location={location} temp={temp}/>;
      }
  }
  
  function renderError() {
    return (
      <ErrorModal message={errorMessage}></ErrorModal>
    )
  }

  return(
    <div>
      <h1 className="text-center page-title">Get Weather</h1>
      <WeatherForm onSearch={handleSearch}/>
      {renderMessage()}
      {renderError()}
  </div>
  );
};