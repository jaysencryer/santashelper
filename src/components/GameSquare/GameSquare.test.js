/**
 * @jest-environment jsdom
 */

import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import GameSquare from './GameSquare';

describe("GameSquare tests", () => {
    it("GameSquare renders correctly", () => {
        render(<GameSquare type={0} />);
    });

    it("GameSquare renders 'blank' if 0 passed", () => {
        const { container } = render(<GameSquare type={0} />);
        expect(container.textContent).toBe("blank");
    });
    it("GameSquare renders 'ladder' if 1 passed", () => {
        const { container } = render(<GameSquare type={1} />);
        expect(container.textContent).toBe("ladder");
    });
    it("GameSquare renders 'conveyor' if 2 passed", () => {
        const { container } = render(<GameSquare type={2} />);
        expect(container.textContent).toBe("conveyor");
    });

    it("GameSquare changes from 'blank' to 'ladder' if clicked", () => {
        render(<GameSquare type={0}/>);
        const gameSquare = screen.getByRole('button', { id: 'game-square'});
        fireEvent.click(gameSquare);
        const gameSquareAfter = screen.getByRole('button', { id: 'game-square'});
        expect(gameSquareAfter.textContent).toBe("ladder");
    });
    
    it("GameSquare changes from 'conveyor' to 'blank' if clicked", () => {
        render(<GameSquare type={2}/>);
        const gameSquare = screen.getByRole('button', { id: 'game-square'});
        fireEvent.click(gameSquare);
        const gameSquareAfter = screen.getByRole('button', { id: 'game-square'});
        expect(gameSquareAfter.textContent).toBe("blank");
    });
});
