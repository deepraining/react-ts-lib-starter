import * as React from 'react';

import { storiesOf } from '@storybook/react';

import '../src/styles/index.less';
import { Hello } from '../src';

storiesOf('Hello', module)
  .add('Hello JavaScript', () => <Hello name="JavaScript" />)
  .add('Hello TypeScript', () => <Hello name="TypeScript" />);
