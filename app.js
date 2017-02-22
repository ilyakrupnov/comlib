import { writeFile } from 'fs-promise';

async function createFile(name) {
    try {
        console.log('creation...');
        await writeFile(`./${name}`, 'content');
        console.log('create!');
    } catch (e) {
        console.error(e);
    }
}

createFile('file.txt');