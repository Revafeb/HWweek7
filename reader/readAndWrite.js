import { readFile, writeFile } from "fs/promises"

export async function readAndWriteFile(pathRead, pathWrite) {
    try {
        const data = await readFile(pathRead, 'utf8')
        await writeFile(pathWrite, data, 'utf8')
        return data
    } catch (err) {
        console.log(err)
    }
}
