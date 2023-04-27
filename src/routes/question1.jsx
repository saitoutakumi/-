import { Link } from "react-router-dom";

const Question1 = () => {
  return (
    <>
      <div className="m-4 pl-4 pr-4 border-4 border-sky-500">
        <div className="flex justify-center m-4 grid">
          <h1>以下にお答えください</h1>
        </div>

        <div>
          <p>テスト</p>
          <p>現在、生命保険に加入されていますか？</p>
          <div className="mt-4">
            <input
              type="radio"
              name="answer1"
              value="yes"
              // onChange={handleChange}
            />
            はい
            <input
              type="radio"
              name="answer1"
              value="no"
              className="ml-2"
              // onChange={handleChange}
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
              value="yes"
              // onChange={handleChange}
            />
            はい
            <input
              type="radio"
              name="answer2"
              value="no"
              className="ml-2"
              // onChange={handleChange}
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
              value="yes"
              // onChange={handleChange}
            />
            はい
            <input
              type="radio"
              name="answer3"
              value="no"
              className="ml-2"
              // onChange={handleChange}
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
