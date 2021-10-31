import * as dotenv from "dotenv";
dotenv.config({ path: ".env"});

export interface IConfig {
    mongoUri: string;
    nodeEnv: string
    port: number;
};

const config: IConfig = {
    mongoUri: process.env.MONGO_URI || "mongodb://localhost:27017/calorie-calculator-svc",
    nodeEnv: process.env.NODE_ENV || "development",
    port: Number(process.env.PORT) || 8000,
};

export default config;
