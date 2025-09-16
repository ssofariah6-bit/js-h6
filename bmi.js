const indeks = (a, b) => a / b*b;

const hitung = () => {
    let a = parseFloat(document.getElementById('berat').value);
    let b = parseFloat(document.getElementById('tinggi').value);
    let hasil;

    if (indeks <= 18.5) hasil = 'Berat badan kurang (underweight)';
    else if (18.5 <= indeks <= 24.9) hasil = 'Normal/ideal';
    else if (25 <= indeks <= 29.9) hasil = 'Kelebihan berat badan (overweight)';
    else if (indeks >= 30) hasil = 'Obesitas';
    else hasil = "Masukkan berat dan tinggi badan!";

    document.getElementById('hasil').textContent = `Hasil : ${hasil}`;
}
