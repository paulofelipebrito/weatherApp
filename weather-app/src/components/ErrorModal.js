export default function ErrorModal({title= 'Error', message}) {
  return(
    <div id="error-modal" className="reveal tiny text-center" data-reveal="">
      <h4>{title}</h4>
      <p>{message}</p>
      <p>
          <button className="button hollow" data-close="">Ok</button>
      </p>
  </div>
  );
}