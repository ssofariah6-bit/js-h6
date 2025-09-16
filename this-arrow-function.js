const user = {
    nama : 'Budi',
    sayHi : function (){
        console.log(`Halo nama saya ${this.nama}`);
        setTimeout (function(){
            console.log (`Setelah 1 detik, nama saya ${this.nama}`);
        },10000);
    }
};

user.sayHi();