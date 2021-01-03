/*
//FOR...OF
"creates a loop iterating over iterable object"
ITERABLE OBJECT: String, Array, Arguments/NodeList, TypedArray, Map, Set, User-defined Iterables
*/

//LOOPING ARRAY
/*
const mhs = ['Kinoy', 'gadis', 'shalihah', 'nan', 'sederhana'];
//pake looping for biasa, mesti pke let krn ada nilai i yg berubah terus slama looping
for (let i=0; i < mhs.length; i++) {
    console.log(mhs[i]);
}

//pake looping ForEach
mhs.forEach ( e => console.log(e) );

mhs.forEach ( e => {
    console.log(`${m} adalah mahasiswa ke ${i + 1}`);
});

//pake For...Of
for ( const e of mhs) { console.log(e); }
*/


//LOOPING String (oh ya, gak boleh pke forEach. forEach khusus utk array)
/*
const nama = "Kinoy";
for ( const e of nama ) { console.log(e); }
*/

//LOOPING NODELIST dari HTML
//Pake ForEach
/*
const list = document.querySelectorAll('.items');//bentuknya NodeList
list.forEach( e => console.log (e.textContent) );
*/
/*
//Pake For...Of
for ( const e of list) { console.log (e.textContent) }
*/

//LOOPING "ARGUMENTS"
/*
function jumlahkanAngka() {
    let jumlah = 0;
    for ( e of arguments ) { //setiap element dari arguemnts
        jumlah += e; //dijumlahkan disini
    }
    return jumlah; //baru dikembalikan
}

console.log(jumlahkanAngka(1, 2, 3, 4, 5));
*/


//FOR...IN
/*
"Creates a loop only iterating over enumerable."
jadi, hanya yang ENUMERABLE aja yaitu OBJECT yang bisa diloop
*/
const mhs = {
    nama: 'Kinoy',
    hobi: 'belajar',
    email: 'kinoy@gmail.com'
}

for ( const e in mhs ) { console.log(e); }//hanya looping properti, disebut index
for ( const e in mhs ) { console.log(mhs[e]); }//looping valuesnya, [e] sbg index mhs

