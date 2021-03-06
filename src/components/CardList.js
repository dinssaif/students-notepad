import React from "react";
import Card from "./Card";

function CardList(props) {
  const today = new Date();
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const date =
    month[today.getMonth()] +
    " " +
    today.getDate() +
    ", " +
    today.getFullYear();
  return (
    <div>
      {props.newData.map((item) => {
        return (
          <Card
            title={item.title}
            notes={item.notes}
            key={item.key}
            timeNow={date}
            deleteCard={() => {
              return props.deleteItems(item.key);
            }}
          />
        );
      })}
    </div>
  );
}

export default CardList;
