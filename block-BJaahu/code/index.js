/* Prototypal  pattern

let questionMethods={
    
    isAnsweCorrect:function(index){
        return index===this.correctAnswerIndex;
    },

    getCorrectAnswer:function(){
        return this.options[this.correctAnswerIndex];
    },
};

function createQuestion(title,options,correctAnswerIndex){
    let question=Object.create(questionMethods);
    question.title=title;
    question.options=options;
    question.correctAnswerIndex=correctAnswerIndex;
    
    
    return question;
}

let firstQuestion =  createQuestion(
    'Where is the capital of Jordan',
    ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    1
  );

  let secondQuestion =  createQuestion(
    'Where is the capital of Jamaica',
    ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
    2
  );
  */

/* F.prototype method

  
function CreateQuestion(title,options,correctAnswerIndex){
    //let question=Object.create(CreateQuestion.prototype);

    this.title=title;
    this.options=options;
    this.correctAnswerIndex=correctAnswerIndex;
    
    

}

CreateQuestion.prototype={

isAnsweCorrect:function(index){
    return index===this.correctAnswerIndex;
},

getCorrectAnswer:function(){
    return this.options[this.correctAnswerIndex];
},
};

let firstQuestion = new CreateQuestion(
    'Where is the capital of Jordan',
);

  let secondQuestion = new CreateQuestion(
    'Where is the capital of Jamaica',
    ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
    2
  );    ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    1
  
  */

// class pattern

class CreateQuestion {
  constructor(title, options, correctAnswerIndex) {
    this.title = title;
    this.options = options;
    this.correctAnswerIndex = correctAnswerIndex;
  }
  isAnsweCorrect(index) {
    return index === this.correctAnswerIndex;
  }

  getCorrectAnswer() {
    return this.options[this.correctAnswerIndex];
  }
}

let firstQuestion = new CreateQuestion(
    'Where is the capital of Jordan',
);

  let secondQuestion = new CreateQuestion(
    'Where is the capital of Jamaica',
    ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
    2
  );    ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    1
