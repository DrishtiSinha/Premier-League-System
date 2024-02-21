import React ,{ useEffect,useState } from "react"
import axios from 'axios'

const  Venue=()=> {
  const [stadium_name,set_stadium_name]= useState("");
  const [matchid,set_matchid]= useState("");
  const [city,set_city]= useState("");
  const [area_name,set_area_name]= useState("");
  const [humidity,set_humidity]= useState(0);
  const [temperature,set_temperature]= useState(0);
  const [weather,set_weather]= useState("");
  const [capacity,set_capacity]= useState(0);
  
  
  const [venue,setVenue] = useState([]);



  const handleSubmit = () =>{


    axios.post("http://localhost:4000/add_venue",{
      matchid:matchid,
      stadium_name:stadium_name,
      city:city,
      area_name:area_name,
      humidity:humidity,
      temperature:temperature,
      weather:weather,
      capacity:capacity
    }).then(()=>{
      

      setVenue([...venue,{
        matchid:matchid,
        stadium_name:stadium_name,
        city:city,
        area_name:area_name,
        humidity:humidity,
        temperature:temperature,
        weather:weather,
        capacity:capacity
      },]);
    
    })

  
};

 
const update_venue = (stadium_name,e) => {
  console.log("hua kya");
  axios.put("http://localhost:4000/update_venue", {    
    stadium_name:stadium_name,
    matchid:matchid,
    city:city,
    area_name:area_name,
    humidity:humidity,
    temperature:temperature,
    weather:weather,
    capacity:capacity
  }).then(
      (response) => {
        setVenue(
          venue.map((item) => {
            return item.stadium_name === venue.stadium_name
            ? {
              matchid:venue.matchid,
              stadium_name:venue.stadium_name,
              city:venue.city,
              area_name:venue.area_name,
              humidity:venue.humidity,
              temperature:venue.temperature,
              weather:venue.weather,
              capacity:venue.capacity
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
    const response = await  axios.get("http://localhost:4000/display_venue");
    setData(response.data);
  }
  useEffect(()=>{
    loadData();
  },[]);

  const delete_venue = (stadium_name,e)=>{
    if(window.confirm("Are You sure want to delete?")){
      setData(data.filter((v, i) => i !== stadium_name));
      axios.delete(`http://localhost:4000/delete_venue/${stadium_name}`);
    }
  }
  return (
    <>
    <div className="d-inline-flex p2">
      <div>
        <button className="func" onClick={handleSubmit}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <button className="func" onClick={e=>delete_venue(stadium_name,e)}>
          <span>Delete</span>
        </button>
      </div>
      <div>
        <button className="func" onClick={showtable}>
          <span>Display</span>
        </button>
      </div>
      <div>
        <button className="func" onClick={(e)=>update_venue(stadium_name,e)}>
          <span>Update</span>
        </button>
      </div>
    </div>
      
    <form action="">
      <div className="parentPlayer mx-5">
          <div className="div1">
            <label htmlFor="sname">Stadium Name :-</label>
            <input type="text" id="sname" name="sname" required onChange={(event)=>{set_stadium_name(event.target.value);}} />
            <br/>
            <br/>
          </div>
          <div className="div2">
            <label htmlFor="matchid">Match ID :-</label>
            
            <input type="text" id="matchid" name="matchid" required onChange={(event)=>{set_matchid(event.target.value);}} />
            <br></br>
          </div>
          <div className="div3">
            <label htmlFor="city">City:-</label>
            <input type="text" id="city" name="city" required  onChange={(event)=>{set_city(event.target.value);}}/>
            <br></br>
          </div>

          <div className="div4">
            <label htmlFor="area">Area Name:-</label>
            <input type="text" id="area" name="area" required  onChange={(event)=>{set_area_name(event.target.value);}}/>
            <br></br>
          </div>
          <div className="div5">
            <label htmlFor="humi">Humidity :-</label>
            <input type="int" id="humi" name="humi" required  onChange={(event)=>{set_humidity(event.target.value);}} />
            <br></br>
          </div>
          <div className="div6">
            <label htmlFor="temp">Temperature :-</label>
            <input type="int" id="temp" name="temp" required  onChange={(event)=>{set_temperature(event.target.value);}} />
            <br></br>
          </div>
          <div className="div7">
            <label htmlFor="weather">Weather :-</label>
            <input type="text" id="weather" name="weather" required  onChange={(event)=>{set_weather(event.target.value);}} />
            <br></br>
          </div>
          <div className="div8">
            <label htmlFor="capacity">Capacity :-</label>
            <input type="int" id="capacity" name="capacity" required  onChange={(event)=>{set_capacity(event.target.value);}}/>
            <br></br>
          </div>
      </div>
        </form>

      <div id='tables'>
      <table className="table table-hover table-dark text-light">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Stadium Name</th>
            <th scope="col">Match id</th>
            <th scope="col">City</th>
            <th scope="col">Area Name</th>
            <th scope="col">Humidity</th>
            <th scope="col">Temperature</th>
            <th scope="col">Weather</th>
            <th scope="col">Capacity</th>
          </tr>
        </thead>
        <tbody>
          
          {data.map((item,index)=>{
            return(
          <tr key={item.stadium_name}>
            <th scope="row">{index+1}</th>
            <td>{item.stadium_name}</td>
            <td>{item.matchid}</td>
            <td>{item.city}</td>
            <td>{item.area_name}</td>
            <td>{item.humidity}</td>
            <td>{item.temperature}</td>
            <td>{item.weather}</td>
            <td>{item.capacity}</td>
          </tr>

            )
          })}
          
          
        </tbody>
      </table>
      </div>
    
    </>
  )
}

export default Venue;
