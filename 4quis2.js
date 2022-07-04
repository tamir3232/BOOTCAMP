function main() {
    const invoice = {
        invoice_no: "zxcvzxv123",
        order_no: "1", //(string)
        items: ["aqua", "indomie"], //(array of string name item)
        total_amount: 20000,
        total_payment: 40000,
        total_change: 0,

        getInvoice() {
            return ` Your invoice is ${this.invoice_no}, the items are ${this.items[0]} and ${this.items[1]} `
        },
        getChange() {
            this.total_change = this.total_payment - this.total_amount;
            if (this.total_change < 0) {
                throw new Error("uang yang di berikan tidak cukup")
            }
            return this.total_change;
        },
        addItem(namaItem) {
            this.items.push(namaItem);
            return this.items
        }


    }
    console.log(invoice.getInvoice());
    console.log(invoice.getChange());
    console.log(invoice.addItem("teh botol"))

}

main();


function classs() {
    class invoice {
        constructor(invoice_no, order_no, items, total_amount, total_payment) {
            this.invoice_no = invoice_no
            this.order_no = order_no
            this.items = items //(array of string name item)
            this.total_amount = total_amount
            this.total_payment = total_payment
            this.total_change = total_payment - total_amount
        }
        getInvoice() {
            return ` Your invoice is ${this.invoice_no}, the items are ${this.items[0]} and ${this.items[1]} `
        }
        getChange() {
            this.total_change = this.total_payment - this.total_amount;
            if (this.total_change < 0) {
                throw new Error("uang yang di berikan tidak cukup")
            }
            return this.total_change;
        }
        addItem(namaItem) {
            this.items.push(namaItem);
            return this.items
        }



    }

    const belanja = new invoice("sfadsf123", "1", ["nasi", "beras"], 10000, 20000)
    console.log(belanja.getInvoice());
    console.log(belanja.getChange());
    console.log(belanja.addItem("teh botol"))

}

classs()