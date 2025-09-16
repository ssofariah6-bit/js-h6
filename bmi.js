const indeks = (berat, tinggi) => berat /((tinggi/100) * (tinggi/100));

const hitungBMI = () => {
    let berat = parseFloat(document.getElementById('berat').value);
    let tinggi = parseFloat(document.getElementById('tinggi').value);
    let nilaiBMI = indeks(berat, tinggi);
    let hasilBMI;

    if (nilaiBMI <= 18.5) hasilBMI = 'Berat badan kurang (underweight)';
    else if (nilaiBMI >= 18.5  && nilaiBMI <= 24.9) hasilBMI = 'Normal/ideal';
    else if (nilaiBMI >= 25 && nilaiBMI <= 29.9) hasilBMI = 'Kelebihan berat badan (overweight)';
    else if (nilaiBMI >= 30) hasilBMI = 'Obesitas';
    else hasilBMI = "Masukkan berat dan tinggi badan!";

    document.getElementById('hasilbmi').textContent = `Hasil : ${hasilBMI}`;
}
