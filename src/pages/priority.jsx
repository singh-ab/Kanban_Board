import React from "react";
import Status from "../components/status";
import Card from "../components/card";
import {
  HighPriority,
  LowPriority,
  NoPriority,
  UrgentPriorityColor,
  MediumPriority,
} from "../utils/svgexp";

const Priority = ({ priorityCounts, groupedTicketsByPriority }) => {
  console.log(priorityCounts);
  console.log(groupedTicketsByPriority);
  const {
    high: highPriorityCards,
    low: lowPriorityCards,
    medium: mediumPriorityCards,
    noPriority: noPriorityCards,
    urgent: urgentPriorityCards,
  } = groupedTicketsByPriority;
  console.log(highPriorityCards);
  
  const { high, low, medium, noPriority, urgent } = priorityCounts;
  return (
    <>
      <div className="grid-5" style={{ margin: "0 5rem" }}>
        <div>
          <Status status="No Priority" imgSvg={NoPriority} count={noPriority} />
          {noPriorityCards.map((data) => (
            <Card key={data.id} data={data} status={true} />
          ))}
        </div>
        <div>
          <Status status="Urgent" imgSvg={UrgentPriorityColor} count={urgent} />
          {urgentPriorityCards.map((data) => (
            <Card key={data.id} data={data} status={true} />
          ))}
        </div>
        <div>
          <Status status="High" imgSvg={HighPriority} count={high} />
          {highPriorityCards.map((data) => (
            <Card key={data.id} data={data} status={true} />
          ))}
        </div>
        <div>
          <Status status="Medium" imgSvg={MediumPriority} count={medium} />
          {mediumPriorityCards.map((data) => (
            <Card key={data.id} data={data} status={true} />
          ))}
        </div>
        <div>
          <Status status="Low" imgSvg={LowPriority} count={low} />
          {lowPriorityCards.map((data) => (
            <Card key={data.id} data={data} status={true} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Priority;
