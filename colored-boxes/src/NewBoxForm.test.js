import react from 'react';
import {render} from '@testing-library/react';
import NewBoxForm from './NewBoxForm.js';

it('should render correctly', function(){
    render(<NewBoxForm/>);
});

it('should match snapshot', function() {
    const {asFragment} = render(<NewBoxForm/>);
    expect(asFragment()).toMatchSnapshot();
});

it('should create a new box based on form data', function(){

});