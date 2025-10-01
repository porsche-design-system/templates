import { copyFileSync, existsSync, readdir, stat } from 'node:fs';
import { basename } from 'node:path';

const walk = (dir, done): void => {
  readdir(dir, (error, list) => {
    if (error) {
      return done(error);
    }

    let i = 0;

    (function next() {
      let file = list[i++];

      if (!file) {
        return done(null);
      }

      file = `${dir}/${file}`;

      stat(file, (_error, stat) => {
        if (stat?.isDirectory()) {
          walk(file, () => {
            next();
          });
        } else {
          if (
            file.endsWith('chrome.png') ||
            file.endsWith('safari.png') ||
            file.endsWith('firefox.png') ||
            file.endsWith('ipad-pro-11.png') ||
            file.endsWith('ipad-pro-11-landscape.png') ||
            file.endsWith('iphone-15.png') ||
            file.endsWith('iphone-15-landscape.png') ||
            file.endsWith('pixel-7.png') ||
            file.endsWith('pixel-7-landscape.png')
          ) {
            copyFileSync(file, `tests/vrt/specs/__screenshots__/${basename(file)}`);
          }

          next();
        }
      });
    })();
  });
};

const dir = 'tests/vrt/test-results';
if (existsSync(dir)) {
  walk(dir, (error: Error): void => {
    if (error) {
      throw error;
    }
  });
}
