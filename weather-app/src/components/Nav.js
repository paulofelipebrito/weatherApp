import {Link} from 'react-router-dom';
import { useRef } from 'react';

export default function Nav(){
const locationRef = useRef();
  function onSearch(event) {
    event.preventDefault();
    
    var location = locationRef.current.value;
    var encodedLocation = encodeURIComponent(location);
    
    if(location.length > 0){
        this.refs.search.value = '';
        window.location.hash = '#/?location='+encodedLocation;
    }
  }
  return(
    <div className="top-bar">
              <div className="top-bar-left">
                  <ul className="menu">
                      <li className="menu-text">Weather app</li>
                      <li><Link to="/" >Get Weather</Link></li>
                      <li><Link to="/about" >About</Link></li>
                      <li><Link to="/examples" >Examples</Link></li>
                  </ul>
              </div>
              <div className="top-bar-right">
                  <form onSubmit={onSearch}>
                      <ul className="menu">
                          <li>
                              <input type="search" placeholder="Enter location" ref={locationRef}/>
                          </li>
                          <li>
                              <input type="submit" className="button" value="Get Weather"/>
                          </li>
                      </ul>
                  </form>
              </div>
          </div>
  );
}