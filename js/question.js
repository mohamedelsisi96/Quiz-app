import {questions,Quiz1,questionContainer} from "./index.js"
export class Question {
    constructor(index) {
        this.answer=questions[index].correct_answer;
        this.category=questions[index].category;
        this.index=index;
        this.question=questions[index].question;
        this.wrongAnswer=questions[index].incorrect_answers;
        this.choice=this.getChoise()
        this.answered=false
    }
    getChoise(){
        return this.wrongAnswer.concat(this.answer).sort()
    }
    displayQuestion(){
        const questionMarkUp = `
        <div
          class="question shadow-lg col-lg-6 offset-lg-3  p-4 rounded-3 d-flex flex-column justify-content-center align-items-center gap-3 animate__animated animate__bounceIn"
        >
          <div class="w-100 d-flex justify-content-between">
            <span class="btn btn-category">${this.category}</span>
            <span class="fs-6 btn btn-questions">${this.index+1} of ${questions.length}</span>
          </div>
          <h2 class="text-capitalize h4 text-center">${this.question}</h2>  
          <ul class="choices w-100 list-unstyled m-0 d-flex flex-wrap text-center">
          ${this.choice.map(function (elex){
            return `<li>${elex}</li>`
          }).join("")}
          </ul>
          <h2 class="text-capitalize text-center score-color h3 fw-bold"><i class="bi bi-emoji-laughing"></i> Score: ${Quiz1.score} </h2>        
        </div>
      `
      questionContainer.innerHTML=questionMarkUp
      const allAnswers=document.querySelectorAll(".question ul li")
      for (let i=0;i<allAnswers.length;i++){
        allAnswers[i].addEventListener("click",(e)=>{
          this.cheakAnswer(e)
        })
      }

    }
    cheakAnswer(e){
      if(!this.answered){
        this.answered=true
        if(e.target.innerHTML.toLowerCase()==this.answer.toLowerCase()){
          e.target.classList.add("correct","animate__animated","animate__flipInX")
          Quiz1.score+=1
        }else{
          e.target.classList.add("wrong","animate__animated","animate__shakeX")
  
        }
        this.animateQuestion(e.target,500)
        this.animateNewQuestion(1000)

      }
   
    }
    animateQuestion(element,duration){
      setTimeout(function () {
        element.closest(".question ").classList.replace("animate__bounceIn","animate__fadeOutLeft");
      },duration)
    }
    animateNewQuestion(delayTime){
      setTimeout(() => {
        this.nextQuestion() 
      }, delayTime);
    }
    nextQuestion(){
      this.index+=1
      if(this.index>questions.length-1){
        questionContainer.innerHTML=Quiz1.endQuiz()
        const againBtn=document.querySelector(".again")
        againBtn.addEventListener("click",function(){
          location.reload()
        })
        return;
      }
      const newQuestion = new Question(this.index)
      newQuestion.displayQuestion()
    }

    
}
