import React from "react";

const Style2 = () => {
    const styleTitle={
        fontSize: "2rem",
        color: "red",
        fontWeight: "bold",
        textAlign: "center"
    };
  return (
   
    <div>
      <h2 style={styleTitle}>Jsx Loops</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error enim quam
        quis, veniam numquam dolorem. Magnam, explicabo tenetur nostrum ducimus
        voluptatum impedit dolores sunt minus ipsum enim saepe atque inventore?
      </p>
      <h2 style={{...styleTitle, color:"blue"}}>Component Props</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error enim quam
        quis, veniam numquam dolorem. Magnam, explicabo tenetur nostrum ducimus
        voluptatum impedit dolores sunt minus ipsum enim saepe atque inventore?
      </p>
    </div>
  );
};

export default Style2;
