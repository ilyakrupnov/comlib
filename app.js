import { readdir , createReadStream, createWriteStream } from 'fs-promise';

async function createFile(name) {
    try {
        const components = await readdir('./example/com');
        const importStrings = components.map(Component => `import ${Component} from './com/${Component}'`);
        createReadStream('template.html').pipe(createWriteStream('./example/index.html'));
        const readable = createReadStream('template.js');
        readable.setEncoding('utf8');
        readable.on('data', chunk => {
            
        });
    } catch (e) {
        console.error(e);
    }
}

createFile();