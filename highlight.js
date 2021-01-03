//Tagged Templates

const word1 = 'Kinoy';
const word2 = 'Javascript';

function highlight(strings, ...values){
    return strings.reduce( (result, e, i) => `${result}${e}<span class="hl">${values[i] || ''}</span>`, '');
}

const str = highlight`<div><h5>Halo, nama saya adalah ${word1} dan saya sudah (hopefully) mencapai level advance programmer untuk bahasa pemrograman ${word2}..</h5></div>`;
document.body.innerHTML = str;
//console.log(str);
/*
function panggilHasil(strings, ...values) {
/*   
    //awalnya kosong, ntar berubah isinya
    //string 0 values 0, string 1 values 1, string 2
    //dilooping pke forEach krn gak butuh bikin array baru dg map
    //array strings kita jalankan ke dalam forEach dg paramater
    //bisa dua yaiu element dan index
    //abis itu return, pake kurung kurawal aja krn lebih dari 1 baris
    let result = ''; //tulis juga si return result spy gak lupa
    strings.forEach( (e, i) => {
        // result = result + `${isi string}${index ke-i}` ulang2
        result += `${e}${values[i] || ''}` //jika values ada isi stringnya, tampilin, klo kosong, kosongin.   
    });
    return result;
*/
/*
    //pake method reduce higher order function
    return strings.reduce( (result, e, i) => `${result}${e}${values[i] || ''}`, '');
}

const str = panggilHasil`<h5><span>Halo, nama saya adalah ${word1} dan saya sudah mencapai level advance programmer untuk bahasa pemrograman ${word2}, i hope so..</span></h5>`;
*/

//console.log(str);
//const str = panggil();
//document.getElementById("coba").innerHTML = str;
//alert(str);
