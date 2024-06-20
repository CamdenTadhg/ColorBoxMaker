import react from 'react';
import {render} from '@testing-library/react';
import Box from './Box.js';

it('should render correctly', function(){
    render(<Box/>);
});

it('should match the snapshot', function() {
    const {asFragment} = render(<Box/>);
    expect(asFragment()).toMatchSnapshot;
});