module.exports = {
    mode: 'jit',
    content: ["**/*.{hbs,html}"],
    purge: ['**/*.{hbs,html}'],
    darkMode: 'class',
    prefix: 'tw-', // custom prefix for classes
    theme: {
        extend: {},
    },
    plugins: [],
}
