let os = requite('os');

console.log('운영체제 정보');
console.log('os.arch(): ' + os.arch());
console.log('os.platform(): ' + os.platform());
console.log('os.type(): ' + os.type());
console.log('os.uptime(): ' + os.uptime() + '초');
console.log('os.hostname(): ' + os.hostname());
console.log('os.release(): ' + os.release());

console.log('\nCPU 정보');
console.log(os.cpus());

console.log('\n메모리 정보');
console.log('os.totalmem(): ' + os.totalmem() + '바이트');
console.log('os.freemem(): ' + os.freemem() + '바이트');    
// os 모듈은 운영체제에 대한 정보를 제공하는 모듈입니다.
// 외부 모듈 사용 예제입니다.
// Node.js에서 기본으로 제공하는 모듈이므로 별도의 설치 과정이 필요하지 않습니다.