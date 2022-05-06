import React from "react";
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

const categories = [
    { name: 'portraits', description: 'Portraits of people in my life' }
]

const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn(); 

afterEach(cleanup);

// Note that the describe function is not absolutely necessary for the test to run; it is used to organize tests into sections that are typically labeled with the element being tested.

// npm run test --updateSnapshot

describe('NAV component', () => {
    // baseline test
    it('renders', () => {
        render(<Nav
            categories={categories}
            setCurrentCategory={mockCurrentCategory}
            currentCategory={mockSetCurrentCategory}
        />);
    });
    // snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<Nav categories={categories} setCurrentCategory={mockCurrentCategory} currentCategory={mockSetCurrentCategory} />);

        // assert value comparison
        expect(asFragment()).toMatchSnapshot();
    })
});

describe('empji is visible', () => {
    it('inserts emoji into the h2', () => {
        // Arrange
        const { getByLabelText } = render(<Nav categories={categories} setCurrentCategory={mockCurrentCategory} currentCategory={mockSetCurrentCategory} />);

        // Assert
        // eslint-disable-next-line testing-library/prefer-screen-queries
        expect(getByLabelText('camera')).toHaveTextContent('📸')
    })
});

describe('links are visible', () => {
    it('inserts text into the links', () => {
        // Arrange
        const { getByTestId } = render(<Nav categories={categories} setCurrentCategory={mockCurrentCategory} currentCategory={mockSetCurrentCategory} />);

        // Assert
        // eslint-disable-next-line testing-library/prefer-screen-queries
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        // eslint-disable-next-line testing-library/prefer-screen-queries
        expect(getByTestId('about')).toHaveTextContent('About me');
    })
});