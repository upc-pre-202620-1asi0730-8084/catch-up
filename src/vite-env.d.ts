/**
 * Custom type definitions for the Vite environment variables.
 *
 * @remarks
 * This allows for better type checking and autocompletion when using the environment variables in the code.
 */

/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_NEWS_API_KEY: string;
  readonly VITE_NEWS_API_URL: string;
  readonly VITE_LOGO_API_URL: string;
  readonly VITE_LOGO_PUBLISHABLE_API_KEY: string;
  readonly VITE_SOURCES_ENDPOINT_PATH: string;
  readonly VITE_TOP_HEADLINES_ENDPOINT_PATH: string;
  readonly VITE_PRIME_UI_LICENSE_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}


