import React, { useState } from 'react';
import './set.css';
import { useSelector } from 'react-redux';

const Retrieve = () => {
  const alldata = useSelector((Storedata) => Storedata);
  console.log(alldata.sendata);
  const [adhaarno, setadhaarno] = useState(null);
  const [firstdata, setfirstdata] = useState([]);

  const finddata = () => {
    let resdata = alldata.add_data.find((ele) => {
      return ele.adhar === adhaarno;
    });
    setfirstdata([resdata]);
  };

  return (
    <div className='sethead'>
      <p className='paragr'>Retrieve Information</p>
      <div className='resultbox'>
        <input
          type='text'
          id='retid'
          onChange={(e) => setadhaarno(e.target.value)}
        />
        <button id='retbu' onClick={finddata}>
          Find
        </button>
        <table>
          <tbody>
            {firstdata.length === 1 && (
              <tr>
                <th>Name</th>
                <th>Date of Birth</th>
                <th>Mobile Number</th>
                <th>Adhar Number</th>
                <th>Age</th>
              </tr>
            )}
            {firstdata.map((ele, index) => (
              <tr key={index}>
                <td>{ele.name}</td>
                <td>{ele.date}</td>
                <td>{ele.number}</td>
                <td>{ele.adhar}</td>
                <td>{ele.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Retrieve;