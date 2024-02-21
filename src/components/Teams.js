import React, { useEffect, useState } from "react";

import axios from 'axios';


// const initialState ={
//   team_name: "",
//   team_id:"",
//   rating:"",
//   attack:"",
//   defence:"",
//   win_ratio:""
// }
const Teams = () => {

  
  const [team_name,set_team_name]= useState("");
  const [team_id,set_team_id]= useState("");
  const [rating,set_rating]= useState(0);
  const [attack,set_attack]= useState(0);
  const [defence,set_defence]= useState(0);
  const [win_ratio,set_win_ratio]= useState(0);
  
  
  const [team,setTeam] = useState([]);
  const handleSubmit = () =>{


      axios.post("http://localhost:4000/add_team",{
        team_name:team_name,
        team_id:team_id,
        rating:rating,
        attack:attack,
        defence:defence,
        win_ratio:win_ratio,
      }).then(()=>{
        

        setTeam([...team,{
          team_name:team_name,
          team_id:team_id,
          rating:rating,
          attack:attack,
          defence:defence,
          win_ratio:win_ratio,
        
        },]);
      
      })

    
  };

  
  const delete_team = (team_id,e)=>{
    if(window.confirm("Are You sure want to delete?")){
      setData(data.filter((v, i) => i !== team_id));
      axios.delete(`http://localhost:4000/delete_team/${team_id}`);
    }
  }
  
  const showtable = (e) => {
    
    const tab = document.getElementById('tables');
    console.log("hellow");
    tab.style.display = "block";
  }
  const [data,setData] = useState([]);
  
  const loadData = async ()=>{
    const response = await  axios.get("http://localhost:4000/display_teams");
    setData(response.data);
  }
  useEffect(()=>{
    loadData();
  },[]);

  
  const update_team = (team_id,e) => {
    console.log("hua kya");
    axios.put("http://localhost:4000/update_team", {    
      team_name:team_name,
      team_id:team_id,
      rating:rating,
      attack:attack,
      defence:defence,
      win_ratio:win_ratio
    }).then(
        (response) => {
          setTeam(
            team.map((item) => {
              return item.team_id === team.team_id
              ? {
                team_name:team.team_name,
                team_id:team.team_id,
                rating:team.rating,
                attack:team.attack,
                defence:team.defence,
                win_ratio:team.win_ratio,
              }
              : item;
            })
            );
          }
          );
          console.log("ho gaya");
  };
  return (
    <>
      <div className="d-inline-flex p2">
        <div>
          <button className="func" onClick={handleSubmit}>
            <span>Add</span>
          </button>
        </div>
        <div>
          <button className="func" onClick={e=>delete_team(team_id,e)}>
            <span>Delete</span>
          </button>
        </div>
        <div>
          <button className="func" onClick={showtable}>
            <span>Display</span>
          </button>
        </div>
        <div>
          <button className="func" onClick={(e)=>update_team(team_id,e)}>
            <span>Update</span>
          </button>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
        <form action="">
      <div className="parent mx-5">
          <div className="div1">
            <label htmlFor="tname">Team Name :-</label>
            <input type="text" id="tname" name="tname" required onChange={(event)=>{set_team_name(event.target.value);}} />
            <br/>
            <br/>
          </div>
          <div className="div2">
            <label htmlFor="tid">Team Id :-</label>
            
            <input type="text" id="tid" name="tid" required onChange={(event)=>{set_team_id(event.target.value);}}  />
            <br></br>
          </div>
          <div className="div3">
            <label htmlFor="rating">Rating :-</label>
            <input type="int" id="rating" name="rating" required onChange={(event)=>{set_rating(event.target.value);}} />
            <br></br>
          </div>

          <div className="div4">
            <label htmlFor="attack">Attack :-</label>
            <input type="int" id="attack" name="attack" required  onChange={(event)=>{set_attack(event.target.value);}} />
            <br></br>
          </div>
          <div className="div5">
            <label htmlFor="defence">Defence :-</label>
            <input type="int" id="defence" name="defence" required onChange={(event)=>{set_defence(event.target.value);}} />
            <br></br>
          </div>
          <div className="div6">
            <label htmlFor="winrate">Win Ratio :-</label>

            <input type="int" id="winrate" name="winrate" required onChange={(event)=>{set_win_ratio(event.target.value);}} />
            <br></br>
          </div>
      </div>
        </form>


      <div id="tables">
      <table className="table table-hover table-dark text-light">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Team Name</th>
            <th scope="col">Team id</th>
            <th scope="col">Rating</th>
            <th scope="col">Attack</th>
            <th scope="col">Defence</th>
            <th scope="col">Win Ratio</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item,index)=>{
            return(
          <tr key={item.team_id}>
            <th scope="row">{index+1}</th>
            <td>{item.team_name}</td>
            <td>{item.team_id}</td>
            <td>{item.rating}</td>
            <td>{item.attack}</td>
            <td>{item.defence}</td>
            <td>{item.win_ratio}</td>
          </tr>

            )
          })}
        </tbody>
      </table>
      </div>
    </>
  );
};

export default Teams;
