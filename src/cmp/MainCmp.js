import React, { useEffect, useState } from "react";
import axios from "axios";

const MainCmp = () => {
  const [dates, setDates] = useState([]);
  const [status, setStatus] = useState({});
  const today = new Date().toISOString().split("T")[0];

  useEffect(() => {
    // Fetch existing status from backend
    // axios.get("/api/status").then((response) => {
    //   setStatus(response.data);
    // });

    // Generate dates till March 31, 2025
    const end = new Date("2025-03-31");
    const tempDates = [];
    for (let d = new Date(); d <= end; d.setDate(d.getDate() + 1)) {
      tempDates.push(new Date(d).toISOString().split("T")[0]);
    }
    setDates(tempDates);
  }, []);

  const handleCheck = (date) => {
    const updatedStatus = { ...status, [date]: !status[date] };
    setStatus(updatedStatus);

    // Save to backend
    // axios.post("/api/status", { date, status: updatedStatus[date] });
  };

  return (
    <>
      <h1 style={{display:'flex',alignItems:'center',justifyContent:'center'}}>Daily Routine Tracker</h1>
    <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
      <table border="2" >
        <thead >
          <tr>
            <th style={{width:'150px'}}>Date</th>
            <th style={{width:'100px'}}>Leetcode daily 1 Q [LC 150]</th>
            <th style={{width:'100px'}}>Dev</th>
            <th style={{width:'100px'}}>GATE</th>
             
          </tr>
        </thead>
        <tbody>
          {dates.map((date) => (
            <tr key={date}>
                  <td style={{display:'flex',justifyContent:'center'}}>
                    {String((new Date(date)).getDate()).padStart(2, "0")}/
     {String((new Date(date)).getMonth() + 1).padStart(2, "0")}/  
     {(new Date(date)).getFullYear()}
      {/* {`${day}/${month}/${year}`} */}
   
                    </td> 
              {/* <td>{date}</td> */}
              <td style={{backgroundColor:'GrayText'}}>
                <input
                  type="checkbox"
                  checked={!!status[date]}
                  onChange={() => handleCheck(date)}
                  disabled={date !== today}
                  />
              </td>
              <td style={{backgroundColor:'GrayText'}}>
                <input
                  type="checkbox"
                  checked={!!status[date]}
                  onChange={() => handleCheck(date)}
                  disabled={date !== today}
                />
              </td>
              <td style={{backgroundColor:'GrayText'}}>
                <input
                  type="checkbox"
                  checked={!!status[date]}
                  onChange={() => handleCheck(date)}
                  disabled={date !== today}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
          </>
  );
};

export default MainCmp;
