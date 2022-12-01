function Seoul() {
    fetch('http://localhost:8000/data/seoul') // 해당 주소의 api를 불러옴
        .then((response) => response.json()) // 불러온 api 값을 response로 받고 response값을 json으로 리턴 한다.
        .then((data) => { //그 값이 data라는 변수에 json array 형태로 들어감
            data.forEach(element => { //가져온 값의 모든 값을 가져오기 위해 forEach문으로 모든 요소를 반복해 가져옴
                const list = document.getElementById('listElement') // 읽어온 데이터를 추가할 리스트의 아이디를 가져옴
                list.insertAdjacentHTML('beforeend', `
                <li class = "auction-row" onclick = "location.href='https://www.mangoplate.com/search/${element.명소}'">
                        <p class = "auctionID">${element.명소}</p>
                        <p class = "auctionAddress">⭐${element.별점}</p>
                    </li>
                `); // 아이디로 가져온 값을 html 문으로 반복해서 뒤에 추가함
            });
        });
}

function Gyeonggi() {
    fetch('http://localhost:8000/data/gyeonggi') // 해당 주소의 api를 불러옴
        .then((response) => response.json()) // 불러온 api 값을 response로 받고 response값을 json으로 리턴 한다.
        .then((data) => { //그 값이 data라는 변수에 json array 형태로 들어감
            data.forEach(element => { //가져온 값의 모든 값을 가져오기 위해 forEach문으로 모든 요소를 반복해 가져옴
                const list = document.getElementById('listElement') // 읽어온 데이터를 추가할 리스트의 아이디를 가져옴
                list.insertAdjacentHTML('beforeend', `
                <li class = "auction-row" onclick = "location.href='https://www.mangoplate.com/search/${element.명소}'">
                        <p class = "auctionID">${element.명소}</p>
                        <p class = "auctionAddress">⭐${element.별점}</p>
                    </li>
                `); // 아이디로 가져온 값을 html 문으로 반복해서 뒤에 추가함
            });
        });
}

function Sokcho() {
    fetch('http://localhost:8000/data/sokcho') // 해당 주소의 api를 불러옴
        .then((response) => response.json()) // 불러온 api 값을 response로 받고 response값을 json으로 리턴 한다.
        .then((data) => { //그 값이 data라는 변수에 json array 형태로 들어감
            data.forEach(element => { //가져온 값의 모든 값을 가져오기 위해 forEach문으로 모든 요소를 반복해 가져옴
                const list = document.getElementById('listElement') // 읽어온 데이터를 추가할 리스트의 아이디를 가져옴
                list.insertAdjacentHTML('beforeend', `
                <li class = "auction-row" onclick = "location.href='https://www.mangoplate.com/search/${element.명소}'">
                        <p class = "auctionID">${element.명소}</p>
                        <p class = "auctionAddress">⭐${element.별점}</p>
                    </li>
                `); // 아이디로 가져온 값을 html 문으로 반복해서 뒤에 추가함
            });
        });
}

function Busan() {
    fetch('http://localhost:8000/data/busan') // 해당 주소의 api를 불러옴
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

// const a = getElementById('seoul')

function loadSeoul() {
    document.getElementById('listElement').innerHTML = '';
    Seoul();
}

function loadGyeonggi() {
    document.getElementById('listElement').innerHTML = '';
    Gyeonggi();
}

function loadSokcho() {
    document.getElementById('listElement').innerHTML = '';
    Sokcho();
}

function loadBusan() {
    document.getElementById('listElement').innerHTML = '';
    Busan();
}