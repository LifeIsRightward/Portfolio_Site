// 구현 계획
// 1. 모든 섹션 요소들과 메뉴 아이템들을 가지고온다.
// 2. IntersectionObserver를 사용해서 모든 섹션을 관찰해야 한다.
// 3. 보여지는 섹션에 해당하는 메뉴 아이템을 활성화 시킨다.
// 보여지는 섹션
// -다수의 섹션이 동시에 보여진다면, 가장 첫번쨰 섹션을 선택
// ex) home 과 about 섹션이 동시에 보여진다면 home 섹션을 먼저 선택함.
// - 마지막 contact 섹션이 보여진다면, 그러면 가장 마지막 섹션을 선택(contact 섹션이겠지)

const sectionIds = [
    '#home', 
    '#about',
    '#skills',
    '#work',
    '#testimonial',
    '#contact'
];
const sections = sectionIds.map((id) => document.querySelector(id));
const navItems = sectionIds.map((id) => 
    document.querySelector(`[href="${id}"]`)
);
// 요소 속성중에 href 가 id로 설정된것을 찾는다. 뭘로? 쿼리 셀렉터로 ㅇㅇ

const visibleSections = sectionIds.map(()=>false);
// 다수의 섹션이 동시에 보여진다면, 가장 첫번째 섹션을 선택. 이 조건을 위한 배열임.
// 그리고 현재 보여지고있는 섹션이 어떤건지를 체크하는 용도가 메인용도임. 
let activeNavItem = navItems[0];

const options = {
    rootMargin: '-20% 0px 0px 0px',
    threshold: [0, 0.96],
};
const observer = new IntersectionObserver(observerCallback, options);
sections.forEach((section) => observer.observe(section));

function observerCallback(entries){
    let selectLastOne;//flag 변수
    entries.forEach((entry) => {
        const index = sectionIds.indexOf(`#${entry.target.id}`);
        visibleSections[index] = entry.isIntersecting;
        // 베열안에 트루로 되어있는 녀석중, 가장 첫번째 true를 선택하면 되겠네 ㅇㅇ
        selectLastOne = 
            index === sectionIds.length - 1 &&
            entry.isIntersecting && 
            entry.intersectionRatio >= 0.92;
    });

    const navIndex = 
        selectLastOne ? 
        sectionIds.length - 1 :
        findFirstIntersecting(visibleSections);
        
    selectNavItem(navIndex);
}

// 섹션들 배열중에서 보여지는걸 체크하는 배열이 있는데 그게 'visibleSections'이고
// 비지블섹션즈 중에서 가장 첫번째에 있는 트루의 인덱스를 반환한다.
// 근데 0보다 크면 그 인덱스를 반환하면되는데, 트루가 없으면 -1을 반환해서 그냥 -1은 뭔가 결함이 생겨버릴거 같으니 0으로 전달한다고 함.
function findFirstIntersecting(intersections){
    const index = intersections.indexOf(true);
    return index >= 0 ? index : 0;
}

// navbar 중에서 어떤게 현재 섹션에서 보여지고, 선택됬는지를 알고, 클래스리스트로 처리.
function selectNavItem(index){
    const navItem = navItems[index];
    if(!navItem){
        return;
    }
    activeNavItem.classList.remove('active');
    activeNavItem = navItem;
    activeNavItem.classList.add('active');
}