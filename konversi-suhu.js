const fahrenheit = (a) => 9/5 * a + 32;
const kelvin = (a) => a + 273;
const reamur = (a) => 4/5 * a;

const hitung = () => {
    let a = parseFloat(document.getElementById('celcius').value);
    let op = document.getElementById('jenisSuhu').value;
    let hasil;

    if (op === 'f') hasil = fahrenheit(a);
    else if (op === 'k') hasil = kelvin(a);
    else if (op === 'r') hasil = reamur(a);
    else hasil = 'Operator tidak valid';
    
    document.getElementById('hasil').textContent = `Hasil : ${hasil}`;
}


/*const tambah = (a, b) => a + b;
const kurang = (a, b) => a - b;
const kali = (a, b) => a * b;
const bagi = (a, b) => a / b;

const hitung = () => {
    let a = parseFloat(document.getElementById("angka1").value);
    let b = parseFloat(document.getElementById("angka2").value);
    let op = document.getElementById('operator').value;
    let hasil;

    if (op === '+') hasil = tambah(a,b);
    else if (op === '-') hasil = kurang(a,b);
    else if (op === '*') hasil = kali(a,b);
    else if (op === '/') hasil = bagi(a,b);
    else hasil = 'Operator tidak vallid';

    document.getElementById('hasil').textContent = `Hasil : ${hasil}`;
} */