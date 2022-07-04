// nomer 1 object
const user = {
    full_name: "",
    age: "",
    hobbies: [],
    full_address: "",
    getName: () => `Hi, my name is ${user.full_name}\n`,
    getAddress: () => `${user.full_address}\n`,
    getHobbies: () => `My Hobbies are ${user.hobbies}\n`,
    getBio: () =>
        `Hi, my name is ${user.full_name}. And my Hobbies are ${user.hobbies.map(
        (value, index, array) =>
          array.length - 1 === index ? " and " + value : value
      )}\n`,
    setName: (name) => (user.full_name = name),
}

user.full_name = "kapten chris"
user.full_address = "Jakarta"
user.hobbies.push("naik pesawat", "tidur", "mandi")

user.setName("ujang")
console.log(user.getName(), user.getAddress(), user.getHobbies(), user.getBio())
    // console.log("------------------------------------------------------")

// nomer 1 class
class User {
    constructor(full_name, age, hobbies, full_address) {
        this.full_name = full_name
        this.age = age
        this.hobbies = hobbies
        this.full_address = full_address
    }

    getName() {
        return `Hi, my name is ${this.full_name}\n`
    }
    getAddress() {
        return `${this.full_address}\n`
    }
    getHobbies() {
        return `My Hobbies are ${this.hobbies}\n`
    }
    getBio() {
        return `Hi, my name is ${
        this.full_name
      }. And my Hobbies are ${this.hobbies.map((value, index, array) =>
        array.length - 1 === index ? " and " + value : value
      )}\n`
    }
    setName(name) {
        this.full_name = name
    }
}

const Dany = new User("Dany", "20", ["ngoding", "tidur", "ngopi"], "bekasi")
Dany.setName("Ujang")

// console.log(Dany.getName(), Dany.getAddress(), Dany.getHobbies(), Dany.getBio())

// nomer 2 object
const transaction = {
    invoice_no: "",
    order_no: "",
    items: [],
    total_amount: null, // total tagihan
    total_payment: null, // total yang customer bayarkan
    total_change: null, // kembalian
    getInvoice: () =>
        `Your invoice is ${
        transaction.invoice_no
      }\n\nthe items are ${transaction.items.map((value, index, array) =>
        array.length - 1 === index ? " and " + value.name : value.name
      )}`,
    getChange: () => {
        const change = transaction.total_payment - transaction.total_amount
        if (Math.sign(change) === -1) {
            return `your balance is insufficient. You have to pay Rp. ${Math.abs(
          change
        )}`
        }

        return `Your change is Rp. ${change}`
    },
    addItem: (...item) => {
        transaction.items.push(...item)
    },
}

transaction.total_payment = 10000
transaction.invoice_no = "INV-001"
transaction.order_no = "ORD-001"
transaction.addItem({
    name: "Nasi Goreng",
    price: 10000,
    quantity: 2,
}, {
    name: "Es Teh",
    price: 5000,
    quantity: 1,
}, {
    name: "Air Mineral",
    price: 4000,
    quantity: 1,
})

transaction.total_amount = transaction.items.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
)

// console.log(transaction.getInvoice())
// console.log("\n" + "My Money Rp." + transaction.total_payment)
// console.log("\n" + "My bill Rp." + transaction.total_amount)
// console.log("\n" + transaction.getChange())

// nomer 2 class
class Transaction {
    constructor(invoice_no, order_no, items, total_payment) {
        this.invoice_no = invoice_no
        this.order_no = order_no
        this.items = items
        this.total_payment = total_payment // total yang customer bayarkan
        this.total_amount = this.items.reduce(
                (acc, curr) => acc + curr.price * curr.quantity,
                0
            ) // total tagihan
    }

    getInvoice() {
        return `Your invoice is ${
        this.invoice_no
      }\n\nthe items are ${this.items.map((value, index, array) =>
        array.length - 1 === index ? " and " + value.name : value.name
      )}`
    }
    getChange() {
        const change = this.total_payment - this.total_amount
        if (Math.sign(change) === -1) {
            return `your balance is insufficient. You have to pay Rp. ${Math.abs(
          change
        )}`
        }

        return `Your change is Rp. ${change}`
    }
    addItem(...item) {
        this.items.push(...item)
    }
}

const OrderanPertama = new Transaction(
    "INV-001",
    "ORD-001", [
        { name: "Nasi Goreng", price: 10000, quantity: 2 },
        { name: "Es Teh", price: 5000, quantity: 1 },
        { name: "Air Mineral", price: 4000, quantity: 1 },
    ],
    100000
)

OrderanPertama.addItem({ name: "Ayam Geprek", price: 15000, quantity: 1 })

console.log(OrderanPertama.getInvoice())
console.log(OrderanPertama.getChange())