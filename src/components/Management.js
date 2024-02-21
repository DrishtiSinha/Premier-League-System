import React,{useState,useEffect} from 'react'
import axios from 'axios';
const  Management=()=> {


  const [first_name,set_first_name]= useState("");
  const [emp_id,set_emp_id]= useState("");
  const [last_name,set_last_name]= useState("");
  const [dept_name,set_dept_name]= useState("");
  const [phoneno,set_phoneno]= useState(0);
  const [email,set_email]= useState("");
  const [gender,set_gender]= useState("");
  const [salary,set_salary]= useState(0);
  
  
  const [manage,setManage] = useState([]);


  const handleSubmit = () =>{


    axios.post("http://localhost:4000/add_manage",{
      emp_id:emp_id,
      first_name:first_name,
      last_name:last_name,
      dept_name:dept_name,
      phoneno:phoneno,
      email:email,
      gender:gender,
      salary:salary
    }).then(()=>{
    
      setManage([...manage,{
        emp_id:emp_id,
        first_name:first_name,
        last_name:last_name,
        dept_name:dept_name,
        phoneno:phoneno,
        email:email,
        gender:gender,
        salary:salary
      },]);
    
    })

  
};

 
const update_manage = (emp_id,e) => {
  console.log("hua kya");
  axios.put("http://localhost:4000/update_manage", {    
    emp_id:emp_id,
    first_name:first_name,
    last_name:last_name,
    dept_name:dept_name,
    phoneno:phoneno,
    email:email,
    gender:gender,
    salary:salary
  }).then(
      (response) => {
        setManage(
          manage.map((item) => {
            return item.emp_id === manage.emp_id
            ? {
              first_name:manage.first_name,
              emp_id:manage.emp_id,
              last_name:manage.last_name,
              dept_name:manage.dept_name,
              phoneno:manage.phoneno,
              email:manage.email,
              gender:manage.gender,
              salary:manage.salary
            }
            : item;
          })
          );
        }
        );
        console.log("ho gaya");
};

const delete_manage = (emp_id,e)=>{
  if(window.confirm("Are You sure want to delete?")){
    setData(data.filter((v, i) => i !== emp_id));
    axios.delete(`http://localhost:4000/delete_manage/${emp_id}`);
  }
}
  const showtable = (e) => {
    const tab = document.getElementById('tables');
    console.log("hellow");
    tab.style.display = "block";
  }
  const [data,setData] = useState([]);
  const loadData = async ()=>{
    const response = await  axios.get("http://localhost:4000/display_manage");
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
        <button className="func" onClick={e=>delete_manage(emp_id,e)}>
          <span>Delete</span>
        </button>
      </div>
      <div>
        <button className="func" onClick={showtable}>
          <span>Display</span>
        </button>
      </div>
      <div>
        <button className="func" onClick={(e)=>update_manage(emp_id,e)}>
          <span>Update</span>
        </button>
      </div>
    </div>
    
    <form action="">
      <div className="parentMan mx-5">
          <div className="div1">
            <label htmlFor="empid">Employee ID :-</label>
            <input type="text" id="empid" name="empid" required  onChange={(event)=>{set_emp_id(event.target.value);}} />
            <br/>
            <br/>
          </div>
          <div className="div2">
            <label htmlFor="mfname">First Name :-</label>
            
            <input type="text" id="mfname" name="mfname" required  onChange={(event)=>{set_first_name(event.target.value);}} />
            <br></br>
          </div>
          <div className="div3">
            <label htmlFor="mlname">Last Name:-</label>
            <input type="text" id="mlname" name="mlname" required  onChange={(event)=>{set_last_name(event.target.value);}} />
            <br></br>
          </div>

          <div className="div4">
            <label htmlFor="deptname">Dept Name:-</label>
            <input type="text" id="deptname" name="deptname" required onChange={(event)=>{set_dept_name(event.target.value);}} />
            <br></br>
          </div>
          <div className="div5">
            <label htmlFor="phn">Phone Number :-</label>
            <input type="int" id="phn" name="phn" required onChange={(event)=>{set_phoneno(event.target.value);}} />
            <br></br>
          </div>
          <div className="div6">
            <label htmlFor="email">Email :-</label>
            <input type="text" id="email" name="email"  required onChange={(event)=>{set_email(event.target.value);}} />
            <br></br>
          </div>
          <div className="div7">
            <label htmlFor="gender">Gender :-</label>
            <input type="text" id="gender" name="gender" required  onChange={(event)=>{set_gender(event.target.value);}} />
            <br></br>
          </div>
          <div className="div8">
            <label htmlFor="sal">Salary :-</label>
            <input type="int" id="sal" name="sal" required  onChange={(event)=>{set_salary(event.target.value);}}/>
            <br></br>
          </div>
      </div>
        </form>
      
      
        <div id='tables'>
      <table className="table table-hover table-dark text-light">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Employee ID</th>
            <th scope="col">First Name </th>
            <th scope="col">Last Name</th>
            <th scope="col">Dept Name</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Email</th>
            <th scope="col">Gender</th>
            <th scope="col">Salary</th>
          </tr>
        </thead>
        <tbody>
          
          {data.map((item,index)=>{
            return(
          <tr key={item.emp_id}>
            <th scope="row">{index+1}</th>
            <td>{item.emp_id}</td>
            <td>{item.first_name}</td>
            <td>{item.last_name}</td>
            <td>{item.dept_name}</td>
            <td>{item.phoneno}</td>
            <td>{item.email}</td>
            <td>{item.gender}</td>
            <td>{item.salary}</td>
          </tr>

            )
          })}
          
          
        </tbody>
      </table>
      </div>
    </>
  )
}

export default Management;
