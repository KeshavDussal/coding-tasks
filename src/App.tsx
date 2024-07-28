import React, { ChangeEvent, useState } from 'react';
import './App.css';
interface FormData{
  firstName:string,
  lastName:string
}
function App() {
  const [formData,setFormData] = useState<FormData>({
    firstName:"",
    lastName:""
  });
  const [showData,setShowData] = useState(false);

  const handleChange = (event:ChangeEvent<HTMLInputElement>)=>{
    const {name,value} = event.target;
    setFormData({
      ...formData,
      [name]:value
    })

  }
 
  const handleSubmit = (event:any)=>{
    event.preventDefault();
    setShowData(true)
    console.log("inside handleSubmit");
  }

  return (
    <div className="App">
        <label htmlFor='fn'>FirstName:</label><input type='text' onChange={handleChange} name="firstName" value={formData.firstName} required/><br/>
        <label htmlFor='ln'>LastName:</label><input type='text' onChange={handleChange} name="lastName" value={formData.lastName} required/><br/>
        <button onClick={handleSubmit}>Submit Form</button>
        {
          formData.firstName && formData.lastName && showData?(
          <div>
            <p>Form Data:</p>
            <p>FirstName:{formData.firstName}</p>
            <p>LastName:{formData.lastName}</p>
          </div>
        ):""
        }
    </div>
  );
}

export default App;
