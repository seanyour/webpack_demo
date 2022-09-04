const {resolve} = require("path")

module.exports = {
    entry: './src/main.ts',
    output: {
        filename: "scripts/[name].js",
        path: resolve(__dirname, "../dist"),
        clean: true
    }
}