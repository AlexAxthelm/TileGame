// Generated by Copilot
export interface GridConfig {
    readonly minWidth: number;
    readonly maxWidth: number;
    readonly minHeight: number;
    readonly maxHeight: number;
}

// This is used only until the async config is loaded
export const defaultGridConfig: GridConfig = {
    minWidth: 2,
    maxWidth: 64,
    minHeight: 2,
    maxHeight: 64
};