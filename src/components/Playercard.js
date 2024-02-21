import React from "react";

const Playercard = (prop) => {

  let{first_name,last_name,PLAYERID,DOB,Position,Nationality,team_id,Kitnumber}=prop;

  return (
    <>
      <div className="card">
        <div className="card-front">
          <p className="title">{first_name} {last_name}</p>
          <p className="subtitle">{PLAYERID}</p>
        </div>
        <div className="card-back">
        <ul>
        <li>{DOB}</li>
        <li>{Position}</li>
        <li>{team_id}</li>
        <li>{Nationality}</li>
        <li>{Kitnumber}</li>
        </ul>
        </div>
      </div>
    </>
  );
};

export default Playercard;
