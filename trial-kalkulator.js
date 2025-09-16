const prompt = require('prompt-sync')();

const hitung = () =>{
    let a = parseFloat(document.getElementById("angka1").value);
    let b = parseFloat(document.getElementById("angka2").value);
    let operasi = document.getElementById("operator").value;
    let hasil;
    

    if (operasi === '+'){
        const tambah = (a, b) => a + b;
        hasil = tambah(a, b);
    }else if (operasi === "-"){
        let hasil = a - b;
        console.log(`Hasil operasi pengurangan ${angka1} dengan ${angka2} adalah ${hasil}.`);
        return hasil;
    }else if (operasi === "*"){
        let hasil = a * b;
        console.log(`Hasil operasi perkalian ${angka1} dengan ${angka2} adalah ${hasil}.`);
        return hasil;
    }else if (operasi === "/"){
        let hasil = a / b;
        console.log(`Hasil operasi pembagian ${angka1} dengan ${angka2} adalah ${hasil}.`);
        return hasil;
    }
    else{
        console.log(`Tolong masukkan operasi yang sesuai dengan pilihan yang ada!`);
    }
    document.getElementById("hasil").textContent = `Hasil : ${hasil}`;
}
