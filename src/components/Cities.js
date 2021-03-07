import React from "react";

function Cities(props) {
  return (
    <div>
      <label htmlFor="cars">Cities</label>
      <select name="cars" id="cars">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="opel">Opel</option>
        <option value="audi">Audi</option>
      </select>
     
    </div>
  );
}

export default Cities;
