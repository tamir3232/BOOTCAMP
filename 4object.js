const main = () => {
    // cara bikin object
    const mobil = {
        warna: "putih",
        merek: "honda",
        warnaKaca: "hitam",
        roda: {
            jumlah: 4,
            ketebalan: "3cm"
        },
        bukaPintu: function() {
            return 'membuka pintu mobil'
        },
        jalankan: function(kecepatan) {
            return `menjalankan mobil dengan kecepatan ${kecepatan} km/jam`
        }
    }

    mobil["bersihkanKaca"] = function() {
        return "membersihkan kaca mobil yang warna " + this.warna
    }
    mobil["spion"] = 2

    console.log(mobil.warna)
    console.log(mobil.jalankan(90))
    console.log(mobil['merek'])
    console.log(mobil.bersihkanKaca())
    console.log(mobil.spion)
}


const someArray = {
    0: "saya",
    1: "belajar",
    2: "js"
}

const someObj = {
    nama: "sebuah nama"
}

console.log(Object.keys(someObj))
console.log(Object.values(someObj))

const array = ["saya", "sedang", "makan"]
array.push("roti")

console.log(array[1])

main()