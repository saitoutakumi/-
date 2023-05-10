import { Link } from "react-router-dom";
import Select from "react-select";
import React, { useEffect, useState } from "react";

const birthYearSelect = [];
for (let i = 1900; i < 2024; i++) {
  birthYearSelect.push({ value: "year", label: i });
}

const birthMonthSelect = [];
for (let i = 1; i < 13; i++) {
  birthMonthSelect.push({ value: "month", label: i });
}

const birthDaySelect = [];
for (let i = 1; i < 32; i++) {
  birthDaySelect.push({ value: "day", label: i });
}

const PersonalData = () => {
  const [gender, setGender] = useState(localStorage.getItem("gender") || "");
  const handleChangeGender = (gender) => {
    setGender(gender.target.value);
    console.log(gender.target.value);
  };

  const [birthYear, setBirthYear] = useState(
    JSON.parse(localStorage.getItem("birthYear")) || null
  );
  const [birthMonth, setBirthMonth] = useState(
    JSON.parse(localStorage.getItem("birthMonth")) || null
  );
  const [birthDay, setBirthDay] = useState(
    JSON.parse(localStorage.getItem("birthDay")) || null
  );

  const handleChangeBirthYear = (selectedYear) => {
    setBirthYear(selectedYear);
    console.log(selectedYear);
  };

  const handleChangeBirthMonth = (selectedMonth) => {
    setBirthMonth(selectedMonth);
    console.log(selectedMonth);
  };

  const handleChangeBirthDay = (selectedDay) => {
    setBirthDay(selectedDay);
    console.log(selectedDay);
  };

  // 入力された性別を保持
  useEffect(() => {
    localStorage.setItem("gender", gender);
  });

  // 入力された生年月日を保存
  useEffect(() => {
    localStorage.setItem("birthYear", JSON.stringify(birthYear));
    localStorage.setItem("birthMonth", JSON.stringify(birthMonth));
    localStorage.setItem("birthDay", JSON.stringify(birthDay));
  }, [birthYear, birthMonth, birthDay]);

  return (
    <>
      <div className="m-4 pl-4 pr-4 border-4 border-sky-500">
        <div className="flex justify-center m-4 grid">
          <h1>お客様の情報を入力してください</h1>
        </div>

        <p>-性別-</p>

        <div className="mt-4">
          <input
            type="radio"
            name="gender"
            value="男性"
            onChange={handleChangeGender}
            checked={gender === "男性"}
          />
          男性
          <input
            type="radio"
            name="gender"
            value="女性"
            className="ml-2"
            onChange={handleChangeGender}
            checked={gender === "女性"}
          />
          女性
        </div>

        <p className="mt-6">-生年月日-</p>

        <div className="flex mt-4 mb-4">
          <Select
            options={birthYearSelect}
            onChange={handleChangeBirthYear}
            value={birthYear}
          />
          年
          <Select
            options={birthMonthSelect}
            onChange={handleChangeBirthMonth}
            value={birthMonth}
          />
          月
          <Select
            options={birthDaySelect}
            onChange={handleChangeBirthDay}
            value={birthDay}
          />
          日
        </div>
      </div>

      <div className="flex justify-center">
        <Link to="/question1">
          <button className="h-12 px-2 m-2 text-lg text-white bg-green-500">
            {"次へ進む  >"}
          </button>
        </Link>
      </div>
    </>
  );
};
export default PersonalData;
