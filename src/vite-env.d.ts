/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_DATOCMS_API_TOKEN: string;
  readonly VITE_ENVIRONMENT: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
