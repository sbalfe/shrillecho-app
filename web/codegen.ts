
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://api.shrillecho.app/graphql/",
  documents: "src/lib/graphql/**/*.graphql",
  generates: {
    "src/lib/gql/generated.tsx": {
      plugins: [
        'typescript', 
        'typescript-operations',
        'typescript-react-apollo'
      ]
    }
  }
};

export default config;
