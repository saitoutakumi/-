import Personal from "./routes/personal";
import Question1 from "./routes/question1";
import Consultation from "./routes/consultation";
import Confirmation from "./routes/confirmation";
import { Route, Routes } from "react-router-dom";
import { AnswerProvider } from "./AnswerProvider";

const App = () => {
  return (
    <>
      <div className="App">
        <AnswerProvider>
          <Routes>
            <Route path="/" element={<Personal />} />
            <Route path="/question1" element={<Question1 />} />
            <Route path="/consultation" element={<Consultation />} />
            <Route path="/confirmation" element={<Confirmation />} />
          </Routes>
        </AnswerProvider>
      </div>
    </>
  );
};

export default App;
