/** Path to a file in /public that also works when the site lives under a sub-path (GitHub Pages). */
export const asset = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
