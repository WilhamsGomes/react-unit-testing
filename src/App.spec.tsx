import { render, fireEvent } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import App from "./App"

// test('sum', () => {

//     const { getByText } =  render(<App />)

//     expect(getByText('Hello World')).toBeInTheDocument()
// })

describe('App Component', () => {
    it('should render list items', () => {
        const { getByText } = render(<App />)
        expect(getByText('Diego')).toBeInTheDocument()
        expect(getByText('Rodz')).toBeInTheDocument()
        expect(getByText('Mayk')).toBeInTheDocument()
    });

    it('should be able to add new item to the list', () => {
        const { getByText } = render(<App />)
        const addButton = getByText('Adicionar');
        fireEvent.click(addButton)

        expect(getByText('Novo')).toBeInTheDocument()
    });
    
    it('teste sobre digitar nome', () => {
        const { getByTestId, getByText } = render(<App />);

        const input = getByTestId('name');
        fireEvent.change(input, { target: { value: 'Wilhams' } });

        const addButton = getByText('Novo nome');
        fireEvent.click(addButton)

        expect(getByText('Wilhams')).toBeInTheDocument()
    })
});