quiz_data = [
    {
        question: "How old are you?",
        a: "10",
        b: "11",
        c: "24",
        d: "12",
        correct: "c"
    },
    {
        question: "What is your name?",
        a: "Umrbek",
        b: "Hamdam",
        c: "Hamdam",
        d: "Hamdam",
        correct: "a"
    },
    {
        question: "Where are you from?",
        a: "Kazakstan",
        b: "Uzbekistan",
        c: "Kazakstan",
        d: "Kazakstan",
        correct: "b"
    },
    {
        question: "What is your hobby?",
        a: "Watching TV",
        b: "Playing Football",
        c: "Playing Football",
        d: "Playing Football",
        correct: "a"
    },
    {
        question: "Hale luya hale luya?",
        a: "hale",
        b: "hale",
        c: "hale",
        d: "luya",
        correct: "d"
    },
];

answer_arr = [];
for(i=0; i < quiz_data.length; i++){
    answer_arr.push(0);
}

let index = 0;



quiz();

next.addEventListener("click",()=>{
    if(quiz_data.length-1 != index){
        index++;
        quiz();
    }
    else if(quiz_data.length-1 == index){
        writeResult();
    }    
});

preview.addEventListener("click",()=>{
    if(index > 0){
        index--;
        quiz();
    } 
});




function quiz() { 
    const quizNumber = document.getElementById("quiz-number");
    const quizHeader = document.getElementById("quiz-header");
    const aText = document.getElementById("a_text");
    const bText = document.getElementById("b_text");
    const cText = document.getElementById("c_text");
    const dText = document.getElementById("d_text");

    const preview = document.getElementById("preview");
    const next = document.getElementById("next");
    
    quizData = quiz_data[index];

    console.log(quizData);
    quizNumber.innerHTML = index+1;
    quizHeader.innerHTML = quizData.question;
    aText.innerHTML = quizData.a;
    bText.innerHTML = quizData.b;
    cText.innerHTML = quizData.c;
    dText.innerHTML = quizData.d;

    if(index == quiz_data.length-1){
        next.innerHTML = "Finish";
        // next.id = "finish";
    }
    else{
        next.innerHTML = "Next &gt;&gt;";
        // next.id = "next";
    }

}



document.querySelectorAll(".answer").forEach((element) =>{
    element.addEventListener("change",(event)=>{
        check_answer(event.target.value, index);
    });
});


function check_answer(ans, idex){
    if(ans==quiz_data[idex].correct){
        answer_arr[idex] = 1;
    }
    else{
        answer_arr[idex] = 0;
    }
}

function writeResult(){
    document.getElementById("quiz-container").innerHTML = `
    <div id="quiz-header" style="font-size: 3rem; text-align: center;">Test finished: <br> <span style ="margin: 3rem; color: #3C76FB;">${answer_arr.reduce((a,b) => a + b, 0)}/${answer_arr.length}</span></div>
    <div class="btns">
        <span class="button" onclick ="location.reload()" >&lt;&lt;  Retry </span>
       
    </div>`;
}
