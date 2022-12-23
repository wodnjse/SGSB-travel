function getCityData(city) {
    fetch(`http://localhost:8000/data/${city}`) // 해당 주소의 api를 불러옴
        .then((response) => response.json()) // 불러온 api 값을 response로 받고 response값을 json으로 리턴 한다.
        .then((data) => { //그 값이 data라는 변수에 json array 형태로 들어감
            let num = 1;
            data.forEach(element => { //가져온 값의 모든 값을 가져오기 위해 forEach문으로 모든 요소를 반복해 가져옴
                const list = document.getElementById('listElement') // 읽어온 데이터를 추가할 리스트의 아이디를 가져옴
                list.insertAdjacentHTML('beforeend', `
                <div class="restaurant-wrapper" onclick = "window.open('https://www.mangoplate.com/search/${element.명소}')">
                    <p class="find-restaurant">'${element.명소}' 주변 맛집 확인하기→</p>
                </div>
                <li class="tourist-attraction-list">
                    <div class="list-number-wrapper">
                        <div class="list-number">${num}</div>
                    </div>
                    <div class="tourist-attraction-container">
                        <p class="tourist-attraction-ID">${element.명소}</p>
                        <p class="tourist-attraction-StarRating">⭐${element.별점}</p>
                    </div>
                </li>
                <div class="solid-line"></div>
                `); // 아이디로 가져온 값을 html 문으로 반복해서 뒤에 추가함
                num++;  // 순위 증가
            });
            AligningListNumberSpacing();
        });
}

function loadCity(city) {
    let tags = {
        'seoul': 'tagSeoul',
        'gyeonggi': 'tagGyeonggi',
        'sokcho': 'tagSokcho',
        'busan': 'tagBusan'
    }

    document.getElementById('listElement').innerHTML = '';
    getCityData(city);
    changeTag(tags[city]);
}

function changeTag(selectedTag) {
    let tagList = ['tagSeoul', 'tagGyeonggi', 'tagSokcho', 'tagBusan'];
    tagList = tagList.filter(tag => tag !== selectedTag)

    document.getElementById(selectedTag).style.backgroundColor = "#186ADE";
    document.getElementById(selectedTag).style.color = "#fff";
    document.getElementById(selectedTag).style.fontWeight = "700";

    for (let tag of tagList) {
        document.getElementById(tag).style.backgroundColor = "#DCE3E8";
        document.getElementById(tag).style.color = "#000";
        document.getElementById(tag).style.fontWeight = "normal";
    }
}

loadCity('seoul');

const titleSeoul = document.getElementById('seoul');
const titleGyeonggi = document.getElementById('gyeonggi');
const titleSokcho = document.getElementById('sokcho');
const titleBusan = document.getElementById('busan');

let cityList = [titleSeoul, titleGyeonggi, titleSokcho, titleBusan]
let imgList = ["url('img/photo-1628008335819-7175b35fa4f5.avif')", "url('img/photo-1598523318933-fa99cf949897.avif')", "url('img/photo-1603031682537-ea6729c9d1bc.avif')", "url('img/photo-1541055575455-df3a497caa48.avif')"];

function onTitle(index) {
    cityList[index].style.color = "#fff";
    cityList[index].style.zIndex = "999";
    document.getElementById('mainImage').style.backgroundImage = imgList[index];
    // document.getElementById('img-container').style.backgroundImage = "url('data:image/png;base64,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')";
    document.getElementById('black').style.opacity = 0;
}

function offTitle(index) {
    cityList[index].style.color = "rgba(0, 0, 0, 0)";
    document.getElementById('black').style.opacity = 1;
    // document.getElementById('black').style.background = "#000";
}

function sleep(ms) {
    return new Promise((r) => setTimeout(r, ms));
}

let index = 0;

function check_index_and_reset() {
    if (index >= 3) {
        index = 0;
    } else {
        index += 1;
    }
}

setInterval(() => {
    onTitle(index);
    sleep(3500)
        .then(() => offTitle(index))
        .then(() => check_index_and_reset())
}, 6000);

const className = document.querySelectorAll('.developer-name');

/**
 * githubID에 따른 github프로필을 새 탭에서 볼 수 있게 함
 * @param {string} githubID github아이디
 */
function linkGithub(githubID) {
    window.open(`https://github.com/${githubID}`);
}

[].forEach.call(className, (element) => {
    element.addEventListener('click', () => {
        let className = element.classList[1];
        linkGithub(className === 'developer-name-jaewon' ? 'wodnjse' : 'baekinwon');
    })

})

const listElement = document.getElementById('listElement');

let isVisible = false;
addEventListener('scroll', () => {
    let viewportTop = Math.floor(listElement.getBoundingClientRect().top);

    if(viewportTop < 0) {
        if(isVisible) return;

        const test = document.getElementsByClassName('main-module-container')[0];
        test.insertAdjacentHTML('beforeend', `
            <div class="floating-btn" id="floatingButton">
                <span class="material-symbols-outlined"></span>
                <span class="btn-text">위로 올라가기</span>
            </div>
        `)
        const scrollTop = document.getElementById('floatingButton');
        scrollTop.addEventListener('click', () => {
            const scrollPosition = document.getElementById('touristAttraction').offsetTop;  // offsetTop: 화면 최상단으로부터의 픽셀값
            // 화면 최상단에서부터 1783px - 100px = 스크롤 시 상단에 100px 여백 주기
            window.scrollTo({top: scrollPosition - 100, behavior: 'smooth'});  // behavior: smooth = 부드러운 스크롤 효과
        });
        isVisible = true;
    } else {
        if(!isVisible) return;

        document.getElementById('floatingButton').remove();
        isVisible = false;
    }
})

/**
 * 리스트 숫자의 width가 일정하지 않아 여행지명 간격이 맞춰지지 않는 오류
 * .list-number의 width를 일정하게 설정하여 간격 맞춤
 * @constructor
 */
function AligningListNumberSpacing() {
    let listNumber = document.querySelectorAll('.list-number');
    listNumber.forEach(nodeIndex => {
        // 리스트 숫자의 width가 25px 미만이면 => width: 20px
        if (nodeIndex.clientWidth < 25) nodeIndex.style.width = '20px';
        // 그 외(width가 25px 이상) => width: 32px
        else nodeIndex.style.width = '32px';
    });
}

