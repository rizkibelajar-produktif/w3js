//SPREAD OPERATOR
//pake simbol ... yang digunakan utk memecah iterable

//CASE 1: menggabungkan array
const a = [12, 13, 14, 15];
const b = [21, 22, 23, 24];
const x = [...a, ...b];
const c = [...a, 1, ...b];
console.log(x, c);

//CASE 2: meng-copy Array
const y = ['satu', 'dua', 'tiga'];
const z = [...y];

y[2] = 'enam';
console.log(z, y);

//CASE 3: mengubah nodelist ke array agar bisa dilooping dengan map
const list = document.querySelectorAll('li');
const str = [...list].map( e => e.textContent);
console.log(str);

//case 4: bikin animasi per huruf setelah dipecah dari array-nya
const nama = document.querySelector('.nama');
const huruf = [...nama.textContent].map( tiapHuruf => `<span>${tiapHuruf}</span>` ).join('');
//console.log(huruf);
nama.innerHTML = huruf;