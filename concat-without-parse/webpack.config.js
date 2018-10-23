const path = require("path");

module.exports = {
    entry: {
        main: "./src/index.js",
        vendor: [
            "./src/bar.js",
            "./src/jweixin-1.4.0.js"
        ]
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js",
    },
    module: {
        noParse: /jweixin|bar/
    }
}