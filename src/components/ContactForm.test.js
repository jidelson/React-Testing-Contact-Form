import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ContactForm from './ContactForm';

test("renders Form without crashing", () => {
    render(<ContactForm />);
  });


  // this is not passing
 test("email validation works properly",  () => {
    render (<ContactForm />)
    const emailInput = screen.getByLabelText(/email/i);
    fireEvent.change(emailInput, {target: {value: 'joeidelson@gmail.com'}})
    const newEmail = screen.getByText(/joeidelson@gmail.com/i);
    expect(newEmail).toBeInTheDocument();
})

test("form adds new user", () => {

  render(<ContactForm />);

  const fnInput = screen.getByLabelText(/First Name*/i);
  const lnInput = screen.getByLabelText(/Last Name*/i);
  const emailInput = screen.getByLabelText(/Email*/i);
  
  fireEvent.change(fnInput, { target: { value: 'Joe'}});
  fireEvent.change(lnInput, { target: { value: 'Idelson'}});
  fireEvent.change(emailInput, { target: { value: 'joeidelson@gmail.com'}});

  const submitButton = screen.getByTestId(/submit/i);

  fireEvent.click(submitButton);

  const newUser = screen.findByText(/Joe/i);
})