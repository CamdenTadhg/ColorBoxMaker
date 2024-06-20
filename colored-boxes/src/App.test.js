import react from "react";
import {render} from '@testing-library/react'
import App from './App.js'

it('should render correctly', function() {
    render(<App />);
});

it('should match the snapshot', function(){
    const {asFragment} = render(<App/>);
    expect(asFragment()).toMatchSnapshot();
})
