module.exports = {
    types: [
        {
            value: "feat",
            name: "✨ feat:\tAdding a new feature",
        },
        {
            value: "fix",
            name: "🐛 fix:\tFixing a bug",
        },
        {
            value: "docs",
            name: "📝 docs:\tAdd or update documentation",
        },
        {
            value: "refactor",
            name: "♻️  refactor:\tCode change that neither fixes a bug nor adds a feature",
        },
        {
            value: "perf",
            name: "⚡️ perf:\tCode change that improves performance",
        },
        {
            value: "test",
            name: "✅ test:\tAdding tests cases",
        },
        {
            value: "chore",
            name: "🚚 chore:\tChanges to the build process, pipeline or auxiliary tools\n\t\tand libraries such as documentation generation",
        }
    ],

    // scopes: [{ name: "formbuilder" }, { name: "docs" }, { name: "misc" }],

    // allowCustomScopes: true,
    allowBreakingChanges: ["feat", "fix", "perf", "refactor"],

    // askForBreakingChangeFirst: true,
    // skip any questions you want
    // skipQuestions: ['body'],
    // subjectLimit: 100,
};
