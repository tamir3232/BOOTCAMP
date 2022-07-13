class Human {
    constructor(name, age) {
        this.name = name
        this.age = age
        this.hobbies = []
        this.address = {}
    }

    addHobbie(hobi) {
        this.hobbies.push(hobi)
    }

    getName() {
        return `Hello my name is ${this.name}`
    }

    setCity(city) {
        this.address.city = city
    }
}

const saeful = new Human("saeful", 50)

saeful.name = "tanpa nama"
saeful.age = 30

saeful.addHobbie("makan")
saeful.addHobbie("game")

console.log(saeful.name)
console.log(saeful.hobbies)
console.log(saeful.getName())
console.log(saeful.age)

saeful.setCity("jakarta")

console.log(saeful.address)

class Kendaraan {
    constructor(warna, merek, warnaKaca, roda) {
        this.warna = warna
        this.merek = merek
        this.warnaKaca = warnaKaca
        this.roda = roda
    }

    bukaPintu() {
        return 'membuka pintu mobil'
    }

    jalankan(kecepatan) {
        return `menjalankan mobil dengan kecepatan ${kecepatan} km/jam`
    }
}

const mobil = new Kendaraan("putih", "honda", "hitam", { jumlah: 4, ketebalan: "3cm" })


console.log(mobil.jalankan(30))
const motor = new Kendaraan("hitam", "yamaha", "", { jumlah: 2, ketebalan: "2cm" })
console.log(motor.jalankan(50))

// var foo = []

// foo.push(1)
// foo.push(2)
// console.log(foo[2])