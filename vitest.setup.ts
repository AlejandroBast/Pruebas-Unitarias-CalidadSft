import "@testing-library/jest-dom";
import { vi } from "vitest";

// Compatibilidad mínima: algunas pruebas usan 'jest.*' (built para Jest).
// Mapear el objeto global `jest` a `vi` para que `jest.spyOn`, `jest.clearAllMocks`, etc. funcionen.
(globalThis as any).jest = vi;

// Polyfill básico de window.matchMedia para el entorno jsdom usado por Vitest.
if (typeof window !== "undefined" && !window.matchMedia) {
	(window as any).matchMedia = (query: string) => ({
		matches: false,
		media: query,
		onchange: null,
		addListener: () => {}, // deprecated
		removeListener: () => {}, // deprecated
		addEventListener: () => {},
		removeEventListener: () => {},
		dispatchEvent: () => false,
	});
}
