function showMessage(message, from) { 
    console.log(`${message} by ${from}`);
}

function showMessage2(message, from ) {
    if (from === undefined) {
        from = 'ksd';
    }
    console.log(`${message} by ${from}`);
}

function showMessage3(message, from = 'ksd') {
    console.log(`${message} by ${from}`);
}

showMessage('Hello'); // Hello by undefined
showMessage2('Hello'); // Hello by ksd
showMessage3('Hello'); // Hello by ksd

// 매개변수에 기본값 설정하기