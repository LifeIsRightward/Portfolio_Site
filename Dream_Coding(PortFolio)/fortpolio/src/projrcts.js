'use strict'

// Project 필터링 관련 로직 처리
const categories = document.querySelector('.categories');
const projects = document.querySelectorAll('.project');
// querySelectorAll은 해당 선택자의 매칭되는 모든 요소들을 배열로 반환해줌.
// quertSlector는 해당 선택자의 제일 첫번째 아이템만 반환해줌.
const projectsContainer = document.querySelector('.projects');
categories.addEventListener('click', (event) => {
    const filter = event.target.dataset.category;
    // 적용 기준(필터) 의 값 -> 즉 all, front-end, back-end, mobile 의 string 값
    if(filter == null){
        return;
        // 카테고리스의 컨테이너 안에 있는 버튼들이 아닌 여백들(마진, 패딩)을 클릭시에는
        // return 값이 undifinded 이기때문에, 이때는 콜백함수를 종료 시키기위해 return; 해줌.
    }
    // console.log(filter);

    handleActiveSelection(event.target);
    filterProjects(filter);
});


// Active 메뉴를 재설정
function handleActiveSelection(target){
    const active = document.querySelector('.category--selected');
    active.classList.remove('category--selected');
    target.classList.add('category--selected');
}

// 프로젝트 필터링 로직
function filterProjects(filter){
    projectsContainer.classList.add('anim-out');
    projects.forEach((project) => {
        // console.log(project.dataset.type);
        if(filter === 'all' || filter === project.dataset.type){
            project.style.display = 'block';
        }else{
            project.style.display = 'none';
        }
    });
    setTimeout(()=>{
        projectsContainer.classList.remove('anim-out');
    }, 250);
    // 250ms 뒤에 콜백안에 들어있는 명령을 수행. 이거 setTimeout 웹 API임
    // 뒤에 설정해놓은 ms 이후에 콜백안에있는 코드를 수행.
}