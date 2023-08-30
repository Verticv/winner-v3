import CouponGiftPopup from "components/popups/CouponGiftPopup";
import PopupControls from "components/popups/PopupControls";
import React, { useState } from "react";
import MyPageTitle from "./MyPageTitle";
import Pagination from "./Pagination";
import CouponGiftTable from "./tables/CouponGiftTable";

const CouponGift = () => {
  const [page, setPage] = useState(0);
  const [isPopupOpen, setPopupOpen] = useState(true);

  const GiftButton = (
    <div
      style={{
        width: "128px",
        background: "linear-gradient(to right, #15cfee, #3197e5)",
        boxShadow: "0px 2px 2px 0px rgba(0, 0, 0, 0.3)",
      }}
      className="flex items-center justify-center h-36px rounded-6px p-px hover:filter hover:brightness-125 cursor-pointer"
    >
      <span className="tracking-tight text-13px text-white text-shadow-5">쿠폰선물하기</span>
    </div>
  );

  return (
    <div className="flex flex-col w-full items-center">
      <div className="w-full flex justify-between">
        <MyPageTitle title="쿠폰선물" couponCount={32} couponText="선물 가능한 쿠폰 : " />
        <div
          className=" text-16px w-full text-right text-eeeeee space-x-4px h-16px mt-px"
          style={{ letterSpacing: "-0.1em" }}
        >
          <span className="font-bold mt-px" style={{ color: "#ffd98b" }}>
            쿠폰선물하기
          </span>
          <span className="mt-px">버튼을 클릭하여 쿠폰받을 회원을 선택하세요.</span>
        </div>
      </div>
      <div className="mt-10px">
        <CouponGiftTable />
      </div>

      <div className="flex w-full justify-end mt-20px">
        <PopupControls buttonChild={GiftButton} isPopupOpen={isPopupOpen} setPopupOpen={setPopupOpen}>
          <CouponGiftPopup setPopupOpen={setPopupOpen} />
        </PopupControls>
      </div>

      <div className="mt-5px mb-60px">
        <Pagination page={page} setPage={setPage} />
      </div>
    </div>
  );
};

export default CouponGift;
