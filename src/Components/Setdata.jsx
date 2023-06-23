import React, { useEffect, useState } from 'react'
import './set.css'
import { useDispatch } from 'react-redux'
import { funcsend, takedata } from './Redux/Actiontype'

const getdata=()=>{
    let list = localStorage.getItem('persondata')
    if(list){
       return JSON.parse(list)
    }
    else{
        return []
    }
}
const Setdata = () => {
    const dispatch = useDispatch()

    const obj={name:"",date:"",number:"",adhar:"",age:""}
    const [persondata, setpersondata] = useState(obj)
    const [alldata,setalldata] =useState(getdata())
    const [hello,sethello] = useState(2)
    console.log(hello);
   dispatch(funcsend(sethello))

    const handledata = (e)=>{ 
        setpersondata({...persondata,[e.target.name]:e.target.value})
    }
     
    const addfunc=()=>{
        setalldata([...alldata,persondata])
    }
    useEffect(() => {
     localStorage.setItem('persondata',JSON.stringify(alldata))
    }, [alldata])
    

    const deletefunc=(id)=>{
     let updatearr = alldata.filter((ele,index)=>{
        return  id !== index
     })
     setalldata(updatearr)
    }

   dispatch(takedata(alldata))
  return (
    <>
    <div className='sethead'>
     <p className='paragr'>Add New Person</p>
     <table>
      <tr>
        <th>Name</th>
        <th>Date of Birth</th>
        <th>Mobile Number</th>
        <th>Adhar Number</th>
        <th>Age</th>
        <th>Actions</th>
      </tr>
      {alldata.map((ele,id)=>{
        return<tr key={id}>
        <td>{ele.name}</td>
        <td>{ele.date}</td>
        <td>{ele.number}</td>
        <td>{ele.adhar}</td>
        <td>{ele.age}</td>
        <td><button>save</button><button onClick={()=>deletefunc(id)}>delete</button></td>
      </tr>
      })}
      <tr>
        <td><input placeholder='name' type='text' name='name' value={persondata.name} onChange={handledata}></input></td>
        <td><input placeholder='DOB' type='date' name='date' value={persondata.date} onChange={handledata}></input></td>
        <td><input placeholder='Mob...' type='number' name='number' value={persondata.number} onChange={handledata}></input></td>
        <td><input placeholder='Adhar..' type='number'name='adhar' value={persondata.adhar} onChange={handledata}></input></td>
        <td><input placeholder='age' type='number' name='age' value={persondata.age} onChange={handledata}></input></td>
        <td><button>Save</button><button>delete</button></td>
      </tr>
    </table>
    <div className='buttonpartset'>
        <button onClick={addfunc}>ADD</button>
    </div>
    </div>
    
    </>
  )
}

export default Setdata