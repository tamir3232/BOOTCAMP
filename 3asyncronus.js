const asyncFunction = () => {
    console.log("Hi")

    setTimeout(() => {
        console.log("Ini akan jalan 5 detik kemudian")
    }, 5000)

    console.log("Akhir")
}

// asyncFunction()

// pake callback => dengan menjalankan function setelahnya di dalam callback
const readTextCallback = () => {
    console.log("Hi")

    fs.readFile("./text.txt", (err, data) => {
        if (err) {
            console.log(err)
        } else {
            console.log(`${data}`)
        }

        fs.readFile("./text2.txt", (err, data2) => {
            if (err) {
                console.log(err)
            } else {
                console.log(`${data2}`)
            }

            fs.readFile("./text3.txt", (err, data3) => {
                if (err) {
                    console.log(err)
                } else {
                    console.log(`${data3}`)
                }

                fs.readFile("./text4.txt", (err, data4) => {
                    if (err) {
                        console.log(err)
                    } else {
                        console.log(`${data4}`)
                    }

                    fs.readFile("./text5.txt", (err, data5) => {
                        if (err) {
                            console.log(err)
                        } else {
                            console.log(`${data5}`)
                        }
                    })
                })
            })
        })
    })
}

// pake .then function, pake promise

// buat function promise untuk membaca text dalam file
const readFilePromise = (path) => {
    return new Promise((resolve, reject) => {
        console.log(path)
        fs.readFile(path, (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(`${data}`)
            }
        })
    })
}

const readTextPromise = () => {
    readFilePromise("./text.txt").then((data) => {
        console.log(data)

        readFilePromise("./text2.txt").then((data) => {
            console.log(data)

            readFilePromise("./text3.txt").then((data) => {
                console.log(data)

                readFilePromise("./text4.txt").then((data) => {
                    console.log(data)

                    readFilePromise("./text5.txt").then((data) => {
                        console.log(data)
                    }).catch((err) => {
                        console.log(err)
                    })
                }).catch((err) => {
                    console.log(err)
                })
            }).catch((err) => {
                console.log(err)
            })
        }).catch((err) => {
            console.log(err)
        })
    }).catch((err) => {
        console.log(err)
    })
}


// buat timeout

// pake asynchronous => async await
const readTextAsyncAwait = async() => {
    try {
        const data1 = await readFilePromise("./text.txt")
        const data2 = await readFilePromise("./text2.txt")
        const data3 = await readFilePromise("./text3.txt")
        const data4 = await readFilePromise("./text4.txt")
        const data5 = await readFilePromise("./text5.txt")

        console.log(data1)
        console.log(data2)
        console.log(data3)
        console.log(data4)
        console.log(data5)
    } catch (error) {
        console.log(error)
    }
}

const readTextConcurrent = async() => {
    try {
        const [data1, data2, data3, data4, data5] = await Promise.all([
            readFilePromise("./text.txt"),
            readFilePromise("./text2.txt"),
            readFilePromise("./text3.txt"),
            readFilePromise("./text4.txt"),
            readFilePromise("./text5.txt")
        ])

        console.log(data1)
        console.log(data2)
        console.log(data3)
        console.log(data4)
        console.log(data5)
    } catch (error) {
        console.log(error)
    }
}



// readTextCallback()
// readTextPromise()
// readTextAsyncAwait()
readTextConcurrent()

// 1. user     => query ke tabel user
// 2. product  => query ke tabel product
// 3. order    => query ke tabel order

// {
//     user: {
//         "name": "abc"
//     },
//     product: {
//         "name": "cde"
//     },
//     order: {
//         "date": "2022-06-20"
//     }
// }