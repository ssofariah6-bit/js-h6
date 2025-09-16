const fahrenheit = (suhu) => 9/5 * suhu + 32;
const kelvin = (suhu) => suhu + 273;
const reamur = (suhu) => 4/5 * suhu;

const konversi = () => {
    let suhu = parseFloat(document.getElementById('celcius').value);
    let kvrs = document.getElementById('jenisSuhu').value;
    let hasilSuhu;

    if (kvrs === 'f') hasilSuhu = fahrenheit(suhu);
    else if (kvrs === 'k') hasilSuhu = kelvin(suhu);
    else if (kvrs === 'r') hasilSuhu = reamur(suhu);
    else hasilSuhu = 'Operator tidak valid';
    
    document.getElementById('hasilSh').textContent = `Hasil : ${hasilSuhu}`;
}
