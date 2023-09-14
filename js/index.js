import { Question } from "./question.js"
import {Quize} from "./quiz.js"
const categoryMenu=document.querySelector("#categoryMenu")
const difficultyOptions=document.querySelector("#difficultyOptions")
const questionsNumber=document.querySelector("#questionsNumber")
const startQuiz=document.querySelector("#startQuiz")
export const questionContainer=document.querySelector(".questions-container")
 const quizOptions=document.querySelector("#quizOptions")
export let Quiz1
export let questions
startQuiz.addEventListener("click", async function(){
    let category=categoryMenu.value;
    let difficulty=difficultyOptions.value;
    let number=questionsNumber.value;
    Quiz1=new Quize(category,difficulty,number)
    questions= await Quiz1.getQuestion()
    console.log(questions);
    const question = new Question(0)
    console.log(question)
    quizOptions.classList.replace("d-flex","d-none")
    question.displayQuestion()
})


//  