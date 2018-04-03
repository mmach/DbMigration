import * as fs from 'fs';
import * as path from 'path';

export class MigrationSqlLoader {

    static loadRaw(name: string): string {

        const filePath =name;
        const sqlFile = fs.readFileSync(filePath).toString();

        return sqlFile.replace(/\r?\n|\r/g, '');
    }

    static load(name: string): string[] {

        const isBlank = (str) => {
            return (!str || /^\s*$/.test(str));
        };

        const filePath = name;
        const sqlFile = fs.readFileSync(filePath).toString();

        return sqlFile
            .split(';')
            .filter(query => !isBlank(query))
            .map(query => `${query};`);
    }

}