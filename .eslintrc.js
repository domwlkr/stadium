module.exports = {
    "extends": "airbnb",
    "installedESLint": true,
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "rules": {
        "indent": [2, 4],
        "react/jsx-indent": [2, 4],
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "react/prop-types": [2, { ignore: ['children'] }],
        "max-len": ["error", 200],
    }
};