//REST PARAMETER
//CASE 1: jumlahkan angka dg reduce & for..of
function jumlahkan(...angka) {
    /*
    //jangan lupa inisialisasi dulu klo mau jumlahkan nilai
    let total = 0;
    for (const e of angka) {
        total += e;
    }
    return total;
    */
    
    //ingat! klo 2 parameter mesti ditaruh dalam ()
    return angka.reduce((e, val) => e + val);
}
console.log(jumlahkan(1, 2, 3, 4, 5, 6 , 7));

//CASE 2: Bikin data ketua, wakil ketua, dan sisanya adalah anggota
const kelompok1 = ['Kinoy', 'Kia', 'Aisyah', 'Raihan', 'Aqwa'];
[ketua, wakil, ...anggota] = kelompok1;
console.log(ketua);

//CASE 3: bikin data team berisi nama PM dan membernya
const team = {
    pm: 'Kinoy',
    frontend1: 'Anin',
    frontend2: 'Miqdad',
    backend1: 'Kale',
    backend2: 'Aimee',
    ux: 'Lovina',
    devOps: 'Moreno'
}

const {pm, ...myTeam} = team;
console.log(myTeam);

//CASE 4: filter pencarian bedasarkan type data
function filterBy(type, ...values) {
    return values.filter( e => typeof e === type ); //values yang mesti dikembalikan, Kinoy!
}
console.log(filterBy('boolean', 1, 2, 'Kinoy', false, 10, true, 'Kia'));