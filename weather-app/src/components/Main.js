import Nav from './Nav'

export default function Main(props){
  return(
      <>
        <Nav />
        <div className="row">
            <div className="columns medium-6 large-4 small-centered">
                {props.children}
            </div>
        </div>
      </>
  );
}