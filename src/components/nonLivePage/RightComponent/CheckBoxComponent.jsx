import React from "react";
import { useState } from "react";
import icon from "../../../images/nonLivePage/RightComponent/CheckBoxComponent/Arrow.png";
import "./style.css";

const CheckBoxComponent = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [showBox, setShowBox] = useState(true);

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
      <div
        style={{
          background: "#eeeeee",
          width: "308px",
          height: "47px",
          borderColor: "#cccccc",
        }}
        className="border-t flex items-center justify-between cursor-pointer"
        onClick={() => {
          setShowBox(true);
        }}
      >
        <p
          style={{
            color: "#444444",
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            maxWidth: "260px",
          }}
          className="ml-9px mt-10px mb-11px text-13px font-bold tracking-tight"
        >
          소수점
        </p>
        <img className={` mr-14px mt-px ${!showBox ? "transform rotate-180" : ""}`} src={icon} alt="img" />
      </div>

      {showBox && (
        <>
          <div
            style={{
              minHeight: "35px",
              borderColor: "#cccccc",
              background: "#dddddd",
            }}
            className="flex items-center border-b border-t py-10px"
          >
            <p style={{ color: "#444444" }} className="ml-9px text-12px font-bold tracking-tight">
              배당 및 변경사항을 자동승인 하겠습니까?
            </p>
          </div>

          <div
            style={{
              minHeight: "34px",
              borderColor: "#cccccc",
              background: "#dddddd",
            }}
            className="flex items-center border-b py-10px"
          >
            <input
              type="checkbox"
              value="item1"
              checked={selectedItems.includes("item1")}
              onChange={handleCheckboxChange}
              style={{ backgroundColor: "#281d45", borderColor: "#6045ad" }}
              className="ml-10px flex-shrink-0"
            />
            <p style={{ color: "#666666" }} className="ml-9px text-12px font-malgun tracking-tight">
              높은 배당만 수락
            </p>
          </div>

          <div
            style={{
              minHeight: "34px",
              borderColor: "#cccccc",
              background: "#dddddd",
            }}
            className="flex items-center border-b py-10px"
          >
            <input
              type="checkbox"
              value="item2"
              checked={selectedItems.includes("item2")}
              onChange={handleCheckboxChange}
              style={{ backgroundColor: "#281d45", borderColor: "#6045ad" }}
              className="ml-10px flex-shrink-0"
            />
            <p style={{ color: "#666666" }} className="ml-9px text-12px font-malgun tracking-tight">
              변경되는 배당 수락 (추천)
            </p>
          </div>

          <div
            style={{
              minHeight: "34px",
              borderColor: "#cccccc",
              background: "#dddddd",
            }}
            className="flex items-center border-b py-10px"
          >
            <input
              type="checkbox"
              value="item3"
              checked={selectedItems.includes("item3")}
              onChange={handleCheckboxChange}
              style={{ backgroundColor: "#281d45", borderColor: "#6045ad" }}
              className="ml-10px flex-shrink-0"
            />
            <p style={{ color: "#666666" }} className="ml-9px text-12px font-malgun tracking-tight">
              변경되는 배당 거절
            </p>
          </div>
        </>
      )}
      {/* </div> */}
    </>
  );
};

export default CheckBoxComponent;
