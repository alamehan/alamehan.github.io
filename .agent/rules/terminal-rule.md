---
trigger: always_on
---

STRICT PROTOCOL: Do NOT execute any terminal commands automatically, as it causes the environment to freeze.

1. For File Exploration/Search: EXCLUSIVELY use the Editor's internal search APIs or file reading tools. Never use 'grep', 'find', or 'ls'.
2. For Execution (npm install, run dev, build, etc.): Do NOT run them. Instead, simply PROVIDE the command in a code block and ask me to run it manually. I will report the result back to you.

Focus only on editing code and generating solutions.