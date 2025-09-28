use ("CrudDb")
// console.log(db)
db.createCollection("courses") 



// ==================create
db.courses.insertOne({
    name: "kushika",
    age:56,
    projects:5,
    email:"K89@gmail.com"
})
db.courses.insertMany([
    {
        name: "Kushika",
        age: 56,
        projects: 5,
        email: "k89@gmail.com"
    },
    {
        name: "Rahul",
        age: 32,
        projects: 3,
        email: "rahul23@example.com"
    },
    {
        name: "Priya",
        age: 28,
        projects: 4,
        email: "priya89@example.com"
    },
    {
        name: "Amit",
        age: 40,
        projects: 7,
        email: "amit_work@example.com"
    },
    {
        name: "Neha",
        age: 35,
        projects: 2,
        email: "neha2025@example.com"
    },
    {
        name: "Vikram",
        age: 45,
        projects: 6,
        email: "vikram_dev@example.com"
    },
    {
        name: "Sneha",
        age: 30,
        projects: 3,
        email: "sneha90@example.com"
    },
    {
        name: "Arjun",
        age: 27,
        projects: 1,
        email: "arjun_mail@example.com"
    },
    {
        name: "Ritika",
        age: 38,
        projects: 5,
        email: "ritika.work@example.com"
    },
    {
        name: "Manish",
        age: 50,
        projects: 4,
        email: "manish_pro@example.com"
    }
]);
// let a = db.courses.find({projects:5})
// console.log(a.toArray())

//=================================================================update

// db.courses.updateMany({projects:5},{$set:{projects:100}})

//==============================delete


// db.courses.deleteMany({projects:100})

// db.courses.deleteMany({projects:{$ne:3}})


//===============read by filter

db.courses.find({projects:{$gte:3}})
db.courses.find({})