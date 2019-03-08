import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import '../src/styles/index.less';
import { Hello } from '../src';

storiesOf('Hello', module)
  .add(
    'Hello JavaScript',
    withInfo({ inline: true })(() => <Hello name="JavaScript" />),
  )
  .add(
    'Hello TypeScript',
    withInfo({ inline: true })(() => <Hello name="TypeScript" />),
  );
