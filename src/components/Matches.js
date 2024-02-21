import React,{useState,useEffect} from 'react'
import axios from 'axios';
const  Matches=()=> {
  
  const [matchdate,set_matchdate]= useState();
  const [matchid,set_matchid]= useState("");
  const [home_team,set_home_team]= useState("");
  const [away_team,set_away_team]= useState("");
  const [host,set_host]= useState("");
  const [score,set_score]= useState(0);
  
  
  const [match,setMatch] = useState([]);
  const handleSubmit = () =>{


      axios.post("http://localhost:4000/add_match",{
        matchdate:matchdate,
        matchid:matchid,
        home_team:home_team,
        away_team:away_team,
        host:host,
        score:score,
      }).then(()=>{
        

        setMatch([...match,{
          matchdate:matchdate,
          matchid:matchid,
          home_team:home_team,
          away_team:away_team,
          host:host,
          score:score,
        
        },]);
      
      })

    
  };
  
  const delete_match = (matchid,e)=>{
    if(window.confirm("Are You sure want to delete?")){
      setData(data.filter((v, i) => i !== matchid));
      axios.delete(`http://localhost:4000/delete_match/${matchid}`);
    }
  }

   
  const update_match = (matchid,e) => {
    console.log("hua kya");
    axios.put("http://localhost:4000/update_match", {    
      matchdate:matchdate,
      matchid:matchid,
      home_team:home_team,
      away_team:away_team,
      host:host,
      score:score
    }).then(
        (response) => {
          setMatch(
            match.map((item) => {
              return item.matchid === match.matchid
              ? {
                matchdate:match.matchdate,
                matchid:match.matchid,
                home_team:match.home_team,
                away_team:match.away_team,
                host:match.host,
                score:match.score,
              }
              : item;
            })
            );
          }
          );
          console.log("ho gaya");
  };

  const showtable = (e) => {
    
    const tab = document.getElementById('tables');
    console.log("hellow");
    tab.style.display = "block";
  }
  const [data,setData] = useState([]);
  const loadData = async ()=>{
    const response = await  axios.get("http://localhost:4000/display_matches");
    setData(response.data);
  }
  useEffect(()=>{
    loadData();
  },[]);
  return (
    <>
    <div>
          <div className="d-inline-flex p2">
      <div>
        <button className="func" onClick={handleSubmit}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <button className="func" onClick={e=>delete_match(matchid,e)}>
          <span>Delete</span>
        </button>
      </div>
      <div>
        <button className="func" onClick={showtable}>
          <span>Display</span>
        </button>
      </div>
      <div>
        <button className="func" onClick={(e)=>update_match(matchid,e)}>
          <span>Update</span>
        </button>
      </div>
    </div>
    <form action="">
      <div className="parentmatches mx-5">
          <div className="div1">
            <label htmlFor="matchid">Match Id :-</label>
            <input type="text" id="matchid" name="matchid" required onChange={(event)=>{set_matchid(event.target.value);}} />
            <br/>
            <br/>
          </div>
          <div className="div2">
            <label htmlFor="mdate">Match Date :-</label>
            
            <input type="date" id="mdate" name="mdate" required onChange={(event)=>{set_matchdate(event.target.value);}}/>
            <br></br>
          </div>
          <div className="div3">
            <label htmlFor="hteam">Home Team :-</label>
            <input type="text" id="hteam" name="hteam" required onChange={(event)=>{set_home_team(event.target.value);}}/>
            <br></br>
          </div>

          <div className="div4">
            <label htmlFor="ateam">Away Team :-</label>
            <input type="text" id="ateam" name="ateam" required onChange={(event)=>{set_away_team(event.target.value);}}/>
            <br></br>
          </div>
          <div className="div5">
            <label htmlFor="host">Host :-</label>
            <input type="text" id="host" name="host" required onChange={(event)=>{set_host(event.target.value);}}/>
            <br></br>
          </div>
          <div className="div6">
            <label htmlFor="score">Score :-</label>
            <input type="text" id="score" name="score" required onChange={(event)=>{set_score(event.target.value);}}/>
            <br></br>
          </div>
      </div>
        </form>
    </div>

    <div id="tables">
      <table className="table table-hover table-dark text-light">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Match ID</th>
            <th scope="col">Match Date</th>
            <th scope="col">Home Team</th>
            <th scope="col">Away Team</th>
            <th scope="col">Host</th>
            <th scope="col">Score</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item,index)=>{
            return(
          <tr key={item.matchid}>
            <th scope="row">{index+1}</th>
            <td>{item.matchid}</td>
            <td>{item.matchdate} </td>
            <td>{item.home_team}</td>
            <td>{item.away_team}</td>
            <td>{item.host}</td>
            <td>{item.score}</td>
          </tr>

            )
          })}
        </tbody>
      </table>
      </div>
    </>
  )
}

export default Matches;
