import React from "react";
import Card from "./Card";
import Currency from "../../../images/middleList/currency.png";
import currencyItemGold from "../../../images/middleList/currency_item_gold.png";
import currencyItemGrey from "../../../images/middleList/currency_item_grey.png";
import currencyItemBronze from "../../../images/middleList/currency_item_bronze.png";

const testArray = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
];

const Item = ({ text, itemOrder }) => (
  <div
    style={{ height: "25px" }}
    className="flex justify-between items-end cursor-pointer hover:filter hover:brightness-125 transition"
  >
    <div className="flex items-end">
      <div style={{ width: "30px", height: "25px" }} className="relative mr-10px flex justify-center items-end">
        {itemOrder === 0 && <img className="" src={currencyItemGold} alt="" />}
        {itemOrder === 1 && <img className="" src={currencyItemGrey} alt="" />}
        {itemOrder === 2 && <img className="" src={currencyItemBronze} alt="" />}
        <p
          style={{
            color: itemOrder < 3 ? "#fff" : "#666666",
            textShadow: itemOrder < 3 && "0px 0px 2px #00000090",
          }}
          className="absolute bottom-4px z-10 font-spoqa text-13px h-10px flex items-center "
        >
          {itemOrder + 1}
        </p>
      </div>
      <p
        style={{ color: itemOrder < 3 ? "#c03a41" : "#666666" }}
        className="text-14px h-14px flex items-center font-spoqaMedium tracking-tight mb-2px"
      >
        Happy***
      </p>
    </div>
    <div>
      <p
        style={{ color: itemOrder < 3 ? "#c03a41" : "#666666" }}
        className="text-14px h-14px flex items-center font-spoqaMedium tracking-tight mb-2px"
      >
        {text}
      </p>
    </div>
  </div>
);

const CurrencyCard = () => {
  return (
    <Card HeaderIcon={Currency} headerText="금주의 환전 TOP" headerActionText="">
      <div style={{ height: "143px" }} className="overflow-hidden">
        <div id="middle-list" className="flex flex-col mt-4px w-full pl-10px pr-15px space-y-px">
          {testArray.map((item, i) => (
            <Item key={i} text="₩130,456,800" itemOrder={item} />
          ))}
        </div>
      </div>
    </Card>
  );
};

export default CurrencyCard;
