'use strict';
const npmInstalled = require('npm-installed');
const pify = require('pify');
const which = require('which');

module.exports = name => {
	if (typeof name !== 'string') {
		return Promise.reject(new TypeError(`Expected a \`string\`, got \`${typeof name}\``));
	}

	const errMsg = 'Found global binary installed by `npm`';

	return pify(which)(name)
		.then(pth => npmInstalled(name)
		.then(res => {
			if (pth === res) {
				throw new Error(errMsg);
			}

			return pth;
		})
		.catch(err => {
			if (err.message.includes(errMsg)) {
				throw err;
			}

			return pth;
		}));
};
