import * as findFilesLib from 'find-in-files';
export class FindFiles {


    static async  findFiles(name: string,type:string): Promise<string>{

        var filePath=''
        await  findFilesLib.find(name,'.','.ts$')
        .then(function(results) {
            for (var result in results) {
                var res = results[result];
                filePath=result.replace('.ts','-'+type+'.sql');
                return;
            }
        });

        return filePath;
    }

}