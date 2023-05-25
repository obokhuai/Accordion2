import { useState} from "react";
import './App.css';
import SingleQuestion from "./SingleQuestion";
import data from "./data";



function App() {
  const [questions , setQuestions] = useState(data);
  return (
    <main>
      <div className="container">
        <h3>React Questions and Answers</h3>
        <section>
          {questions.map((question)=>{
            return (
              <SingleQuestion key={question.id} questions= {question}/>
            )
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
