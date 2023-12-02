import { DataSource } from "typeorm";
import { User } from "./entity/User";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "",
  database: "omp",
  synchronize: false,
  logging: false,
  entities: [User],
  subscribers: [],
  migrations: [],
});
