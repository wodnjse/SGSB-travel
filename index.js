function getCityData(city) {
    fetch(`http://localhost:8000/data/${city}`) // 해당 주소의 api를 불러옴
        .then((response) => response.json()) // 불러온 api 값을 response로 받고 response값을 json으로 리턴 한다.
        .then((data) => { //그 값이 data라는 변수에 json array 형태로 들어감
            data.forEach(element => { //가져온 값의 모든 값을 가져오기 위해 forEach문으로 모든 요소를 반복해 가져옴
                const list = document.getElementById('listElement') // 읽어온 데이터를 추가할 리스트의 아이디를 가져옴
                list.insertAdjacentHTML('beforeend', `
                <li class = "auction-row" onclick = "window.open('https://www.mangoplate.com/search/${element.명소}')">
                        <p class = "auctionID">${element.명소}</p>
                        <p class = "auctionAddress">⭐${element.별점}</p>
                        </li>
                `); // 아이디로 가져온 값을 html 문으로 반복해서 뒤에 추가함
            });
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

    for (let tag of tagList) {
        document.getElementById(tag).style.backgroundColor = "#DCE3E8";
        document.getElementById(tag).style.color = "#000";
    }
}

loadCity('seoul');

// const hover = document.getElementById('seoul');
// hover.addEventListener('mouseover', () => {
//     document.getElementById('img-container').style.backgroundImage = "url('img/photo-1597548898542-78eeb7bfaf40.avif')";
//     this.innerHTML = "test";
// })

const titleSeoul = document.getElementById('seoul');
const titleGyeonggi = document.getElementById('gyeonggi');
const titleSokcho = document.getElementById('sokcho');
const titleBusan = document.getElementById('busan');

let arr = [titleSeoul, titleGyeonggi, titleSokcho, titleBusan];
let img = ["url('img/photo-1554310603-d39d43033735.avif')", "url('img/photo-1619777709778-f2629bc94a6c.avif')", "url('img/photo-1660785462445-f9d21cad7ada.avif')", "url('img/photo-1541055575455-df3a497caa48.avif')"];

function onTitle(index) {
    arr[index].style.color = "#fff";
    arr[index].style.zIndex = "999";
    document.getElementById('img-container').style.background = img[index];
}

function offTitle(index) {
    arr[index].style.color = "rgba(255, 255, 255, 0.1)";
    document.getElementById('img-container').style.background = "#000";
}

function sleep(ms) {
    return new Promise((r) => setTimeout(r, ms));
}

let index = 0;

function check_index_and_reset(){
    if (index >= 3){
        index = 0;
    }
    else{
        index += 1;
    }
}

setInterval(() => {
    onTitle(index);
    sleep(3000)
        .then(() => offTitle(index))
        .then(() => check_index_and_reset())
}, 5000);