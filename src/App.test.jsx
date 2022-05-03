import { render, screen, waitForElementToBeRemoved } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import App from './App'
import { MemoryRouter } from "react-router-dom";

describe('<App />', () => {
    it('renders a list of Rick and Morty Characters', async () => {
        render(
           <MemoryRouter>
               <App />
           </MemoryRouter> 
        );

        await waitForElementToBeRemoved(screen.getByText(/loading/i));

        const detailLink = await screen.findByText(/rick sanchez/i); 
        userEvent.click(detailLink);

        await screen.findByAltText('Image of Rick Sanchez');
        await screen.findByText('Species: Human'); 
        await screen.findByText('Status: Alive'); 
    });
});