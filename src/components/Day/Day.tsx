import { useEffect, useState } from "react";
import "./Day.css";

const Day = (): React.ReactElement => {
  const [time, setTime] = useState("");
  const today = new Date();
  const month = today.getMonth() + 1;

  const showDay = today.getDate() + "/" + month + "/" + today.getFullYear();

  const showTime = () =>
    setTime(
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds(),
    );

  useEffect(() => {
    showTime();
    setInterval(() => showTime(), 1000);
  });

  return (
    <div className="day">
      <div className="day__section">
        <h2 className="day__title">
          ✹ TODAY IS {showDay}
          {""} ✹ {""}
          {time}
          {""}h
        </h2>
      </div>
    </div>
  );
};

export default Day;
