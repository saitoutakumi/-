import { Link } from "react-router-dom";
import Select from "react-select";

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

const Personaldata = () => {
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
            // onChange={handleChange}
          />
          男性
          <input
            type="radio"
            name="gender"
            value="女性"
            className="ml-2"
            // onChange={handleChange}
          />
          女性
        </div>

        <p className="mt-6">-生年月日-</p>

        <div className="flex mt-4 mb-4">
          <Select options={birthYearSelect} />年
          <Select options={birthMonthSelect} />月
          <Select options={birthDaySelect} />日
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
export default Personaldata;
