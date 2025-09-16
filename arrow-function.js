const user = {
    nama : 'Budi',
    sayHi : function(){
        console.log (`Halo, nama saya ${this.nama}`);
        setTimeout(() => {
            console.log(`Setelah 1 detik, nama saya ${this.nama}`);
        }, 1000);
    }
};
user.sayHi();