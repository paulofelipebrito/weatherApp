export default function WeatherMessage(props){
  const {temp, location} = props;

  return(
    <h3 className="text-center">It is {temp}&deg;C in {location}.</h3>
  );
};