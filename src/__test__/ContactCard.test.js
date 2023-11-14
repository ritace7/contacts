import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import ContactCard from "../components/ContactCard";

//There is a name on the card
test('A name is displayed on each contact', async () => {
    render(<ContactCard name="John Smith"/>);
    const nameElement = screen.getByText(/john smith/i);
    expect(nameElement).toBeInTheDocument();
});

//Every card has a list which has the rest of the details
test('There is a list with each card', () => {
    render(<ContactCard 
        id="1"
        name="test"
        number="123456789"
        email="test@noreply.com"
        address="123 Street, Town"
        company="Test company"
      />);
    const list = screen.getByRole("list");
    expect(list).toBeInTheDocument();
});

//The contact has a drop down button
test('A drop down is present', () => {
    render(<ContactCard 
        id="1"
        name="test"
        number="123456789"
        email="test@noreply.com"
        address="123 Street, Town"
        company="Test company"
      />);
    const accordion = screen.getByTestId("accordion");
    expect(accordion).toContainHTML("button");
});

//the list is not initially visible
test('list is not visible', () => {
  render(<ContactCard 
      id="1"
      name="test"
      number="123456789"
      email="test@noreply.com"
      address="123 Street, Town"
      company="Test company"
    />);
  const list = screen.getByRole("button",{expanded:false});
  expect(list).toBeInTheDocument();
});

//When you click the drop down, the list becomes visible
test('drop down button works', () => {
  render(<ContactCard 
      id="1"
      name="test"
      number="123456789"
      email="test@noreply.com"
      address="123 Street, Town"
      company="Test company"
    />);
  const buttonElement = screen.getByRole("button");
  fireEvent.click(buttonElement);
  const list = screen.getByRole("button",{expanded:true});
  expect(list).toBeInTheDocument();
});
