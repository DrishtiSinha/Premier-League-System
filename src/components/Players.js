import React, { useState,useEffect } from "react";
import Playercard from "./Playercard";
import axios from "axios";
const Players = () => {
  const [player,setPlayer] = useState([]);
  const [first_name,set_first_name]= useState("");
  const [PLAYERID,set_PLAYERID]= useState("");
  const [last_name,set_last_name]= useState("");
  const [DOB,set_DOB]= useState();
  const [Position,set_Position]= useState("");
  const [Nationality,set_Nationality]= useState("");

  const [data,setData] = useState([]);

  const [team_id,set_team_id]= useState("");
  const [Kitnumber,set_Kitnumber]= useState(0);
  
  const handleSubmit = () => {
    axios
      .post("http://localhost:4000/add_player", {
        PLAYERID: PLAYERID,
        first_name: first_name,
        last_name: last_name,
        DOB: DOB,
        Position: Position,
        Nationality: Nationality,
        team_id: team_id,
        Kitnumber: Kitnumber,
      })
      .then(() => {
        setPlayer([
          ...player,
          {
            PLAYERID: PLAYERID,
            first_name: first_name,
            last_name: last_name,
            DOB: DOB,
            Position: Position,
            Nationality: Nationality,
            team_id: team_id,
            Kitnumber: Kitnumber,
          },
        ]);
      });
  };

  const delete_player = (PLAYERID, e) => {
    if (window.confirm("Are You sure want to delete?")) {
      setData(data.filter((v, i) => i !== PLAYERID));
      axios.delete(`http://localhost:4000/delete_player/${PLAYERID}`);
    }
  };

  const update_player= (PLAYERID, e) => {
    console.log("hua kya");
    axios
      .put("http://localhost:4000/update_player", {
        PLAYERID: PLAYERID,
        first_name: first_name,
        last_name: last_name,
        DOB: DOB,
        Position: Position,
        Nationality: Nationality,
        team_id: team_id,
        Kitnumber: Kitnumber,
      })
      .then((response) => {
        setPlayer(
          player.map((item) => {
            return item.PLAYERID === player.PLAYERID
              ? {
                  first_name: player.first_name,
                  PLAYERID: player.PLAYERID,
                  last_name: player.last_name,
                  DOB: player.DOB,
                  Position: player.Position,
                  Nationality: player.Nationality,
                  team_id: player.team_id,
                  Kitnumber: player.Kitnumber,
                }
              : item;
          })
        );
      });
    console.log("ho gaya");
  };

  const showtable = (e) => {
    const tab = document.getElementById("tables");
    console.log("hellow");
    tab.style.display = "grid";
  };
  
  const loadData = async ()=>{
    const response = await  axios.get("http://localhost:4000/display_player");
    setData(response.data);
  }
  useEffect(()=>{
    loadData();
  },[]);

  return (
    <>
      <div className="d-inline-flex p2">
        <div>
          <button className="func" onClick={handleSubmit}>
            <span>Add</span>
          </button>
        </div>
        <div>
          <button className="func" onClick={e=>delete_player(PLAYERID,e)}>
            <span>Delete</span>
          </button>
        </div>
        <div>
          <button className="func" onClick={showtable}>
            <span>Display</span>
          </button>
        </div>
        <div>
          <button className="func" onClick={(e)=>update_player(PLAYERID,e)}>
            <span>Update</span>
          </button>
        </div>
      </div>

      <form action="">
        <div className="parentPlayer mx-5">
          <div className="div1">
            <label htmlFor="fname">First Name :-</label>
            <input type="text" id="fname" name="fname" required  onChange={(event)=>{set_first_name(event.target.value);}} />
            <br />
            <br />
          </div>
          <div className="div2">
            <label htmlFor="lname">Last Name :-</label>

            <input type="text" id="lname" name="lname" required  onChange={(event)=>{set_last_name(event.target.value);}}/>
            <br></br>
          </div>
          <div className="div3">
            <label htmlFor="pid">Player Id:-</label>
            <input type="text" id="pid" name="pid" required  onChange={(event)=>{set_PLAYERID(event.target.value);}} />
            <br></br>
          </div>

          <div className="div4">
            <label htmlFor="dob">Date of Birth:-</label>
            <input type="date" id="dob" name="dob" required  onChange={(event)=>{set_DOB(event.target.value);}} />
            <br></br>
          </div>
          <div className="div5">
            <label htmlFor="position">Position :-</label>
            <input type="text" id="position" name="position" required  onChange={(event)=>{set_Position(event.target.value);}}/>
            <br></br>
          </div>
          <div className="div6">
            <label htmlFor="tid">Team Id :-</label>
            <input type="text" id="tid" name="tid" required  onChange={(event)=>{set_team_id(event.target.value);}} />
            <br></br>
          </div>
          <div className="div7">
            <label htmlFor="nat">Nationality :-</label>
            <input type="text" id="nat" name="nat" required  onChange={(event)=>{set_Nationality(event.target.value);}}/>
            <br></br>
          </div>
          <div className="div8">
            <label htmlFor="knum">Kit Number:-</label>
            <input type="int" id="knum" name="knum" required  onChange={(event)=>{set_Kitnumber(event.target.value);}}/>
            <br></br>
          </div>
        </div>
      </form>

      <div className="gridContainer" id="tables">
        {data.map((item) => {
          return (
            <div className="row" id="gridLayout" key={item.PLAYERID}>
              <Playercard
                PLAYERID={item.PLAYERID}
                first_name={item.first_name}
                last_name={item.last_name}
                DOB={item.DOB}
                Position={item.Position}
                team_id={item.team_id}
                Nationality={item.Nationality}
                Kitnumber={item.Kitnumber}
              />
            </div>
          );
        })}
       
      </div>
    </>
  );
};

export default Players;
