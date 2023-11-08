import "./Day.css";

const Day = (): React.ReactElement => {
  const today = new Date();
  const month = today.getMonth() + 1;

  const showDay = today.getDate() + "/" + month + "/" + today.getFullYear();

  const showTime =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

  return (
    <div className="day">
      <div className="day__section">
        <h2 className="day__title">
          ✹ TODAY IS {showDay}
          {""} ✹ {""}
          {showTime}
          {""}h
        </h2>
      </div>
    </div>
  );
};

export default Day;
