import app from "./app.js"

app.listen(process.env.PORT || 5000,()=>{
console.log(`Server is running on Port ${process.env.PORT}`);
});