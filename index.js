
function loadSeoul() { 
    fetch('http://localhost:8000/data/seoul') // 해당 주소의 api를 불러옴
        .then((response) => response.json()) // 불러온 api 값을 response로 받고 response값을 json으로 리턴 한다.
        .then((data) => { //그 값이 data라는 변수에 json array 형태로 들어감
            data.forEach(element => { //가져온 값의 모든 값을 가져오기 위해 forEach문으로 모든 요소를 반복해 가져옴
                const list = document.getElementById('listElement') // 읽어온 데이터를 추가할 리스트의 아이디를 가져옴
                list.insertAdjacentHTML('beforeend', `            
            <li class = "auctionRow">
            <p class = "auctionID">명소: ${element.명소}</p>
                        <p class = "auctionAddress">별점: ${element.별점}</p>
                        </li>
                        `); // 아이디로 가져온 값을 html 문으로 반복해서 뒤에 추가함
            });
        });
}


function loadGyeonggi(){
    fetch('http://localhost:8000/data/gd') // 해당 주소의 api를 불러옴
        .then((response) => response.json()) // 불러온 api 값을 response로 받고 response값을 json으로 리턴 한다.
        .then((data) => { //그 값이 data라는 변수에 json array 형태로 들어감
            data.forEach(element => { //가져온 값의 모든 값을 가져오기 위해 forEach문으로 모든 요소를 반복해 가져옴
                const list = document.getElementById('listElement') // 읽어온 데이터를 추가할 리스트의 아이디를 가져옴
                list.insertAdjacentHTML('beforeend',`            
                    <li class = "auctionRow">
                        <p class = "auctionID">명소: ${element.명소}</p>
                        <p class = "auctionAddress">별점: ${element.별점}</p>
                    </li>
                `); // 아이디로 가져온 값을 html 문으로 반복해서 뒤에 추가함
            });
        });
}


function loadSokcho(){
    fetch('http://localhost:8000/data/sc') // 해당 주소의 api를 불러옴
        .then((response) => response.json()) // 불러온 api 값을 response로 받고 response값을 json으로 리턴 한다.
        .then((data) => { //그 값이 data라는 변수에 json array 형태로 들어감
            data.forEach(element => { //가져온 값의 모든 값을 가져오기 위해 forEach문으로 모든 요소를 반복해 가져옴
                const list = document.getElementById('listElement') // 읽어온 데이터를 추가할 리스트의 아이디를 가져옴
                list.insertAdjacentHTML('beforeend',`            
                    <li class = "auctionRow">
                        <p class = "auctionID">명소: ${element.명소}</p>
                        <p class = "auctionAddress">별점: ${element.별점}</p>
                    </li>
                `); // 아이디로 가져온 값을 html 문으로 반복해서 뒤에 추가함
            });
        });


}


function loadBusan(){
    fetch('http://localhost:8000/data/busan') // 해당 주소의 api를 불러옴
        .then((response) => response.json()) // 불러온 api 값을 response로 받고 response값을 json으로 리턴 한다.
        .then((data) => { //그 값이 data라는 변수에 json array 형태로 들어감
            data.forEach(element => { //가져온 값의 모든 값을 가져오기 위해 forEach문으로 모든 요소를 반복해 가져옴
                const list = document.getElementById('listElement') // 읽어온 데이터를 추가할 리스트의 아이디를 가져옴
                list.insertAdjacentHTML('beforeend',`            
                    <li class = "auctionRow">
                        <p class = "auctionID">명소: ${element.명소}</p>
                        <p class = "auctionAddress">별점: ${element.별점}</p>
                    </li>
                `); // 아이디로 가져온 값을 html 문으로 반복해서 뒤에 추가함
            });
        });
} 


function se_load(){
        document.getElementById('listElement').innerHTML = loadSeoul();
}

function gd_load(){
    document.getElementById('listElement').innerHTML = loadGyeonggi();
}

function sc_load(){
    document.getElementById('listElement').innerHTML = loadSokcho();
}

function busan_load(){
    document.getElementById('listElement').innerHTML = loadBusan();
}