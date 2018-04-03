const aa = require('express-async-await')
var express = require('express');
var app = aa(express());
var bodyParser = require('body-parser');
const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'));
let mkdirp = require('mkdirp');
let version = '1.00.1';


app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json({ limit: '50mb' }));

app.use('/', express.static(__dirname + '/js'));


app.get('/', function (req, res) {
    res.send('Hello World');
})

app.post('/migration/add', async function (req, res) {
    const { up, down, title } = req.body;

    let tableDown = down ? down.split('GO\n') : [];
    let mainPath = `./migrations/migration/${version}/${Date.now()}_${title}`
    await mkdirp(mainPath,async function (err) {
        await up.split('GO\n').map(async (item, index) => {

            let asyncFile = () => {
                return new Promise(resolve => {
                    setTimeout(() => {
                        resolve();
                    }, 100);
                });
            }
            let tmp = await asyncFile();
            let timestamp = Date.now();
            let path = `${mainPath}/${timestamp+index}-${title}_${index}-up.sql`;
            fs.writeFileAsync(path, item).then(result => {
                //console.log(result);
                path = `${mainPath}/${timestamp+index}-${title}_${index}-down.sql`;
                return fs.writeFileAsync(path, tableDown[index] ? tableDown[index] : '');
            }).then(result => {
                path = `${mainPath}/${timestamp+index}-${title}_${index}.ts`;
                let data = `import {MigrationBaseInfrastructure} from "./../../../utility/migrationBaseInfrastructure";
            export class ${title}_${index}_${timestamp+index} extends MigrationBaseInfrastructure {}`;
                return fs.writeFileAsync(path, data);
            }).then(result => {


            });
        
        })
    });



    res.send('Hello World');
})


app.listen(8080);