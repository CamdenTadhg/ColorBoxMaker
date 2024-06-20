import react from 'react';
import {render} from '@testing-library/react';
import BoxList from './BoxList.js'

it('should render correctly', function() {
    render(<BoxList/>);
});

it('should match snapshot', function(){
    const {asFragment} = render(<BoxList/>);
    expect(asFragment()).toMatchSnapshot();
});