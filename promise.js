/*
// CASE 1: request API pake Vanilla Javascript with js modern yaitu FETCH
fetch('http://www.omdbapi.com/?apikey=2b2e9a45&s=avengers')
    //then ini parameternya callback bntuk arrow fn
    .then( response => response.json()) //spy bentuknya json. json mengembalikn promise
    .then( response => console.log(response));
*/

// PROMISE
// Object yang merepresentasikan KEBERHASILAN/KEGAGALAN sebuah event
// yang asynchronous di MASA YANG AKAN DATANG (namanya juga janji/promise)


// JANJI ada 2 ( TERPENUHI / INGKAR)
// si janji disebut STATES

// States klo terpenuhi FULFILLED, diingkari REJECTED, waktu tunggu hasilnya PENDING

// Untuk menjalankan keadaan (states) ini, da 3 fungsi CALLBACK yang mesti diingat!
// callback ( resolve / reject / finally. finally artinya waktu tunggu selesai. ingat ini function ya

// di dalam Promise ini ada aksi yang akan dilakukan, ntah itu janji terpenuhi or teringkari
// aksi ( then / catch ). then itu klo terpenuhi, catch klo teringkari


// CASE 3
/*
let ditepati = false; // true klo ditepati
const janji1 = new Promise( (resolve, reject) => { // ingat parametrnya 2 callback, makanya ditulis di dalam kurung
    if (ditepati){
        resolve('Janji telah ditepati'); //misalnya resolvenya hanya nge-output string. sbnrnya bisa ngelakuin bnyk hal dalam fungsi resolve ini, misal request api
    } else {
        reject('Ingkar janji...');
    }
});
//console.log(janji1);
janji1
    .then( response => console.log('Alhamdulillah.. ' + response))
    .catch( response => console.log('Innalillah.. ' + response));
*/

// CASE 4
/*
let dipenuhi = true;
const janji2 = new Promise ( (resolve, reject) => {
    if(dipenuhi){
        setTimeout( () => {
            resolve('Setelah nunggu 5 detik, Janji dipenuhi.');
        } ,5000);
    } else {
        setTimeout(() =>{
            reject('Setelah nunggu 5 detik, ternyata janji diingkari.');
        }, 5000);
    }
});

console.log('MULAI');
janji2
    //method finally dijalankan ketika salah satu dr THEN or CATCH ini sdh siap dijalankan. saat udh gak pending lagi
    //finally biasanya digunain utk animasi loading
    .finally( () => console.log('loading selesai'))
    .then( response => console.log('Alhamdulillah.. ' + response))
    .catch( response => console.log('Innalillah.. ' + response));
console.log('SELESAI');
*/


/*
//CASE 5: memanggil banyak api sekaligus
// Promise.all();
//method all() digunakan untuk menjalankan banyak promise sekaligus
//misal dalam satu page, ada bbrp request api berbeda-beda dijalankan

const film = new Promise( resolve => { // hanya pke callback resolve
    setTimeout( () => {
        resolve([       //resolveny berupa data array berisi object
            {      //
                judul: 'Harry Potter',
                tahun: 2000,
                author: "J.K Rowling"
            },
            {      //
                judul: 'Laskar Pelangi',
                tahun: 2008,
                author: "Andrea Hirata"
            },
        ])
    }, 5000);
});

const cuaca = new Promise( resolve => {
    setTimeout( () => {
        resolve([
            {
                kota: 'Yogyakarta',
                temp: 28
            },
            {
                kota: 'Bandung',
                temp: 27
            },
        ]);
    }, 2500);
});

Promise.all([film, cuaca])
    .then( response => {
        const [film, cuaca] = response;
        console.log(film);
        console.log(cuaca);
    });
*/

//CASE 6: VANILLA & FETCH
//FETCH adalah fungsi dlm javascript yg mengembalikan promise
const searchButton = document.querySelector('.search-btn');
searchButton.addEventListener('click', function() { //gak boleh pke arrow function krn this disini ngarah ke window

    //karena keyword pencarian berdasarkan inputan dari user, maka mesti dibuatkan variable utk nampung dulu
    const inputKeyword = document.querySelector('.input-keyword');
    fetch('http://www.omdbapi.com/?apikey=2b2e9a45&s=' + inputKeyword.value) //pending
    .then( response => response.json()) // fulfilled // agar datanya jadi json, maka kudu panggil method json()
    .then (response => console.log(response));
});
