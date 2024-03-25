/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_SENDGRID_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
