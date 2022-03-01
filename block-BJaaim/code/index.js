
let form=document.querySelector('.form');
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let showResult = document.querySelector('.show_result');
let quizElm=document.querySelector(".quiz");
let totalQuestions=document.querySelector("header p")


class Question{
    constructor(title,options,correctAnswerIndex){
        this.title=title;
        this.options=options;
        this.correctAnswerIndex=correctAnswerIndex;
    }
    isCorrect(answer){
        return this.options[this.correctAnswerIndex] === answer;
    }
    getCorrectAnswer(){
        return this.options[this.correctAnswerIndex];
    }
    
}

class Quiz{
    constructor(allQuestions=[],score=0){
        this.allQuestions=allQuestions;
        this.score=score;
        this.activeIndex=0;
    }
    nextQuestion(){
        this.activeIndex+=1;
        this.createUI();
    }
    prevQuestion(){
        this.activeIndex-=1;
        this.createUI();
    }
    incrementScore(){
        this.score+=1;
    }
    addQuestion(title,options,answerIndex){
        let question=new Question(title,options,answerIndex);
        this.allQuestions.push(question);

    }
    handleButtons(){
        if(this.activeIndex===0){
            prev.style.visibility="hidden";
        }else if(this.activeIndex === this.questions.length-1){
            next.style.visibility="hidden";
            showResult.style.visibility="visible";
        }else{
            prev.style.visibility='visible';
            next.style.visibility='visible';
            showResult.style.visibility='hidden';
        }
    }


    createUI(){
        quizElm.innerHTML="";

        let activeQuestion=this.allQuestions[this.activeIndex];
        let form=document.createElement('form');
        let fieldset=document.createElement("fieldset");
        let legend=document.createElement("legend");
        legend.innerText=activeQuestion.title;
        let optionsElm=document.createElement('div');
        optionsElm.classList.add('submit');
        let buttonWrapper = document.createElement("div");
        buttonWrapper.classList.add('submit');
        let button=document.createElement("button");
        button.innerText="submit";
        button.type="submit";
        buttonWrapper.append(button);

        activeQuestion.options.forEach((option,index)=>{
            let input =document.createElement('input');
            let div=document.createElement('div');
            input.id=`option-${index}`;
            input.type='radio';
            input.name='options';
            input.value=option;
            let label=document.createElement('label');
            label.for=`option-${index}`;
            label.innerText=option;

            form.addEventListener('submit',(event)=>{
                event.preventDefault();
                if(input.checked){
                    if(activeQuestion.isCorrect(input.value)){
                        this.incrementScore();
                    }
                }
            });
            div.append(input,label);
            optionsElm.append(div);
        });
        this.handleButtons();
        totalQuestions.innerText=`Total Questions: ${this.allQuestions.length}`;
        
        fieldset.append(legend,optionsElm,buttonWrapper);
        form.append(fieldset);
        quizElm.append(form);

    }
}

let quiz=new Quiz();

quizCollection.forEach((question) =>{
    quiz.addQuestion(question.title,
        question.options,
        question.answerIndex);
});

quiz.createUI();


next.addEventListener('click',quiz.nextQuestion.bind(quiz));
prev.addEventListener('click',quiz.prevQuestion.bind(quiz));
showResult.addEventListener('click',()=>{
    alert(`Your score is ${quiz.score}`);
});