import { DOMPurify } from "dompurify";
import * as zipjs from "@zip.js/zip.js";
import { i18n } from "i18next";

export {};

declare global {
	var i18next: i18n
	var zip: typeof zipjs;
	var DOMPurify: DOMPurify;
}
