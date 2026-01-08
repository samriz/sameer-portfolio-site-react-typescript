import { render, screen } from '@testing-library/react';
import ContactForm from '../components/contactform.tsx';

//describe-block is the test suite
describe('ContactForm', () => {
  //it-block (which also can be named test instead of it) is the test case
  test('renders ContactForm component', () => {
    //Whenever you write a test for a component with React Testing library, you can render the component first and then debug what's visible for RTL's renderer in the test.
    render(<ContactForm/>);

    //use RTL's debug function to see rendered output of RTL's render function:
    screen.debug();
  });
});