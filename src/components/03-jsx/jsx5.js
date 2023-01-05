import React from "react";

const Jsx5 = () => {
  const names = ["Ali", "Veli", "Ayşe", "Fatma"];
  const cities = ["Istanbul", "Paris", "London", "Ankara"];

  return (
    <div>
      <ul>
        {names.map((n, i) => (
          <li key={i}>{n}</li>
        ))}
      </ul>
      <select>
        {cities.map((n, i) => (
          <option key={i}>{n}</option>
        ))}
      </select>
    </div>
  );
};

export default Jsx5;
