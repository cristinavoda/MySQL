require("dotenv").config()
const express = require("express")
const cors = require("cors")
// const db = require("./config/database")

const app = express()

app.use(cors())
app.use(express.json())

//--------------------------- DATABASE OPERATIONS

//**** GET *****
// db.execute("SELECT * FROM home").then((res) => console.log("get all", res[0])).catch((err) => console.log(err, "not working"))

// db.execute("SELECT * FROM coches").then((res) => console.log("get all", res[0])).catch((err) => console.log(err, "not working"))

// db.execute("SELECT * FROM garden").then((res) => console.log("get all", res[0])).catch((err) => console.log(err, "not working"))


//**** GET BY ID *****
// db.execute("SELECT * FROM home WHERE home.id = 8").then((res) => console.log("get by id",res[0])).catch((err) => console.log(err, "not working"))



//**** POST *****
// db.execute("INSERT INTO coches (name) VALUES (?)", ["alpha romeo"])
// db.execute('INSERT INTO home (name, price, description, room) VALUES ("table", "84", "tgftgn fnvifnvk", "living room")')


//**** PUT *****
// db.execute("UPDATE home SET home.description = 'this is an ideal table for your office', home.room = 'office' WHERE home.id = 19")

//**** DELETE *****
// db.execute("DELETE FROM home WHERE home.id = 17")

//---------------------------

const port = process.env.PORT || 8800
app.listen(port, () => {
    console.log(`listening at port ${port}`)
})

// opción 1:
// const homeProducts = require("./routes/homeProducts")

// opción 2: poner el require direcatemennte sin variable
app.use("/api", require("./routes/homeProducts"))

app.get("/", (req, res) => {
    res.status(200).send("<h1>Welcome to Irene's shop</h1>")
})