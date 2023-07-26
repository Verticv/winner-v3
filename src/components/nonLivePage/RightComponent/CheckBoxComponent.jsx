import React from "react";
import { useState } from "react";
import "./style.css";

const CheckBoxComponent = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setSelectedItems([...selectedItems, value]);
    } else {
      setSelectedItems(selectedItems.filter((item) => item !== value));
    }
  };
  return (
    <>
      <div style={{ background: "#ffffff", width: "308px" }} className=" pt-px">
        <div
          style={{
            height: "35px",
            borderColor: "#cccccc",
            background: "#dddddd",
          }}
          className="flex items-center border-b border-t "
        >
          <p
            style={{ color: "#444444" }}
            className="ml-9px mt-10px mb-11px text-12px font-MalgunGothicBold tracking-tight"
          >
            배당 및 변경사항을 자동승인 하겠습니까?
          </p>
        </div>

        <div
          style={{
            height: "34px",
            borderColor: "#cccccc",
            background: "#dddddd",
          }}
          className="flex items-center border-b "
        >
          <input
            type="checkbox"
            value="item1"
            checked={selectedItems.includes("item1")}
            onChange={handleCheckboxChange}
            style={{ backgroundColor: "#281d45", borderColor: "#6045ad" }}
            className="ml-10px mt-9px mb-10px "
          />
          <p
            style={{ color: "#666666" }}
            className="ml-9px mt-11px mb-14px text-12px font-malgun tracking-tight"
          >
            높은 배당만 수락
          </p>
        </div>

        <div
          style={{
            height: "34px",
            borderColor: "#cccccc",
            background: "#dddddd",
          }}
          className="flex items-center border-b "
        >
          <input
            type="checkbox"
            value="item2"
            checked={selectedItems.includes("item2")}
            onChange={handleCheckboxChange}
            style={{ backgroundColor: "#281d45", borderColor: "#6045ad" }}
            className="ml-10px mt-9px mb-10px "
          />
          <p
            style={{ color: "#666666" }}
            className="ml-9px mt-11px mb-14px text-12px font-malgun tracking-tight"
          >
            변경되는 배당 수락 (추천)
          </p>
        </div>

        <div
          style={{
            height: "34px",
            borderColor: "#cccccc",
            background: "#dddddd",
          }}
          className="flex items-center border-b "
        >
          <input
            type="checkbox"
            value="item3"
            checked={selectedItems.includes("item3")}
            onChange={handleCheckboxChange}
            style={{ backgroundColor: "#281d45", borderColor: "#6045ad" }}
            className="ml-10px mt-9px mb-10px "
          />
          <p
            style={{ color: "#666666" }}
            className="ml-9px mt-11px mb-14px text-12px font-malgun tracking-tight"
          >
            변경되는 배당 거절
          </p>
        </div>
      </div>
    </>
  );
};

export default CheckBoxComponent;
