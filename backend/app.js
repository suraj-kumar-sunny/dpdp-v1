import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import bodyParser from 'body-parser'
// import routes
import companyRoutes from './routes/company.routes.js';
import assetRouter from './routes/asset.routes.js';
import coverageRouter from './routes/coverage.routes.js';
import scopedRouter from './routes/scoped.routes.js';

const app = express();

app.use((cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
})))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieParser())




// routes declaration
app.use("/api/v1/companies", companyRoutes)
app.use("/api/v1/assets", assetRouter)
app.use("/api/v1/scoped", scopedRouter)
app.use("/api/v1/coverage", coverageRouter)


export { app }