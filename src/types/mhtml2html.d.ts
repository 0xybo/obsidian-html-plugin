declare module "@luminati-io/mhtml2html" {
  export function parse( mhtml: string, options?: {htmlOnly: boolean, parseDOM: () => Window} ): Window;
  export function convert( mhtml: string, options?: {convertIframes: boolean, parseDOM: () => Window} ): Window;
}