// нажмите кнопку run чтобы запустить тесты
// попробуйте изменять код функции / тестов, запуская проверки заново
import { strict as assert } from 'node:assert';
import { capitalize } from '../src/capitalize.js';

assert.strictEqual(capitalize('hello'), 'Hello');

assert.strictEqual(capitalize(''), '');