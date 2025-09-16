const prompt = require('prompt-sync')();

    let angka1 = parseFloat(prompt('Masukkan angka1 : '));
    let angka2 = parseFloat(prompt('Masukkan angka2 : '));
    console.log('Contoh operasi matematika +, -, *, /')
    let operasi = prompt('Masukkan operasi yang ingin dilakukan : ')
    

    if (operasi === '+'){
        let hasil = angka1 + angka2;
        console.log(`Hasil operasi ${angka1} dengan ${angka2} adalah ${hasil}.`);
           return hasil;
    }else if (operasi === "-"){
        let hasil = angka1 - angka2;
        console.log(`Hasil operasi pengurangan ${angka1} dengan ${angka2} adalah ${hasil}.`);
        return hasil;
    }else if (operasi === "*"){
        let hasil = angka1 * angka2;
        console.log(`Hasil operasi perkalian ${angka1} dengan ${angka2} adalah ${hasil}.`);
        return hasil;
    }else if (operasi === "/"){
        let hasil = angka1 / angka2;
        console.log(`Hasil operasi pembagian ${angka1} dengan ${angka2} adalah ${hasil}.`);
        return hasil;
    }
    else{
        console.log(`Tolong masukkan operasi yang sesuai dengan pilihan yang ada!`);
    }

/*   var ulang = prompt('Apakah masih ingin melakukan operasi lagi? (y/n)');
} while (ulang.toLowerCase() === 'y');
console.log('\nTerima kasih. Program telah selesai.'); */