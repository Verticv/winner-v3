import React, { useState } from "react";
import { useSelector } from "react-redux";
import CenterAccordionButton from "./CenterAccordionButton";

const CenterAccordion = ({ setEnglandActive }) => {
  const data = useSelector((state) => state?.nonLive?.data);
  const [lastItemActive, setLastItemActive] = useState(false);

  return (
    <>
      <div className="h-full items-start mr-10px mt-5px">
        {data?.map((item, index) => {
          return (
            <CenterAccordionButton
              key={index}
              id={item.id}
              title={item.title}
              date={item.date}
              icon2={item.icon}
              cards={item.teams}
              setEnglandActive={setEnglandActive}
              lastItemActive={lastItemActive}
              setLastItemActive={setLastItemActive}
            />
          );
        })}
      </div>
    </>
  );
};

export default CenterAccordion;
