import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';

function App() {
  const [resultdiv,setresult] = useState(false)
  const [renderNext,setNext] = useState(0)
  const [marks,setMarks] = useState(0)
  const questions = [
    {
      question: "React is also known as _____.",
      answer: ["ReactJS","js","Both A. and B.","None of these"],
      correctAnswer: "ReactJS"
    },
    {
      question: "React is a _________.",
      answer: ["Web development Framework","JavaScript Library","jQuery","Web Server"],
      correctAnswer:"JavaScript Library"
    },
    {
      question: "Which ReactJS function renders HTML to the web page?",
      answer: ["render()","ReactDOM.render()","renders()","ReactDOM.renders()"],
      correctAnswer:"ReactDOM.render()"
    },
    {
      question: "JSX stands for _____.",
      answer: ["JSON","JSON XML","JavaScript XML","JavaScript and AngularJS"],
      correctAnswer:"JavaScript XML"
    },
    {
      question: "JSX allows us to write _____.",
      answer: ["jQuery in React","Angular Code in React","MySQL in React","HTML in React"],
      correctAnswer:"HTML in React"
    },
    {
      question: " What is the correct syntax to write expression in JSX?",
      answer: ["[ expression ]","{ expression }","{{ expression }}","_expression"],
      correctAnswer:"{ expression }"
    },
    {
      question: "A class component must include the _______ statement.",
      answer: ["extends React.Component","extends React","extends Component","extends React.Component.All"],
      correctAnswer:"extends React.Component"
    },
  ]
  let renderquestion = (pera)=>{
    if(pera == questions[renderNext].correctAnswer){
      setMarks(marks+1);
    }
    if (renderNext + 1 < questions.length) {
			setNext(renderNext + 1);
		} else {
			setresult(true);
		}
  }
  return (
    <div className='container my-5'>
      {resultdiv ? <div className='fs-3 bg-info border rounded shadow p-2'>
      {(marks*100 /questions.length)>=70?<div className='text-center text-light'>You are successfully Passed</div>: <div className='text-center text-light'>You are failed</div> }
      <div className=' text-center text-light'>{(marks*100 /questions.length).toFixed(2)} %</div>
      <div className='fw-bold text-center text-white'>Correct Answers</div>
      <div className=''>{questions.map((e,i)=>{
        return(<div>{i+1}.{e.question}
        <div className='btn-success mx-2 px-2 d-inline rounded'> {e.correctAnswer}</div></div>)
      })}</div>
      </div>  :
        <div className='text-center rounded'>
          <div className="d-flex justify-content-between bg-info px-5 py-3 border">
              <div className='fs-5 fw-bold'>Questions:</div>
              <div className='fs-5 fw-bold'>{renderNext+1}/{questions.length}</div>
          </div>
          <div className='bg-info border'>
            <div className='fs-4 fw-bold p-2'>
            {renderNext+1}. {questions[renderNext].question}
            </div>
             </div>
             <div className='row p-2 d-flex justify-content-between'>
             {questions[renderNext].answer.map((e,i)=>{
               return(
                 <button className={('col-md-5 m-1 btn btn-outline-primary rounded-pill fs-5 text-center')} key={i} onClick={()=>{renderquestion(e)}} >{e}</button>
                 );
                 
                })}
        </div>
                </div>
      }

      
    </div>
  );
}

export default App;
