let url = require('url');

// 긴 URL 문자열을 파싱해서 객체 형태로 변환
let curURL = url.parse('https://search.naver.com/\
                        search.naver?where=nexearch\
                        &sm=top_hty&fbm=1&ie=utf8\
                        &query=web+programming');
// 이렇게 열을 나누면 공백이 들어가서 url이 정상적으로 안나올수도 있음


// URL 객체를 다시 문자열로 변환
let curStr = url.format(curURL);

console.log('주소 문자열 : %s', curStr);
console.dir(curURL);

// querystring 모듈 불러오기 (쿼리 스트링을 객체로 변환하거나 문자열로 만들 때 사용)
let qs = require('querystring');

// curURL.query → URL에서 ? 뒤의 부분(ex: key=value&key2=value2)
// 이것을 객체 형태로 변환
let param = qs.parse(curURL.query);

console.dir(param);  // 파싱된 쿼리 스트링 객체 확인

console.log('요청 파라미터의 query : %s', param.query);
// param.query → query=web+programming에서 query 값만 가져옴

console.log('원본 요청 파라미터 : %s', qs.stringify(param));
// 객체 → query=web+programming 형태의 문자열로 재변환

// 백슬래시 \ 의 의미 
// 자바스크립트에서는 문자열을 여러 줄로 쓸 때 그냥 엔터를 치면 오류가 나기 때문에,
// "문자열 \
// 이어지는 문자열"

// format은 URL 객체를 다시 문자열로 변환할 때 사용합니다.
