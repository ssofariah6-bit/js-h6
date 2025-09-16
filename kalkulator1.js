const tambah = (a, b) => a + b;
const kurang = (a, b) => a - b;
const kali = (a, b) => a * b;
const bagi = (a, b) => a / b;

const hitung = () => {
    let a = parseFloat(document.getElementById("angka1").value);
    let b = parseFloat(document.getElementById("angka2").value);
    let operasi = document.getElementById('operator').value;
    let hasilOperasi;

    if (operasi === '+') hasilOperasi = tambah(a,b);
    else if (operasi === '-') hasilOperasi = kurang(a,b);
    else if (operasi === '*') hasilOperasi = kali(a,b);
    else if (operasi === '/') hasilOperasi = bagi(a,b);
    else hasilOperasi = 'Operator tidak vallid';

    document.getElementById('hasilOp').textContent = `Hasil : ${hasilOperasi}`;
}