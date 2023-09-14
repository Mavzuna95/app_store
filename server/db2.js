import dotenv from "dotenv"
import express from "express"
import sequelize from "./db.js";
const PORT = process.env.PORT || 3030;
import cors from "cors"
import fileUpload from "express-fileupload";
import router from "./routs/index.js"
import path from "path"
dotenv.config();

const app = express();
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use("/api", router)
//Обработка ошибок
app.use(errorHandler)

// app.get('/api/user/register', (req, res) => {
//     res.status(200).json({message: "WORKING!!!"})
// })

const start = async () => {
  try {
    await sequelize.authenticate()
    await sequelize.sync()
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
};
start()
    