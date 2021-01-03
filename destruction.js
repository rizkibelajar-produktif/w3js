//Destructuring variable / Assignment

//Destructuring Array
/*
const perkenalan = [1, 2, 3, 4];
const [x, y, z, n] = perkenalan;
console.log(x);
*/

//Skipping items
/*
const nomer = ['satu', 'dua', 'tiga', 'empat'];
const [a, , , d] = nomer;
console.log(a);
*/

//Swap Items
/*
let a = 1, b = 2;
[a,b] = [b,a];
console.log(b);
*/

//Me-Return value pada function
/*
function coba(){
    return [1,2];
}

//const a = coba(); //mesti coba satu-satu
//console.log(a[1]);
//Kalo di destruct, bisa langsung panggil aja tanpa ngurus indexnya
const [a,b] = coba();
console.log(b);
*/

//Rset parameter saat destructing
/*
//const [a,b] = [1, 2, 3, 4, 5 ,6 ,7, 8];
//console.log(a);
//console.log(c); // ini akan error krn gak ada parameternya

//makanya pake rest parameter
const [a, ...values] = [1, 2, 3, 4, 5 ,6 ,7, 8];
console.log(a);
console.log(values);
*/

//Destructing Object
/*
const mhs = {
    nama: 'Kinoy',
    hobbi: 'belajar'
}

//biasanya kita nulis kayak gini:
//const a = mhs.nama;
//console.log(a);

//tapi dengan metode destruction, kita cukup menggunakan {} 
//dan menuliskan nama WAJIB sesuai propertinya lalu isikan ke nama objectnya
const {nama, hobbi} = mhs;
console.log(nama);
*/

//Assignment tanpa deklarasi object
 //({} = {});
/*
 ({nama, hobbi} = {nama: 'Kinoy', hobbi: 'belajar'});//kalo objectnya sebaris gini aja
 console.log(hobbi);
 */

 //Assign ke variable baru
 /*
 ({nama: n, hobbi: h} = {nama: 'Kinoy', hobbi: 'belajar'});
 console.log(n);
 */


 //Memberikan Default Value
 /*
 ({nama: n, hobbi: h, email: e = 'email@default.com'} = {nama: 'Kinoy', hobbi: 'belajar'});
 console.log(e);
 */


 //Rest Parameter
 /*
 ({nama, ...values} = {nama: 'Kinoy', hobbi: 'belajar', kota: 'Gorontalo'});
 console.log(values);
 */

 //mengambil field pada object, setelah dikirimkan sebagai paramater pada function
 /*
 const mhs = {
    id: 123,
    nama: 'Kinoy',
    hobbi: 'belajar'
}

function getIdMhs(mhs) { //mengambil field pada object Mhs
    return mhs.id; //ini akan dikembalikan
} 
//yang dijadikan argument mesti sama-sama object 
console.log(getIdMhs(mhs));//kirim argument object sbg parameter
*/

/*
const mhs = {
    id: 123,
    nama: 'Kinoy',
    hobbi: 'belajar'
}

//dengan destruction bisa langsung tulis n mangggil propertinya
function getIdMhs({ id, nama }) { //karena udah dibongkar, gak bisa sembarang manggil
    return nama; //hny bisa satu (parameter) krn deklarasi udh gak dikenali
}
console.log(getIdMhs(mhs));
*/

//DESTRUCTION FUNCTION dengan return value is ARRAY
/*
function kalkulasi(a, b) {
    return [a+b, a*b];
}

/*
const tambah = kalkulasi(2,3)[0];
const kali = kalkulasi(2,3)[1];
console.log(kali);
*/

/*
//dengan menggunakan destruction, jadi simple aja
const [tambah, kali, bagi = 'tidak ada'] = kalkulasi(2,3);//kalo array gak boleh tertukar urutan el-nya
console.log(tambah);
*/

//DESTRUCTIOn FUNCTION dengan return value is OBJECT
/*
function kalkulasi(a,b) {
    return {
        kali: a*b,
        bagi: a/b,
        tambah: a+b,
        kurang: a-b
    }
}

const { kali, tambah, kurang, bagi } = kalkulasi(2,3); // apa yg didestruct, Kinoy?
console.log(kurang);
*/

//DESTRUCTING FUNCTION TAPI PADA ARGUMENT dari sebuah object
/*
const mhs1 = {
    nama: 'Axyz',
    umur: 1,
    email: 'xxx@domain.com'
}
/*
//cara biasa
function cetakData(nama, umur) {
    return  `Saya ${nama}, berumur ${umur} tahun.`;
}

const data1 = cetakData(mhs1.nama, mhs1.umur);
console.log(data1);
*/
/*
//cara simple dengan desctruction
function cetakData( { nama, umur }) {
    return `Saya ${nama}, berumur ${umur} tahun.`;
}
alert(cetakData(mhs1));
*/

//COMPLEX DESTRUCTION FUNCTION PADA ARGUMENT
//STUDI KASUS NILAI MAHASISWA
const mhs1 = {
    nama: 'Kinoy',
    umur: 19,
    email: 'xxx@domain.com',
    nilai: {
        tugas: 80,
        uts: 90,
        uas: 95
    },
    comment: 'Keep Learning!'
}
function cetakDataMhs({nama, umur, email, nilai: {tugas, uts, uas}, comment }) {
    return `
    <div>
    <h3>:: ADVANCE JAVACARIPT ::</h3>
    <ul>
    <li>Nama: ${nama}</li> 
    <li>Umur: ${umur}</li>
    <li>Nilai UAS: ${uas}</li>
    <li>Pesan Dosen: ${comment}</li>
    </ul>
    </div>
    `;
}

//console.log(cetakDataMhs(mhs1));
document.body.innerHTML = cetakDataMhs(mhs1);