import { render, screen } from '@testing-library/react'
import OrderField from 'components/orderField/OrderField'
import '@testing-library/jest-dom'

describe('Order field', () => {
    it ('Check if it is rendered correctly', () => {
        render(<OrderField onChange={(orderType:string = '') => { }} />)
        expect(screen.getByTestId('orderField')).toBeVisible;
    });
    it ('Check if it contains the correct label', () => {
        render(<OrderField onChange={(orderType:string = '') => { }} />)

        const OrderFieldInput = screen.getByText('Ordenar por')
        expect(OrderFieldInput).toBeInTheDocument()
    });
})