process.on('tick', () => {
    console.log('count 이벤트 발생함 : %s', count);
});

setTimeout(() => {
    console.log('2초 후에 tick 이벤트 전달 시도...');
    process.emit('tick', '2'); 
    // count 값을 문자열 '2'로 전달, 
    // ‘tick’ 이라는 이름의 이벤트를 강제로 발생시키는 코드
    // emit() 은 “이벤트 호출 버튼” 같은 것
}, 2000);

//on()
//	•	“이벤트를 들을 준비”
//      “초인종이 울리면 문 열어”

// emit()
// 	•	“이벤트가 발생했다고 알리기”
//      “초인종을 누른다 (띵동!)”