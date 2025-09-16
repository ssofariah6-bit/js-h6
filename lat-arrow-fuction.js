const prompt = require('prompt-sync')();

const luasLingkaran = (jariJari) => 3.14 * jariJari* jariJari;
    let jariJari = parseFloat(prompt('Masukkan jari-jari lingkaran : '));

    console.log(`Luas lingkaran adalah : ${luasLingkaran(jariJari)}`);