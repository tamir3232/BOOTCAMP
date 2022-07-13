require("dotenv").config();
const fs = require("fs");
const express = require("express");
const { json } = require("express");
const app = express();
const port = process.env.PORT || 5000;
app.get("/HELLO", (req, res, next) => {
    return res.status(200).json({
        message: "hallo",
    });
});
app.listen(port, () => {
    console.log(`server running on port ${port}`);
});
const path = "./data/user.json";
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const userAsString = fs.readFileSync(path);
const users = JSON.parse(userAsString);
//get data
app.get("/users", (req, res, next) => {
    //logika:
    //membuat variabel untuk nampung data read file
    //parse data string jadi json
    //dicek dahulu ada atau tidak
    //jika ada maka return data
    //tjika tidak ada return status code 404
    //retunr variabel
    for (var i = 0, j = 1; i < users.length; i++) {
        users[i].id = j;
        j++;
    }
    if (users && users.length > 0) {
        return res.status(200).json({
            data: users,
        });
    } else {
        return res.status(404).json({
            message: "user tidak di temukan",
        });
    }
});

//create data

app.post("/users", (req, res, next) => {
    // read file user.json
    //tambah data baru ke array of user
    //konversi data array/object ke string
    //di tulis ulang data baru ke file user.json

    const newdata = {
        id: users.length + 1,
        full_name: req.body.full_name,
        address: req.body.address,
        age: req.body.age,
    };

    users.push(newdata);
    fs.writeFileSync(path, JSON.stringify(users));
    return res.status(201).json({
        message: "User created",
        data: newdata,
    });
});

// update data
app.patch("/users/:id", (req, res, next) => {
    //nyari data dengan id tertentu ada atau engga
    // kalau enggak ada respon data no found
    // kalau ada kita update data dari reques
    //save ulang data ke users.json
    const id = parseInt(req.params.id);

    const status = users.find((el) => el.id === id);
    if (!status) {
        return res.status(404).json({
            message: "user tidak di temukan",
        });
    }

    for (var i = 0; i < users.length; i++) {
        if (users[i].id === id) {
            users[i].full_name = req.body.full_name;
            users[i].address = req.body.address;
            users[i].age = req.body.age;
        }
    }

    fs.writeFileSync(path, JSON.stringify(users));
    return res.status(201).json({
        message: "User Update",
    });
});

//delete data
app.delete("/users/:id", (req, res, next) => {
    //nyari data dengan id tertentu ada atau engga
    // kalau enggak ada respon data no found
    // kalau ada baru di delete

    const id = parseInt(req.params.id);

    const status = users.find((el) => el.id === id);
    if (!status) {
        return res.status(404).json({
            message: "user tidak di temukan",
        });
    }

    for (var i = 0; i < users.length; i++) {
        if (users[i].id === id) {
            users.splice(i, 1);
        }
    }
    for (var i = 0, j = 1; i < users.length; i++) {
        users[i].id = j;
        j++;
    }

    fs.writeFileSync(path, JSON.stringify(users));
    return res.status(201).json({
        message: "User DELETED",
    });
});