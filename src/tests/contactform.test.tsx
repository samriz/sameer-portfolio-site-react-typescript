import { render, screen } from '@testing-library/react';
import ContactForm from '../components/contactform.tsx';

//describe-block is the test suite
describe('ContactForm', () => {
  //it-block (which also can be named test instead of it) is the test case
  it('renders ContactForm component', () => {
    render(<ContactForm/>);

    //use RTL's debug function to see rendered output of RTL's render function:
    screen.debug();
  });
});
