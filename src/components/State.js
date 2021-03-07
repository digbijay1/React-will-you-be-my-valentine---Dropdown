import React, { useState } from "react";
import Cities from "./Cities";
function State(props) {
  const [value, setValue] = React.useState();
  const [getval,setGetVal]=React.useState();
  return (
    <div>
      <label htmlFor="cars">State</label>
      <select
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
        name="cars"
        id="cars"
      >
        {props.value1.map((data, index) => {
          return <option value={getval}
        onChange={(e) => setGetVal(e.currentTarget.value)} className="state">{data.name}</option>;
        })
        
        }
      
      </select>

      <label htmlFor="cars">Cities</label>
      <select name="cars" id="cars">
        {value == "Madhya Pradesh"
          ? props.value1[0].city.map((data1) => {
              return <option  value="0">{data1.name}</option>;
              //console.log(data1)
            })
          : null}

        {value == "Jharkhand"
          ? props.value1[1].city.map((data1) => {
              return <option value="1">{data1.name}</option>;
              //console.log(data1)
            })
          : null}
        {value == "Assam"
          ? props.value1[2].city.map((data1) => {
              return <option value="2">{data1.name}</option>;
              //console.log(data1)
            })
          : null}
        {value == "Bihar"
          ? props.value1[3].city.map((data1) => {
              return <option value="3">{data1.name}</option>;
              //console.log(data1)
            })
          : null}
      </select>
    </div>
  );
}

export default State;
