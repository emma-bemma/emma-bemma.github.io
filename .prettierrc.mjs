/** @type {import("prettier").Config} */
export default {
    semi: true,
    tabWidth: 4,
    printWidth: 100,
    trailingComma: 'es5',
    arrowParens: 'always',
    singleQuote: true,
    htmlWhitespaceSensitivity: 'ignore',
    overrides: [
        { files: '*.md', options: { tabWidth: 2 } },
        { files: '**/*.astro', options: { parser: 'astro' } },
    ],
    plugins: [
        'prettier-plugin-astro',
        'prettier-plugin-tailwindcss',
        'prettier-plugin-astro-organize-imports',
    ],
};
