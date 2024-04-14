import React, { useState, useEffect } from "react";
import axios from "axios";

const DataTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:3001/get-form-data");
      setData(response.data);
    };
    fetchData();
  }, []);

  return (
    <table id="table">
      <thead>
        <tr>
          <th style={{textAlign:"right"}}>S.No</th>
          <th style={{textAlign:"left"}}>Gender</th>
          <th style={{textAlign:"right"}}>Grade A</th>
          <th style={{textAlign:"right"}}>Grade B</th>
          <th style={{textAlign:"right"}}>Grade C</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={item._id}>
            <td style={{textAlign:"right"}}>{index + 1}</td>
            <td style={{textAlign:"left"}}>{item.gender}</td>
            <td style={{textAlign:"right"}}>{item.score1}</td>
            <td style={{textAlign:"right"}}>{item.score2}</td>
            <td style={{textAlign:"right"}}>{item.score3}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;