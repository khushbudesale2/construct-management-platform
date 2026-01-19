import React, { useState } from 'react';
import axios from 'axios';

export default function BlueprintForm(){
  const [name,setName] = useState('');
  const [fields,setFields] = useState([{type:'Text',label:'',position:{x:0,y:0}}]);

  const handleSubmit = async (e:any)=>{
    e.preventDefault();
    await axios.post('/api/blueprints',{name,fields});
    alert("Blueprint Created!");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Blueprint Name" value={name} onChange={e=>setName(e.target.value)} />
      <button type="submit">Create Blueprint</button>
    </form>
  )
}
