import { useRef } from "react";

export default function WeatherForm(props){
  const locationRef = useRef();

  function onFormSubmit (event) {
    event.preventDefault();
      
    var location = locationRef.current.value;

    if(location.length > 0) {
      props.onSearch(location);        
    }
  }
  return (
    <form onSubmit={onFormSubmit}>
      <input type="search" ref={locationRef} placeholder="Enter a location"/>
      <button className="button expanded hollow">Get Weather</button>
    </form>
  );
};