import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

const Question1 = () => {
  const [answer1, setAnswer1] = useState(localStorage.getItem("answer1") || "");
  const [answer2, setAnswer2] = useState(localStorage.getItem("answer2") || "");
  const [answer3, setAnswer3] = useState(localStorage.getItem("answer3") || "");

  const handleChangeAnswer1 = (answer1) => {
    setAnswer1(answer1.target.value);
    console.log(answer1.target.value);
  };

  const handleChangeAnswer2 = (answer2) => {
    setAnswer2(answer2.target.value);
    console.log(answer2.target.value);
  };

  const handleChangeAnswer3 = (answer3) => {
    setAnswer3(answer3.target.value);
    console.log(answer3.target.value);
  };

  useEffect(() => {
    localStorage.setItem("answer1", answer1);
    localStorage.setItem("answer2", answer2);
    localStorage.setItem("answer3", answer3);
  }, [answer1, answer2, answer3]);

  return (
    <>
      <div className="m-4 pl-4 pr-4 border-4 border-sky-500">
        <div className="flex justify-center m-4 grid">
          <h1>以下にお答えください</h1>
        </div>

        <div>
          <p>現在、生命保険に加入されていますか？</p>
          <div className="mt-4">
            <input
              type="radio"
              name="answer1"
              value="はい"
              onChange={handleChangeAnswer1}
              checked={answer1 === "はい"}
            />
            はい
            <input
              type="radio"
              name="answer1"
              value="いいえ"
              className="ml-2"
              onChange={handleChangeAnswer1}
              checked={answer1 === "いいえ"}
            />
            いいえ
          </div>
        </div>
        <div className="mt-[20px]">
          <p>
            現在入院中ですか。または、最近3ヶ月以内に医師の診察・検査結果、入院・手術を進められたことはありますか？
          </p>
          <div className="mt-4">
            <input
              type="radio"
              name="answer2"
              value="はい"
              onChange={handleChangeAnswer2}
              checked={answer2 === "はい"}
            />
            はい
            <input
              type="radio"
              name="answer2"
              value="いいえ"
              className="ml-2"
              onChange={handleChangeAnswer2}
              checked={answer2 === "いいえ"}
            />
            いいえ
          </div>
        </div>
        <div className="mt-[20px]">
          <p>
            過去5年以内に、病気やけがで、手術をうけたことまたは継続して7日以上の入院をしたことがありますか？
          </p>
          <div className="mt-[20px] mb-[20px]">
            <input
              type="radio"
              name="answer3"
              value="はい"
              onChange={handleChangeAnswer3}
              checked={answer3 === "はい"}
            />
            はい
            <input
              type="radio"
              name="answer3"
              value="いいえ"
              className="ml-2"
              onChange={handleChangeAnswer3}
              checked={answer3 === "いいえ"}
            />
            いいえ
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex justify-center">
          <Link to="/">
            <button className="h-12 px-2 m-2 text-lg text-white bg-green-500">
              {"<  前へ戻る"}
            </button>
          </Link>
        </div>
        <div className="flex justify-center">
          <Link to="/consultation">
            <button className="h-12 px-2 m-2 text-lg text-white bg-green-500">
              {"次へ進む  >"}
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Question1;
