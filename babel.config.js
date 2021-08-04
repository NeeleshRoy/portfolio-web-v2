module.exports = {
    presets: ["@babel/preset-react"],
    plugins: ["@babel/plugin-proposal-object-rest-spread"],
    env: {
        client: {
            presets: [
                [
                    "@babel/preset-env",
                    {
                        targets: "> 0.25%, not dead"
                    }
                ]
            ]
        }
    }
}