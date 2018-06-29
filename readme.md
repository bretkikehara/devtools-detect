# devtools-detect

[![CircleCI](https://circleci.com/gh/bretkikehara/devtools-detect.svg?style=svg)](https://circleci.com/gh/bretkikehara/devtools-detect)

> Utility to check if DevTools.

- Chrome DevTools
- Safari DevTools
- Firefox DevTools
- Opera DevTools
- Firebug
- Firebug Lite

## How to use

```js
import { isDevtoolsOpen } from '@bretkikehara/devtools-detect';

if (isDevtoolsOpen(window)) {
	console.log('devtools is open!');
} else {
	console.log('devtools is closed!');
}
```

### isDevtoolsOpen(window: Window, threshold: number = 160)

* window - Window variable to check.
* threshold - Screen dimension inner vs outer threshold.

## Caveats

Firefox can't detect if devtools is open as an external window.


## License

MIT © [Bret K. Ikehara](https://bikehara.com)

"<project>/src/checks/window-dimensions.ts" is licensed under MIT © [Sindre Sorhus](https://sindresorhus.com). Original code available at https://github.com/sindresorhus/devtools-detect.
"<project>/src/checks/to-string.ts" Original code available at https://stackoverflow.com/questions/7798748/find-out-whether-chrome-console-is-open/30638226#30638226
