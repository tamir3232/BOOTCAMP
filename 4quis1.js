//nomor1.1
const main = () => {

    const user = {
        full_name: "udin",
        age: 20,
        hobbies: ["Playing game", "read Book"],
        full_address: "jl merpati ",

        getName: function() {
            return `Hi my name is ${this.full_name} `
        },
        getAddress: function() {
            return `${this.full_address}`
        },
        getHobbies: function() {
            return `my hobies are ${this.hobbies.map(value=>{
                return value
            })}`
        },

        getBio: function() {
            return `Hi, my name is ${this.full_name}, I live on ${this.full_address}. And my hobies are ${this.hobbies[0]} and ${this.hobbies[1]} `
        },

        setName: function(name) {
            full_name = name
            return `successfully changed the name to ${full_name}`
        }
    }

    console.log(user.getName());
    console.log(user.getAddress());
    console.log(user.getHobbies());
    console.log(user.getBio());
    console.log(user.setName("yusuf"));

}

main();
// nomor 1.2
function classs() {
    class user {
        constructor(name, age, full_address) {
            this.full_name = name
            this.age = age
            this.hobbies = []
            this.full_address = full_address
        }

        addHobbie(hobi) {
            this.hobbies.push(hobi)
        }
        getName() {
            return `Hi my name is ${this.full_name} `
        }
        getAddress() {
            return `${this.full_address}`
        }
        getHobbies() {
            return `my hobies are ${this.hobbies.map(value=>{
                return value
            })}`
        }

        getBio() {
            return `Hi, my name is ${this.full_name}, I live on ${this.full_address}. And my hobies are ${this.hobbies[0]} and ${this.hobbies[1]} `
        }

        setName(name) {
            this.full_name = name
            return `successfully changed the name to ${this.full_name}`
        }

    }

    const udin = new user("udin", 20, "jl merpati")
    udin.addHobbie("makan")
    udin.addHobbie("game")
    console.log(udin.getName());
    console.log(udin.getAddress());
    console.log(udin.getHobbies());
    console.log(udin.getBio());
    console.log(udin.setName("yusuf"));
}

classs();