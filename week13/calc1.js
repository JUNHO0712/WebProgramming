exports.add = function(a, b) {
    return a + b;
}

exports.multiply = (a, b) => a*b;

// exports는 현재 js 파잏에서 다른 파일이 사용할 수 있도록 내보내는 객체입니다.
// exports는 module.exports의 별칭입니다.