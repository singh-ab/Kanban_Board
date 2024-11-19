import React from "react";
import Status from "../components/status";
import Card from "../components/card";
import { Backlog, Cancelled, Done, InProgress, Todo } from "../utils/svgexp";

const Home = ({ statusCounts, groupedTickets }) => {
  console.log(statusCounts);
  console.log(groupedTickets);
const {
  todo: todoCards,
  inprogress: inProgressCards,
  backlog: backlogCards,
  done: doneCards,
  cancelled: cancelledCards,
} = groupedTickets;
  console.log(todoCards);
  const { todo, inprogress, backlog, done, cancelled } = statusCounts;
  return (
    <>
      <div className="grid-5" style={{ margin: "0 5rem" }}>
        <div>
          <Status status="Backlog" imgSvg={Backlog} count={backlog} />
          {backlogCards.map((data) => (
            <Card key={data.id} data={data} status={false} />
          ))}
        </div>
        <div>
          <Status status="Todo" imgSvg={Todo} count={todo} />
          {todoCards.map((data) => (
            <Card key={data.id} data={data} status={false} />
          ))}
        </div>
        <div>
          <Status status="In Progress" imgSvg={InProgress} count={inprogress} />
          {inProgressCards.map((data) => (
            <Card key={data.id} data={data} status={false} />
          ))}
        </div>
        <div>
          <Status status="Done" imgSvg={Done} count={done} />
          {doneCards.map((data) => (
            <Card key={data.id} data={data} status={false} />
          ))}
        </div>
        <div>
          <Status status="Cancelled" imgSvg={Cancelled} count={cancelled} />
          {cancelledCards.map((data) => (
            <Card key={data.id} data={data} status={false} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
