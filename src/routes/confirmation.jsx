import { Link } from "react-router-dom";

const confirmation = () => {
  const gender = localStorage.getItem("gender");
  const birthYearObj = JSON.parse(localStorage.getItem("birthYear"));
  const birthYear = birthYearObj.label;
  const birthMonthObj = JSON.parse(localStorage.getItem("birthMonth"));
  const birthMonth = birthMonthObj.label;
  const birthDayObj = JSON.parse(localStorage.getItem("birthDay"));
  const birthDay = birthDayObj.label;
  const answer1 = localStorage.getItem("answer1");
  const answer2 = localStorage.getItem("answer2");
  const answer3 = localStorage.getItem("answer3");
  const comment = localStorage.getItem("comment");

  return (
    <>
      <div className="m-4 pl-4 pr-4 border-4 border-sky-500">
        <div className="flex justify-center m-4 grid">
          <h1>以下の内容をご確認ください</h1>
        </div>

        <div>
          <p>-性別-</p>
          <p>{gender}</p>
        </div>
        <div className="mt-[20px]">
          <p>-生年月日-</p>
          <p>
            {birthYear}年 {birthMonth}月 {birthDay}日
          </p>
        </div>
        <div className="mt-[20px]">
          <p>-現在、生命保険に加入されていますか？-</p>
          <p>{answer1}</p>
        </div>
        <div className="mt-[20px]">
          <p>
            -現在入院中ですか。または、最近3ヶ月以内に医師の診察・検査結果、入院・手術を進められたことはありますか？-
          </p>
          <p>{answer2}</p>
        </div>
        <div className="mt-[20px]">
          <p>
            -過去5年以内に、病気やけがで、手術をうけたことまたは継続して7日以上の入院をしたことがありますか？-
          </p>
          <p>{answer3}</p>
        </div>
        <div className="mt-[20px] mb-[20px]">
          <p>-ご相談内容-</p>
          <p>{comment}</p>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex justify-center">
          <Link to="/consultation">
            <button className="h-12 px-2 m-2 text-lg text-white bg-green-500">
              {"<  前へ戻る"}
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default confirmation;
