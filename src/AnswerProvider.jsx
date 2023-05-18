import { createContext, useContext, useState } from "react";

const AnswerContext = createContext();

export const AnswerProvider = ({ children }) => {
  const [gender, setGender] = useState("");
  const [birthYear, setBirthYear] = useState("");
  const [birthMonth, setBirthMonth] = useState("");
  const [birthDay, setBirthDay] = useState("");
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [comment, setComment] = useState("");

  return (
    <AnswerContext.Provider
      value={{
        gender,
        setGender,
        birthYear,
        setBirthYear,
        birthMonth,
        setBirthMonth,
        birthDay,
        setBirthDay,
        answer1,
        setAnswer1,
        answer2,
        setAnswer2,
        answer3,
        setAnswer3,
        comment,
        setComment,
      }}
    >
      {children}
    </AnswerContext.Provider>
  );
};

export const useAnswerContext = () => useContext(AnswerContext);
