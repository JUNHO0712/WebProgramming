        let a = 100;
        function fn() {
            let b = 2;
            console.log(a+b);
            function fn2() {
                let c = 3;
                console.log(a+b+c);
            }
            fn2();
        }
        fn();
        
        // 클로저(Closure)
        // 중첩 함수가 자신을 감싸고 있는 외부 함수의 변수에 접근할 수 있는 것
        // 함수가 자신이 생성될 당시의 외부 변수(환경)를 기억하고, 나중에 그 함수가 실행될 때에도 그 변수에 접근할 수 있는 기능
        //  “함수가 만들어질 때 자동으로 생기는 환경적 특성”