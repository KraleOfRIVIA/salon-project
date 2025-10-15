
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:1337/graphql",
  documents: ["src/graphql/*.gql"],
  ignoreNoDocuments: false,
  generates: {
    './src/graphql/': {
      preset: 'client',
      config: {
        documentMode: 'string'
      },
      plugins: ['typescript', 'typescript-operations', 'typescript-react-query']
    },
    './schema.graphql': {
      plugins: ['schema-ast'],
      config: {
        includeDirectives: true,
        maybeValue: 'T',
        avoidOptionals: true,
        immutableTypes: true
      }
    }
  }
}
export default config