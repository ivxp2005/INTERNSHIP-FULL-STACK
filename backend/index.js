import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import user from './dbmodels/user.js'
import connectDB from './dbconfig/dbconnection.js'

connectDB()
console.log("Database connected successfully")
console.log(process.env.MONGODB_URL)
const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => { 
  console.log(req)
  res.send('Hello World')
})
 
app.get('/about', (req, res) => {
  const person = {
    name: "John Doe",
    age: 30,
    place: "New York",
    email: "john.doe@example.com"
  };
  res.send({ data: person });
})

app.post('/submit', async (req, res) => {
  try {
    console.log(req.body, "body");
    const { name, email } = req.body;
    await user.create({ name, email });
    console.log("Form submitted");
    res.json({ status: true });
  } catch (error) {
    console.error("DB Error:", error);
    res.status(500).json({ status: false, error: "Database error" });
  }
});    
 

console.log("Hii")

app.listen(3001, () => {
  console.log('Server is running on http://localhost:3001')
})