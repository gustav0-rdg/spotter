import { Global, Module } from "@nestjs/common";
import { MySQLProvider } from "./mysql.provider";

@Global()
@Module({
    providers: [MySQLProvider],
    exports: [MySQLProvider]
}) 
export class DatabaseModule{}