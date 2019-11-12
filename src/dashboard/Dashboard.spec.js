import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';

import Dashboard from './Dashboard';
import Display from '../display/Display';
import Controls from '../controls/Controls';

// Test away

// Shows controls and display
test('Dashboard renders correctly', () => {
    expect(render(<Dashboard />)).toMatchSnapshot();
})

test('Controls - locked/close gate renders to the Dashboard', () => {
    const { getByText } = render(<Controls />);
    getByText(/lock gate/i);
    getByText(/close gate/i);
})

test('Controls renders to the Dashboard', () => {
    render(<Controls />)
})

test('Display renders to the Dashboard', () => {
    render(<Display />)
})
