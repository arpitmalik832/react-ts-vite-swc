import { writeFileSync } from 'fs';

import {
  chunkManifestPath,
  storybookChunkManifestPath,
} from '../../config/commonPaths.mjs';

function generateChunkManifestPlugin() {
  return {
    name: 'generate-chunk-manifest',
    writeBundle(options, bundle) {
      const manifest = {};

      Object.entries(bundle).forEach(([fileName, chunk]) => {
        if (chunk.isEntry || chunk.isDynamicEntry) {
          manifest[fileName] = chunk.imports || [];
        }
      });

      writeFileSync(
        process.env.IS_STORYBOOK === 'true'
          ? storybookChunkManifestPath
          : chunkManifestPath,
        JSON.stringify(manifest, null, 2),
      );
    },
  };
}

export default generateChunkManifestPlugin;
