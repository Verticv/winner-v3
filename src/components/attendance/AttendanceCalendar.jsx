import React from "react";
import {
  startOfWeek,
  format,
  addDays,
  startOfMonth,
  endOfMonth,
  endOfWeek,
  isSameMonth,
  addMonths,
  subMonths,
} from "date-fns";
import Arrow from "../../images/arrows/calender_arrow.png";
import AttendanceEmpty from "../../images/attendance/attendance_empty.png";
import AttendanceFilled from "../../images/attendance/attendance_filled.png";
import AttendanceBanner from "../../images/attendance/attendance_banner1.png";
import Check from "../../images/attendance/check.png";

class Calendar extends React.Component {
  state = {
    today: new Date(),
    currentMonth: new Date(),
    currendDate: new Date(),
    selectedDate: new Date(),
    isChecked: false,
  };

  renderHeader() {
    const dateFormat1 = "yyyy";
    const dateFormat2 = "MM";

    return (
      <div className="flex items-center w-full justify-center h-23px space-x-30px mt-10px mb-31px">
        <img
          className={`cursor-pointer transform rotate-180 hover:opacity-75`}
          onClick={this.prevMonth}
          src={Arrow}
          alt=""
        />
        <div className="flex items-center h-23px text-white -mt-3px">
          <div className="flex items-center font-roboto text-32px h-23px">
            {format(this.state.currentMonth, dateFormat1)}
          </div>
          <div className="flex items-center text-25px h-23px pt-2px ml-px">년</div>
          <div className="flex items-center font-roboto text-32px h-23px ml-6px">
            {format(this.state.currentMonth, dateFormat2)}
          </div>
          <div className="flex items-center text-25px h-23px pt-2px ml-px">월</div>
        </div>
        <img
          className={`${
            this.state.currentMonth < this.state.today ? "opacity-100 hover:opacity-75" : "opacity-20"
          } cursor-pointer`}
          onClick={this.nextMonth}
          src={Arrow}
          alt=""
        />
      </div>
    );
  }

  renderDays() {
    return (
      <div
        className="text-21px font-bold text-eeeeee flex h-50px border-l rounded-t-10px border-eeeeee"
        style={{
          background: "linear-gradient(to right, #9d3bbb, #5423a0)",
        }}
      >
        <div className="w-full flex items-center justify-center text-red-e65454" style={{ color: "#ff7f7f" }}>
          일
        </div>
        <div className="w-full flex items-center justify-center">월</div>
        <div className="w-full flex items-center justify-center">화</div>
        <div className="w-full flex items-center justify-center">수</div>
        <div className="w-full flex items-center justify-center">목</div>
        <div className="w-full flex items-center justify-center">금</div>
        <div className="w-full flex items-center justify-center">토</div>
      </div>
    );
  }

  renderCells() {
    const { currentMonth, currendDate, isChecked } = this.state;
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const dateFormat = "d";
    const dateFormat1 = "MM/dd";
    const rows = [];

    let days = [];
    let day = startDate;
    let formattedDate = "";
    let formattedDate1 = "";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, dateFormat);
        formattedDate1 = format(day, dateFormat1);
        days.push(
          <div
            style={{ height: "130px" }}
            className="relative w-full border-t border-l border-eeeeee flex items-center justify-center"
            key={day}
          >
            <div
              className={`text-r666666 text-21px font-roboto mt-19px ml-18px h-full w-full flex items-start justify-start`}
            >
              <p style={{ color: day.getDay() === 0 && "#ff7f7f" }}>{isSameMonth(day, monthStart) && formattedDate}</p>
            </div>
            {isSameMonth(day, monthStart) && (
              <img
                className="absolute"
                src={
                  isChecked && format(currendDate, dateFormat1) === formattedDate1 ? AttendanceFilled : AttendanceEmpty
                }
                alt=""
              />
            )}
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="flex" key={day}>
          {days}
        </div>
      );
      days = [];
    }

    return (
      <div style={{ height: "", width: "1112px" }} className="overflow-hidden">
        {rows}
      </div>
    );
  }

  onDateClick = (day) => {
    this.setState({
      selectedDate: day,
    });
  };

  nextMonth = () => {
    if (this.state.currentMonth < this.state.today) {
      this.setState({
        currentMonth: addMonths(this.state.currentMonth, 1),
      });
    }
  };

  prevMonth = () => {
    this.setState({
      currentMonth: subMonths(this.state.currentMonth, 1),
    });
  };

  checkAttendance = () => {
    this.setState({
      isChecked: true,
    });
  };

  render() {
    return (
      <div className="w-full flex flex-col items-center">
        {this.renderHeader()}
        <div
          style={{
            width: "1260px",
            background: "linear-gradient(to top, #ededeb, #cb78e6)",
            boxShadow: "0px 0px 8px 0px rgba(0, 0, 0, 0.5)",
          }}
          className="rounded-10px overflow-hidden p-px"
        >
          <div
            className="w-full relative rounded-10px p-73px"
            style={{ background: "#f7f7f7", paddingTop: "74px", paddingBottom: "74px" }}
          >
            <div
              className="w-full bg-white rounded-8px border mb-15px flex pt-15px pb-26px relative"
              style={{ borderColor: "#cccccc" }}
            >
              <div style={{ width: "171px" }} className="flex items-center justify-center pt-11px">
                <img src={AttendanceFilled} alt="" className="object-none" />
              </div>

              <div className="w-full">
                <div className="flex space-x-8px text-r666666 items-center font-bold">
                  <img src={Check} alt="" className="w-23px h-23px flex-shrink-0" />
                  <span className="text-20px">출석체크 이벤트 </span>
                </div>
                <div className="mt-12px flex flex-col space-y-16px text-r666666 tracking-tight text-16px ml-2px font-bold">
                  <span className="h-14px space-y-4px">
                    <span className="mr-5px font-bold">✓</span>
                    일주일(7일) 연속 출석 시
                    <span className="font-bold" style={{ color: "#f04281" }}>
                      {" "}
                      1만 포인트{" "}
                    </span>
                    지급
                  </span>
                  <span className="h-14px space-y-4px">
                    <span className="mr-5px font-bold">✓</span>
                    매일 3만원 이상 충전, 일주일(7일) 출석 시
                    <span className="font-bold" style={{ color: "#f04281" }}>
                      {" "}
                      3만 포인트{" "}
                    </span>
                    지급
                  </span>
                  <span className="h-14px space-y-4px">
                    <span className="mr-5px font-bold">✓</span>
                    매일 3만원 이상 충전, 한달 출석 시
                    <span className="font-bold" style={{ color: "#f04281" }}>
                      {" "}
                      10만 포인트{" "}
                    </span>
                    지급
                  </span>
                </div>
                <img src={AttendanceBanner} alt="" className="absolute right-10px bottom-7px" />
              </div>
            </div>
            <div className="rounded-10px border border-eeeeee">
              <div className=" rounded-10px border-t border-b border-r border-eeeeee overflow-hidden bg-white">
                {this.renderDays()}
                {this.renderCells()}
              </div>
            </div>
            <div className="flex absolute bottom-3px left-0 right-0 h-19px justify-center items-center text-20px mb-26px text-r666666 tracking-tight">
              2021년 07월은 총
              <p className="mx-4px font-bold" style={{ color: "#33a1e9" }}>
                7일
              </p>
              출석 하였습니다
            </div>
          </div>
        </div>
        <button
          className="flex items-center justify-center h-52px rounded-6px  mt-20px mb-63px p-px hover:filter hover:brightness-125 shadow-link cursor-pointer"
          style={{
            width: "192px",
            background: "linear-gradient(to right, #15cfee, #3197e5)",
            boxShadow: "0px 2px 2px 0px rgba(0, 0, 0, 0.3)",
          }}
          onClick={this.checkAttendance}
        >
          <span className="font-spoqaMedium tracking-tight text-16px text-white text-shadow-5 -mt-px">
            출석체크하기
          </span>
        </button>
      </div>
    );
  }
}

export default Calendar;
