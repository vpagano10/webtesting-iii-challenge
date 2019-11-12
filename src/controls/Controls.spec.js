import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';

import Controls from './Controls';

// Test away!
test('Controls renders correctly', () => {
    expect(render(<Controls />)).toMatchSnapshot();
});

// provide buttons to toggle the closed and locked states
test('button toggle closed', () => {
    const toggleClosedMock = jest.fn();
    const {getByText} = render(
        <Controls 
            toggleClosed={toggleClosedMock} 
        />);
    fireEvent.click(getByText(/close gate/i))
    expect(toggleClosedMock).toHaveBeenCalled();
});

test('button toggle locked', () => {
    const toggleLockedMock = jest.fn();
    const {getByText} = render(
        <Controls 
            closed={true}
            toggleLocked={toggleLockedMock} 
        />);
    fireEvent.click(getByText(/lock gate/i))
    expect(toggleLockedMock).toHaveBeenCalled();
});


// buttons' text changes to reflect the state the door will be in if clicked
// test('closed button toggles closed states', () => {
//     const toggleClosedMock = jest.fn();
//     const { getByText } = render(
//         <Controls 
//             toggleClosed={toggleClosedMock} 
//             locked={false} 
//         />)
//         fireEvent.click(getByText(/close gate/i));
//         expect(toggleClosedMock).toHaveBeenCalled();
// });

// test('closed button toggles closed state', async () => {
//     const { getByText, findByText } = render(
//         <Controls 
//             closed={true} 
//         />)
//         fireEvent.click(await findByText(/open gate/i));
// });

// the closed toggle button is disabled if the gate is locked
test('closed disabled it locked', () => {
    const {getByText} = render(
        <Controls />)
    expect(getByText(/lock gate/i).disabled).toBe(true);
})

// the locked toggle button is disabled if the gate is open
test('locked button disables if open', () => {
    const {getByText} = render(
        <Controls
            locked={true}
            closed={true}
    />)
    expect(getByText(/open gate/i)).toBe(true);
})