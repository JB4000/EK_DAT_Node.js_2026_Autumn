# How to enforce `.js` endings when auto-importing in VS Code

**The Problem**: During auto-import, VS Code omits `.js` from filenames which is not a problem with CommonJS but will fail with ES Module imports.

1. Open Command Palette:

MacOS:

```text
CMD + SHIFT + P
```

Windows / Linux:

```text
CTRL + SHIFT + P
```


2. Choose: `Preferences: Open User Settings (JSON)`.



3. Add the following key-value pair inside of the JSON:

```json
"js/ts.preferences.importModuleSpecifierEnding": "js"
```