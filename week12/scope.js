let gobalMessage='golbal';

function printMessage(){
    let message='hello';
    console.log(message);
    console.log(gobalMessage);

    function printAnother(){
        console.log(message);
        let childMessage='hello child';
        console.log(gobalMessage);
        console.log(childMessage);
    }
    //console.log(childMessage); //error
    printAnother();
}

printMessage();
//console.log(message); //error