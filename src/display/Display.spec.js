import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';

import Display from './Display';

// Test away!
test('Display renders correctly', () => {
    expect(render(<Display />)).toMatchSnapshot();
});

// dislpays if gate is open/closed and if it is locked/unlocked
test('displays if gate is open/unlocked', () => {
    const { getByText } = render(
        <Display
            closed={false}
            locked={false}
        />)
    expect(getByText('Open'));
    expect(getByText('Unlocked'));
});

test('displays if gate is closed/unlocked', () => {
    const { getByText } = render(
        <Display
            closed={true}
            locked={false}
        />)
    expect(getByText('Closed'));
    expect(getByText('Unlocked'));
});

test('displays if gate is closed/locked', () => {
    const { getByText } = render(
        <Display
            closed={true}
            locked={true}
        />)
    expect(getByText('Closed'));
    expect(getByText('Locked'));
});



//           === Might be covered by the way its written above by testing 2 conditions at the same time ===
// displays 'Closed' if the closed prop is true and 'Open' if otherwise
test('displays "Closed" if true', () => {
    const { getByText } = render(
        <Display
            closed={true}
        />)
    expect(getByText(/closed/i));
});

test('displays "Open" if true', () => {
    const { getByText } = render(
        <Display
            closed={false}
        />)
    expect(getByText(/open/i));
});

// displays 'Locked' if the locked prop is true and 'Unlocked' if otherwise
test('displays "locked" if true', () => {
    const { getByText } = render(
        <Display
            locked={true}
        />)
    expect(getByText(/locked/i));
});

test('displays "unlocked" if false', () => {
    const { getByText } = render(
        <Display
            locked={false}
        />)
    expect(getByText(/unlocked/i));
});
//          === Might be covered by the way its written above by testing 2 conditions at the same time ===



// when locked or closed use the red-led class
test('toggle red-led', () => {
    const container = render(
        <Display
            locked={true}
        />)
    container.getByTestId(/red-led/i)
});

test('toggle red-led', () => {
    const container = render(
        <Display
            closed={true}
        />)
    container.getByTestId(/red-led/i)
});

// when unlocked or open use the green-led class
test('toggle green-led', () => {
    const container = render(
        <Display
            locked={false}
        />)
    container.getByTestId(/green-led/i)
});

test('toggle green-led', () => {
    const container = render(
        <Display
            closed={false}
        />)
    container.getByTestId(/green-led/i)
});