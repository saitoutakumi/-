// 相談入力フォーム

import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

const Consultation = () => {
  const [comment, setComment] = useState("");

  useEffect(() => {
    const saveComment = localStorage.getItem("comment");
    if (saveComment) {
      setComment(saveComment);
    }
  }, []);

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const gender = localStorage.getItem("gender");
  const birthYear = localStorage.getItem("birthYear");
  const birthMonth = localStorage.getItem("birthMonth");
  const birthDay = localStorage.getItem("birthDay");
  const answer1 = localStorage.getItem("answer1");
  const answer2 = localStorage.getItem("answer2");
  const answer3 = localStorage.getItem("answer3");

  const clickSubmit = () => {
    localStorage.setItem("comment", comment);
    console.log(gender);
    console.log(birthYear);
    console.log(birthMonth);
    console.log(birthDay);
    console.log(answer1);
    console.log(answer2);
    console.log(answer3);
    console.log(comment);
  };
  return (
    <>
      <div className="m-4 pl-4 pr-4 pb-4 border-4 border-sky-500">
        <div className="flex justify-center m-4 grid">
          <h1>ご相談内容をご記入ください</h1>
        </div>
        <div>
          <p>-ご相談内容-</p>
        </div>
        <div>
          <textarea
            id="inputBox"
            type="text"
            name="comment"
            className="text-[black] mt-[5px] border-2 w-full h-[300px]"
            value={comment}
            onChange={handleCommentChange}
          ></textarea>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex justify-center">
          <Link to="/question1">
            <button className="h-12 px-2 m-2 text-lg text-white bg-green-500">
              {"<  前へ戻る"}
            </button>
          </Link>
        </div>
        <div className="flex justify-center">
          <Link to="/confirmation">
            <button
              onClick={clickSubmit}
              type="submit"
              className="h-12 px-2 m-2 text-lg text-white bg-green-500"
            >
              {"次へ進む  >"}
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Consultation;
