> From 'A Talk of ❄️ & 🔥'

# Debugger

Node has a built in debugger, which can be used in the terminal.

[GoT.js](GoT.js) is producing some weird effects... Use the debugger to work out why!

```
node inspect GoT.js
```

## Debugger functions
| command | description |
| ------- | ----------- |
| `c` | continue to next debugger |
| `n` | next line |
| `s` | step into a function |
| `o` | step out of the current function |
| `sb('GoT.js', 8)` | set a breakpoint on a line in a file |
| `bt` | show the stack trace |
| `list(10)` | list the 10 lines around the current line of execution |
| `watch('h1ChanceOfWinning')` | display the value of a variable for each line executed |
| `unwatch('h1ChanceOfWinning')` | stop watching a variable |
| `exec house1.armySize = 50000` | execute some code in the current scope |
| `r` | restart the execution of the file |