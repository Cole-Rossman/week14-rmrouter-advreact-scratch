import { render, screen, waitForElementToBeRemoved } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import App from '../../App';


describe('<CharacterDetail />', () => {
  it('renders details on selected character', async () => {
    render(
        <MemoryRouter
        initialEntries={["/character/1"]}
        initialIndex={0}
        >
          <App /> 
        </MemoryRouter> 
    )

   await waitForElementToBeRemoved(screen.getByText(/loading/i));
   
    const charImage = await screen.findByAltText('Image of Rick Sanchez');
    expect(charImage).toBeInTheDocument();
    
    const charName = await screen.findByText(/rick sanchez/i);
    expect(charName).toBeInTheDocument();

    const charSpecies = await screen.findByText(/species/i);
    expect(charSpecies).toBeInTheDocument();
    
    const charStatus = await screen.findByText(/status/i);
    expect(charStatus).toBeInTheDocument();

    const returnLink = await screen.findByText(/back to character list/i);
    userEvent.click(returnLink);
  });
}); 