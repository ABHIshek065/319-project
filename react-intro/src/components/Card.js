import { flushSync } from "react-dom";

function Card(props) {
function  orderHandler(){
    console.log('order successful', props.title)
  }
  return (
    <div className="card" onClick={orderHandler}>
      <div className="card-header">
        <img src={props.img} className="card-img" />
        <p className="ratings">{props.rating} ( {props.votes} Votes)</p>
      </div>

      <div className="heading-flex">
      <h3>{props.title}</h3>

      <p className={props.rating > 4 ? "must-try" : "d-none"}>Must Try</p>
      </div>
      <p className="price">{props.price}</p>
      <p>{props.desc}</p>
    </div>
  );
}

export default Card;
