import React from "react";
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

afterEach(cleanup);

// Note that the describe function is not absolutely necessary for the test to run; it is used to organize tests into sections that are typically labeled with the element being tested.

describe('NAV component', () => {
    // baseline test
    it('renders', () => {
        render(<Nav/>);
    });
    // snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<Nav/>);

        // assert value comparison
        expect(asFragment()).toMatchSnapshot();
    })
});

describe('empji is visible', () => {
    it('inserts emoji into the h2', () => {
        // Arrange
        const { getByLabelText } = render(<Nav/>);

        // Assert
        // eslint-disable-next-line testing-library/prefer-screen-queries
        expect(getByLabelText('camera')).toHaveTextContent('📸')
    })
});

describe('links are visible', () => {
    it('inserts text into the links', () => {
        // Arrange
        const { getByTestId } = render(<Nav/>);

        // Assert
        // eslint-disable-next-line testing-library/prefer-screen-queries
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        // eslint-disable-next-line testing-library/prefer-screen-queries
        expect(getByTestId('about')).toHaveTextContent('About me');
    })
});