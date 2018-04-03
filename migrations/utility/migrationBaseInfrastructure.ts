import {MigrationInterface, QueryRunner} from "typeorm";
import {MigrationSqlLoader} from "./MigrationSqlLoader";
import {FindFiles} from "./findFiles";

export class MigrationBaseInfrastructure implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        
           const filePath = await FindFiles.findFiles(this.constructor.name,'up')      
           const queries = MigrationSqlLoader.loadRaw(filePath);
           await queryRunner.query(queries);
       }
   
       public async down(queryRunner: QueryRunner): Promise<any> {
           
           const filePath= await FindFiles.findFiles(this.constructor.name,'down')      
           const queries = MigrationSqlLoader.loadRaw(filePath);
           await queryRunner.query(queries);
       }
}
