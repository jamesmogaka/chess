import React from 'react';
import './chessboard.css';
//
//The labels of the files
type file = 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h';
//
//The labels of the ranks
type rank = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8';
//
//The cell labels
//
//Horizontal axis
const horizontal_axis: Array<file> = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
//
//Vertical axis
const vertical_axis: Array<rank> = ['8', '7', '6', '5', '4', '3', '2', '1'];
//
//The acctual board which is an matrix of cells
const board: Array<JSX.Element> = [];
//
//A single cell in the board
const Cell: React.FC<{ f: file; r: rank; color: 'dark' | 'light' }> = ({ f, r, color }) => {
    //Render the cell given the properties
    return (
        <span className={`cell ${color}`}>
            {f == 'a' ? r : null}
            {r == '1' ? <p className="file_label">{`${f}`}</p> : null}
        </span>
    );
};
//
//Iterate over the horizontal and vertical axis populating the board with all the cells 64
//The cell pattern is as follows:-
//8a 8b 8c 8d 8e 8f 8g 8h ... 1a 1b 1c 1d 1e 1f 1g 1h
//
//Go through all the ranks and do the following:-
vertical_axis.forEach((i, indexi) =>
    //
    //Add a cell for each file
    horizontal_axis.forEach((j, indexj) => {
        //
        //Determine the color of cell to produce
        //If the sum of indexes is even then the cell is light otherwise
        //the cell is dark
        (indexi + indexj) % 2 === 0
            ? board.push(<Cell f={j} r={i} color="light" />)
            : board.push(<Cell f={j} r={i} color="dark" />);
    })
);
//
//The function resposible for the display of the entire chess board
//Which is an array of cells
const Chessboard: React.FC = () => {
    return <div id="chessboard">{board}</div>;
};

export default Chessboard;
