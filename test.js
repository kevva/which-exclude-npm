import test from 'ava';
import m from './';

test('find global binary', async t => {
	t.truthy(await m('bash'));
});

test('throw if no binary is found', async t => {
	t.throws(m('non-existing'));
});

test('throw if binary installed by npm is found', async t => {
	t.throws(m('npm-which'), 'Found global binary installed by npm');
});

test('name is required', async t => {
	t.throws(m(), 'Expected a `string`, got `undefined`');
});
