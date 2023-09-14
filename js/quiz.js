export class Quize{
    constructor(category,difficulty,numberofquestion){
        this.category=category;
        this.difficulty=difficulty;
        this.numberofquestion=numberofquestion;
        this.score=0;
    }
    async getQuestion(){
        const data= await fetch (`https://opentdb.com/api.php?amount=${this.numberofquestion}&category=${this.category}&difficulty=${this.difficulty}`)
        const res= await data.json()
        console.log(res.results);
        return res.results
    }
    endQuiz(){
        return`<div class="question shadow-lg col-lg-6 offset-lg-3  p-4 rounded-3 d-flex flex-column justify-content-center align-items-center gap-3">
        <h2 class="mb-0">
        Your Score is ${this.score}     
        </h2>
        <button class="again btn btn-primary rounded-pill"><i class="bi bi-arrow-repeat"></i> Try Again</button>
      </div>`
      }
      
}