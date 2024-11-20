const express = require("express");
const { PORT, CLIENT_URL } = require("./config/serverConfig");
const connectDB  = require("./config/dbConfig");
const cors = require("cors");

const app = express();

cors({
    origin:CLIENT_URL,
    methods: ["GET","POST","DELETE","PUT"],
    allowedHeaders:['Content-Type','Authorization'],
});

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB();
});
