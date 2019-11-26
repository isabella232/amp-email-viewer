import test from 'ava';
import { JSDOM } from 'jsdom';

import { createIframe } from '../../framecontainer/createIframe';

test('createIframe() creates iframe', t => {
  const { document } = new JSDOM('').window;
  const div = document.createElement('div');
  document.body.appendChild(div);
  const iframe = createIframe(div, {
    src: 'about:blank',
    width: '1',
    height: '1',
  });
  t.assert(iframe === div.querySelector('iframe'));
  t.assert(iframe.src, 'about:blank');
});