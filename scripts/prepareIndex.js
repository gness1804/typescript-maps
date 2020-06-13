require('dotenv').config();

const { readFile, writeFile } = require('fs').promises;
const path = require('path');

const sourceFile = path.join(__dirname, '../index.src.html');
const destFile = path.join(__dirname, '../index.html');

const getContents = async () => await readFile(sourceFile, 'utf-8')

const prepareIndex = async () => {
  try {
    const contents = await getContents();

    await writeFile(destFile, contents.replace(/process.env.GOOGLE_MAPS_KEY/, process.env.GOOGLE_MAPS_KEY));
    console.info('Successfully created index.html file.')
  } catch (err) {
    console.error(`Error writing index.html file: ${err}`);
  }
}

prepareIndex();
