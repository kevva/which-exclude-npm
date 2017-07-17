# which-exclude-npm [![Build Status](https://travis-ci.org/kevva/which-exclude-npm.svg?branch=master)](https://travis-ci.org/kevva/which-exclude-npm)

> Find non npm installed binaries in `PATH`


## Install

```
$ npm install which-exclude-npm
```


## Usage

```js
const whichExcludeNpm = require('which-exclude-npm');

whichExcludeNpm('bash').then(res => {
	console.log(res);
	//=> '/usr/local/bin/bash'
});

whichExcludeNpm('np').catch(err => {
	console.log(err.message);
	//=> 'Found global binary installed by npm'
});
```


## API

### whichExcludeNpm(name)

Returns a `Promise` with the path to the binary. Rejects if a global binary can't be found or if the binary was installed with `npm`.

#### name

Type: `string`

Binary name.


## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
