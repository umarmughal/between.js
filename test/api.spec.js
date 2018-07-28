import './polyfill';
import test from 'ava';
import once from 'once';
import Between from '../src/between';

test.cb('API', t => {
  t.plan(3);

  // TODO: write tests for .duration & extend for value (is correct)
  new Between(1, 10)
    .time(1000)
    .on('update', once(v => {
      t.truthy(v, 'value is passed & "update" was called');
    }))
    .on('complete', (v, {localTime}) => {
      t.is(v, 10);
      t.true(localTime >= 1000, 'localTime is correct');
      t.end();
    });
});
