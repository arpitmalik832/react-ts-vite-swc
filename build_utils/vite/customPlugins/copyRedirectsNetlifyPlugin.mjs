import { join } from 'path';
import { existsSync, copyFileSync } from 'fs';

import { outputPath, projectRootPath } from '../../config/commonPaths.mjs';

function copyRedirectsPlugin() {
  return {
    name: 'copy-redirects',
    writeBundle: {
      sequential: true,
      order: 'post',
      handler() {
        const source = join(projectRootPath, 'public', 'netlify', '_redirects');
        const destination = join(outputPath, '_redirects');
        if (existsSync(source)) {
          copyFileSync(source, destination);
        }
      },
    },
  };
}

export default copyRedirectsPlugin;
