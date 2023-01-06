import moment from "moment/moment";
import React from "react";
import "./clock2.scss";


const Clock2 = (props) => {
/*     var moment = require('moment');
    require('moment/locale/tr'); */
    console.log(props)
    const{textColor,bgColor}=props;

    const timeStr = moment().format("HH:mm");
    const dateStr = moment().format("LL")
    const dayStr = moment().format("dddd");
    const hour = moment().format("HH");
    let message = "";
    if(hour>=6 && hour< 11){
        message = "Morning";
    }else if(hour>=14 && hour<17){
        message = "Afternoon";
    }else if(hour>=11 && hour<14){
        message = "Noon";
    }else if(hour>=17 && hour<22){
        message = "Evening";
    }else{
        message = "Night";
    }

    const clockStyle = {
      backgroundColor: bgColor,
      color: textColor
    }


  return (
    <div className="clock-container" style={clockStyle}>
      <div className="time">{timeStr}</div>
      <div>
        <div className="date">{dateStr}</div>
        <div className="day">{dayStr} {message}</div>
      </div>
    </div>
  );
};

export default Clock2;
