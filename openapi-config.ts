import type { ConfigFile } from '@rtk-query/codegen-openapi';

const config: ConfigFile = {
  schemaFile: 'http://127.0.0.1:8000/openapi.json',
  apiFile: './src/store/api/index.ts',
  apiImport: 'injectedRtkApi',
  outputFile: './src/store/api.ts',
  exportName: 'api',
  hooks: true,
}

export default config