declare module "single-filez-core/processors/compression/compression-extract.js" {
    export function extract(blob: Blob, options: { noBlobURL: boolean }): { docContent: string };
}