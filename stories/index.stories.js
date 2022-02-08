import { storiesOf } from '@storybook/react';
import React from 'react';
import Carousel from '../src/Carousel';
import slides from '../src/example/slides';

storiesOf('Carousel', module).add('default', () => <Carousel slides={slides} />);
