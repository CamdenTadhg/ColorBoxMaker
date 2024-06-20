import react from "react";
import {fireEvent, render} from '@testing-library/react'
import App from './App.js'

it('should render correctly', function() {
    render(<App />);
});

it('should match the snapshot', function(){
    const {asFragment} = render(<App/>);
    expect(asFragment()).toMatchSnapshot();
});

it('should delete the clicked box', function(){
    const {getByTestId} = render(<App/>);
    const box = getByTestId('blueviolet1821');
    expect(box).toBeInTheDocument();

    fireEvent.click(getByTestId('blueviolet1821button'));
    expect(box).not.toBeInTheDocument();
});

it('should create a new box based on form data', function(){
    const {getByPlaceholderText, getByTestId, queryByTestId} = render(<App/>);
    expect(queryByTestId('blue2410')).not.toBeInTheDocument();
    const colorInput = getByPlaceholderText('color');
    const widthInput = getByPlaceholderText('width');
    const heightInput = getByPlaceholderText('height');
    const form = getByTestId('newBoxForm');
    fireEvent.input(colorInput, {target: {value: 'blue'}});
    fireEvent.input(widthInput, {target: {value: 24}});
    fireEvent.input(heightInput, {target: {value: 10}});
    fireEvent.submit(form);
    expect(getByTestId('blue2410')).toBeInTheDocument();
});
