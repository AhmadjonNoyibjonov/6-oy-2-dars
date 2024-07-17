import React from "react";
import "./card.css";
function Card(props) {
  const { data } = props;
  return (
    <>
      <div className="card">
        <img src={data.image} alt="picture" />
        <h3>{data.firstName + " " + data.lastName}</h3>
        <span>
          <h6>Telefon: +{data.phone}</h6>
          <h6>Email: {data.email}</h6>
        </span>
        <h5>Address: {data.address.region} </h5>
        <span>
          Cars:
          <p>{data.cars[1]}</p>
          <p>{data.cars[2]}</p>
          <p>{data.cars[0]}</p>
        </span>
      </div>
    </>
  );
}

export default Card;
