import React, { useState } from "react";
import "./faq.css";
// import FAQ from "../.././assets/images/feature/faqs-global.png";
import Single from "../Faq/single";
import data from "../Faq/data";

function Faq() {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <div className="contsiner">
        <h3>FAQ</h3>
        <section>
          {questions.map((question) => {
            return <Single key={question.id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
}
export default Faq;
