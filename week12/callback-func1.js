const printYes = function(){
    console.log('Yes');
}

const printNo = () => {
    console.log('No');
}

function randomQuiz(answer, printYes, printNo){
    if(answer === 'love you'){
        printYes();
    } else {
        printNo();
    }
}

randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// 함수 앞에 const가 붙는 이유: 함수 재할당 방지