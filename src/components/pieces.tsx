//
//A piece has the following properties and behaviours
//1.The proxy of the piece -visual reperesentation of the peice
//2.The position of the piece - This comprises the file(x) and the rank(y) of the piece
//N.B: when the game begins each piece has a default position the starting point
//4.An array of possible moves for each piece
//5.The color of the piece
//6.The status of the piece -  wether the piece has been captured or its still on the board
//7.A flag to indicate weather the piece has mad a move or not
//
//Define the possible color of players
type color = 'black' | 'white';
//
//Define the possible files
type file = 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h';
//
//Define the possible ranks
type rank = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8';
//
//coordinates of a piece on the board
type position = { x: file; y: rank };

abstract class piece {
    //
    //An abstract property to handle the various visual representations of the pieces
    abstract proxy: React.FC;
    //
    //The consist of two players black and white
    //This property has an impact on the proxy
    protected player: color;
    //
    //The position of the piece
    protected coordinates: position;
    //
    //A flag to indicate wether the piece is on the board or not
    //Once a piece is captured it is removed from the board
    protected captured: boolean = false;
    //
    //A flag to indicate wether a piece has made an openign move
    protected has_moved: boolean = false;
    //
    //An array of possible moves for each piece ????????????
    protected moves?: number[][];
    //
    //A piece can move and each piece will handle its movements
    //After this process the coordinates of the piece on the board gets updated to the new position
    public abstract move(x: file, y: rank): void;
    //
    //Different pieces have different capture rules
    //when a piece captures another piece it occupies the position initially occupied by the piece it captured
    public abstract capture(): void;
    //
    //Update the array of possible moves after and before completing a move
    // public abstract update_moves(piece):Array<>
    ///
    //To construct a piece we need to know the colour and the
    //position on the board to place the piece
    constructor(player: color, x: file, y: rank) {
        this.player = player;
        this.coordinates = { x, y };
    }
    //
    //
}
//
//The king
export class king extends piece {
    //
    constructor(player: color, x: file, y: rank) {
        //
        //Initialize the parent class
        super(player, x, y);
    }
    //
    //The visual representation of this class
    proxy: React.FC = () => {
        return (
            <img
                src={
                    this.player === 'black'
                        ? '../assets/images/king_b.png'
                        : '../assets/images/king_w.png'
                }
            ></img>
        );
    };
    //
    //This is responsible for handlin all the movement of a king
    //The king moves to a single cell per move to any direction provided
    //the destination cell is not check and is not occupied
    //
    public move(x: file, y: rank): void {
        throw new Error('Method not implemented.');
    }
    public capture(): void {
        throw new Error('Method not implemented.');
    }
}
