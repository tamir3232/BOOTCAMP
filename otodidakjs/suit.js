var lagi = true
while (lagi == true) {


    var p = prompt('pili : gajah, semut, orang')

    var comp = Math.floor(Math.random() * 3)

    console.log(comp)
        // 0 =  gajah
        // 1 = semut
        // 2 = orang

    var hasil = ''

    if (comp == 0) {
        comp = 'gajah'
    } else if (comp == 1) {
        comp = 'semut'
    } else {
        comp = 'orang'
    }


    if (p == comp) {
        hasil = 'SERI'
    } else if (p == 'gajah') {
        hasil = (comp == 'orang') ? 'MENANG' : 'KALAH';
    } else if (p == 'semut') {
        hasil = (comp == 'gajah') ? 'MENANG' : 'KALAH';
    } else if (p == 'orang') {
        hasil = (comp == 'semut') ? 'MENANG' : 'KALAH';
    }


    alert('KAMU MEMILIH : ' + p + '\ndan komputer memilih : ' + comp + '\nmaka kamu hasilnya : ' + hasil)

    lagi = confirm("APAKAH ANDA INGIN BERMAIN LAGI?");
}