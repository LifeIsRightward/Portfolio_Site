'use strict'
// 순수 자바스크립트를 작성할때는 항상 파일 상단에 'use strict'라고 설정해주는게 좋음.
// 예전 버전의 나쁜 관행을 쓴다면, 그 부분에 대해서 에러메세지를 받을 수 있음.
// 그리고 main.js에 다 때려박으면 별로임. 각기 다른파일에 로직을 짜주는게 좋음.
// 프로젝트에 관련된 js는 main이 아닌 projects에 해주도록 함.

// Header에 페이지를 아래로 스크롤시 다크 스타일링을 적용

// document 객체에서 제공해주는 쿼리셀럭터라는 함수를 사용하는거임
// querySelector -> 내가 선택하고싶은 선택자를 문자열로 제공하면됨(파라미터로).
// 아이디면 #~ 클래스면 .~ 일반태그면 일반태그 - 이렇게 파라미터로 주면됨.
//document는 무었이냐? -> 문서 전체에대한 정보를 가지고있는 객체.
// window 라는 객체 안에 documnet 에 querySelector가 있음   
//window는 무었이냐? -> 브라우저에서 (기본으로)제공해주는 객체. 글로벌 객체
const header =  document.querySelector('.header');
// 이러면 header 안에 JS에서 접근이 가능한 형태로 객체가 반환되어있음.

const headerHeight = header.getBoundingClientRect().height;
// getBoundingClientRect -> 함수. Rectangle의 약자인데,
// 저 반환된 객체 안에는 다양한 정보가 담겨있음. x, y 좌표와 width 와 height같은 정보들이 
// 그 중에서 높이가 어떤지 측정해달라. 그래서 높이를 반환한것을 다시 변수에 저장시킴

// 이게 중요한게 반환된것이 원시값인지, 객체인지를 잘 따져봐야함.

//스크롤 되는 y좌표가 headerHeight 보다 크다면 다른 스타일링..
document.addEventListener('scroll', ()=>{
    // console.log(window.scrollY);
    // 윈도우 객체안에서 스크롤될떄마다 이벤트가 발생하여서 Y좌표가 보임.
     
    if(window.scrollY > headerHeight){
        header.classList.add('header--dark');
    }else{
        header.classList.remove('header--dark');
    }
});

//  Home 섹션을 아래로 스크롤시 투명하게 처리함.
const home = document.querySelector('.home__container');
const homeHeight = home.offsetHeight;
document.addEventListener('scroll', ()=>{
    // console.log(1 - (window.scrollY / homeHeight));
    home.style.opacity = 1 - (window.scrollY / homeHeight);
});

// Arrowup버튼을 아래로 스크롤시 투명하게 처리함.
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', ()=>{
    if(window.scrollY > homeHeight / 2){
        arrowUp.style.opacity = 1;
    }else{
        arrowUp.style.opacity = 0;
    }
});

// Navbar 토글버튼 클릭 처리
const navbarMenu = document.querySelector('.header__menu');
const navbarToggle = document.querySelector('.header__toggle');
navbarToggle.addEventListener('click', ()=>{
    navbarMenu.classList.toggle('open');
    // open 이라는 클래스가 있으면 -> 제거, 없으면 -> 추가
    // 그래서 css로 스타일링을 처리해줌.
});

// Navbar 메뉴 클릭시 메뉴를 자동으로 닫아줌.
navbarMenu.addEventListener('click', ()=>{
    navbarMenu.classList.remove('open');
});

