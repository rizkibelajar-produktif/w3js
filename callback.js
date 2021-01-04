//SYNCHRONUS CALLBACK
/*
"I will call back later"
Function yang dikirim sebagai sebuah parameter pada function yang lain
Functionnya bakalan jalan kalo fungsi lainnya udah dijalanin
Mungkin, semacam baby yang nunggu ibunya selesai masak baru bisa makan kali ya
*/

//CASE 1: Higher Order Function using Arrow Function

//JIKA GAK PAKE arrow function DEKLARASIINNYA GINI:
//function anakMakan(mknan) {
//    console.log(`si anak makan ${mknan} buatan ibu`);
//}
/*
function ibuMasak(theCallback) {
    const mknan = "Nasi Jagung";
    theCallback(mknan);
}

//ibuMasak(anakMakan);

//PAKE ARROW FUNCTION AJA untuk jalanin Callback
ibuMasak( mknan => console.log(`Si anak makan ${mknan} buatan ibu`));
*/

//CASE 2: JSON DATA
/*
const daughters = 
[
    {"nama": 'Kinoy', "umur": 30}, 
    {"nama": 'Anugrah', "umur": 23}, 
    {"nama": 'Kia', "umur": 2}
];

console.log('Mulai');
//daughters.forEach( (e, i) => console.log(`Daughter ke ${i+1}: ${e.nama}`));
//Kalo misal pake API lain
daughters.forEach( (e, i) => {
    for (let i=0; i<10000000; i++)
    {
        let date = new Date();
    }   
    console.log(`Daughter ke ${i+1}: ${e.nama}`)
});
console.log('Selesai');
*/


//CASE 3: ASYNCHRONUS CALLBACK using ajax and json with live server
//ini menggunakan VANILLA Javascript or javascript murni
function getDataMahasiswa(url, success, error){//each success and error is a function
    let xhr = new XMLHttpRequest();//menjalankan AJAX dg bikin object AJAX

    // ketika state sdh siap, jalankan fungsi ini
    xhr.onreadystatechange = function() { 
        if (xhr.readyState === 4) {//request scr async, ini tahap udah beneran tuntas
            if (xhr.status === 200 ) {
                success(xhr.response); //perintahnya dibungkus dg callback success
            } else if ( xhr.status === 404 ) {
                error();//ingat! error ini adalah function. 
            }
        }
    }

    //trus kita jalanin AJAX-nya
    //hati-hati manggilnya! mesti di luar onreadystatechange.
    xhr.open('get', url); //bbrp parameter, methodnya apa (get, dll), lalu url-nya kmn?
    xhr.send(); //urlnya sesuai dg yg nti dikirm ke parameternya, lalu kita send
}

//sekarang kita panggil function-nya
//---------------------parameternya kan ada 3 yaitu url, success, and error------------
//urlnya arahkan ke workspace
//success-nya bisa pke function deklaration or tulis lgsg di parameter dg arrow function
//contohnya deklarasi kayak gini:
/*
function success() {

}

function error() {

}
//panggil sebelum punggil si getdataMahasiswa()

//or langsung dg anonymous function with arrow function kyk gini:
getDataMahasiswa ( url, () => {}, () => {} );
*/
console.log('MULAI');
getDataMahasiswa('mahasiswa.json', (results) => { //resultnya harus dlm bentuk values dr mahasiswa.json itu
    //ini part callback success, param: results
    //and results-nya ditampilkan dlm bentuk text klo gak di-parsing
    //makanya harus diparsing dg method JSON.parse() lalu di-LOOPING
    const mhs = JSON.parse(results);
    mhs.forEach( m => console.log(m.nama));
}, (pesanError) => console.log(pesanError.responseText));// ini callback error jika error
console.log('SELESAI');


//ALHAMDULILLAH, RABB I WANNA THANK YOU FOR THE KNOWLEDGES


//CASE 4: JQUERY
//supaya lebih gampang lagi, gak perlu nulis javascript murni gitu, pake JQUERY
//tapi, jangan pake jquery yg slim krn gak ada ajax-nya juga, klo pake Bootstrap
// si bootstrap ini udah otomatis punya jquery slim, jadi mesti diubah jquerynya
//spy bisa pake ajax
// oh ya, jquery itu dilambangkan dg dollar lho.. jadi pake ini: $
console.log('MULAI');
$.ajax({ // $.ajax({});, jadi kayak objec gitu parameternya
    url: 'mahasiswa.json',
    success: (mhs) => { //mhs itu klo di sebelumnya itu namanya results
        mhs.forEach( m => console.log(m.nama));
    }, //data yg dikembalikan oleh ajax udh berbentuk json
    error: (e) => {console.log(e.responseText)}
});
console.log('SELESAI');