import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Header from "../components/Header";

test('renders the page header', async () => {
    render(<Header/>);
    const headerElement = screen.getByText(/contact list/i);
    expect(headerElement).toBeInTheDocument();
});