import React from "react";
import { useSelector } from "react-redux";
import CenterAccordionButton from "./CenterAccordionButton";

const CenterAccordion = ({ setEnglandActive }) => {
  const data = useSelector((state) => state?.nonLive?.data);
  // const state = useSelector((state) => state);

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
            />
          );
        })}
      </div>
    </>
  );
};

export default CenterAccordion;
