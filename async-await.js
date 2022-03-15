// console.log('//////////// Asyn/ Await');

//when we use async keyword before function then it always return a promise.

// async function getData() {
//     return 'Data received';
// }

// getData().then(data => console.log(data));
//OR
// getData().then(console.log);

// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Data Received')
//     }, 3000);
// })

// async function getData() {
//     let response = await promise;
//     console.log(response)
// }

// getData();

let dell = {
    brand :'Dell',
    hardDisk: '1 Tb',
    color: 'Black'
}

// -----------------   With promise ----------------

let buyLaptop = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(dell);
    }, 3000);
})


let buyLaptop2 = fetch('https://jsonplaceholder.typecode.com/posts')
                .then(response => response.json())




let result1 = document.getElementById('result1');
let result2 = document.getElementById('result2');
let result3 = document.getElementById('result3');

function fetch1(){
    result1.innerText = 'Fetching Data...';

    buyLaptop.then(data => {
        console.log(data);
        result1.innerText = JSON.stringify(data);
    })
   
}


// -----------------   With async/ await ----------------

async function fetch2() {
    result2.innerText = 'Fetching Data..';

    let res = await buyLaptop;
    result2.innerText = JSON.stringify(res);
}


// -----------------   With fetch api ----------------

// function fetch3() {
//     result3.innerText = 'Fetching Data..';


    //Promise
//     buyLaptop2.then(res => {
//         result3.innerText = JSON.stringify(res);
//     })
// }
    

async function fetch3() {
    result3.innerText = 'Fetching Data...';
    let res = await buyLaptop2;

    result3.innerText = JSON.stringify(res);
}













