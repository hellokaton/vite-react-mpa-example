import {resolve} from 'path'
import {UserConfig} from "vite";
import {access, rename, rmdir, constants} from "fs";

export default function AutoMoveIndex(dirName='index') {
    let resolvedConfig: UserConfig
    return {
        name: 'auto-move-index',
        config(config) {
            resolvedConfig = config
        },
        closeBundle() {
            const root = resolvedConfig.root || process.cwd()
            const dest = (resolvedConfig.build && resolvedConfig.build.outDir) || 'dist'
            const rePath = (p: string) => resolve(root, p)

            const path = rePath(`${dest}/${dirName}/index.html`)

            access(path, constants.F_OK, (err) => {
                if (err) {
                    // skip
                } else {
                    const toPath = rePath(`${dest}/index.html`)
                    rename(path, toPath, (err) => {
                    })
                    rmdir(rePath(`${dest}/${dirName}`), (err) => {
                    });
                }
            });
        }
    }
}