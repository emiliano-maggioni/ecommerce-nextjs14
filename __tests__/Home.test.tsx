import { render, screen, within } from '@testing-library/react'
import Home from 'app/page'
import '@testing-library/jest-dom'

describe('Home', () => {
    it ('Check if search field it is rendered correctly', () => {
        render(<Home />)
        const inputNode = screen.getByPlaceholderText('Buscar')
        expect(inputNode).toBeInTheDocument()
    });
    it ('Check if itemsContainer it is rendered', () => {
        render(<Home />)
        expect(screen.getByTestId('itemsContainer')).toBeVisible;
    });
    it ('Check if itemsContainer has content', () => {
        render(<Home />)
        expect(screen.getByTestId('itemsContainer')).not.toBeEmptyDOMElement()
    });

    it ('Check if itemsContainer has items component as content', () => {
        render(<Home />)
        // eslint-disable-next-line testing-library/no-node-access
        expect(screen.getByTestId('itemsContainer').querySelector(".container")).toBeVisible;
    });


})