'use strict';

new TypeIt('.home__title--strong', {
    loop: true,
    speed: 90,
})
.move(-11) // 커서를 움직일때 move(움직일 글자수), 커서라 하면, js로 이동되는 커서를 말하는거임.
.type('Amazing ')// 현재 커서 위치에서 타이핑 시켜줌
.pause(1000)
.move(null, {to: 'END'})// 제일 끝으로 커서를 이동할때 양식이 이거임.
.delete()// 모든걸 삭제 -> 커서가 맨 앞으로 옴.
.type('Front-end Engineer')//현재 커서는 맨 앞이었음. 왜냐? delete를 했기 때문에 커서가 맨 앞에 있었음. 
// 그럼 이제 타이핑은 현재 커서가 존재하는 곳 에서부터 타이핑이 시작됨.
.pause(1000)
.move(-9)// 엔지니어 앞까지 커서 이동
.delete(9)//9칸 지워
.type('Back-end')
.pause(1000)
.delete(8)// 백엔드 지워
.type('Full-stack')// 풀 스택 타이핑해
.pause(1000)
.move(9)// 맨 끝으로 가 커서
.delete()// 모든걸 삭제해.
.go();