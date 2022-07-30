class Board {
    constructor(){
        this.rows = 6;
        this.columns = 7;
        this.spaces = this.createSpaces();
    }

 /** 
 * Generates 2D array of spaces. 
 * @return  {Array}     An array of space objects
 */

    createSpaces(){
        const spaces = [];

        /*pulls the default 7 columns, loops through 1*/
        for (let x = 0; x < this.columns; x++){
            const column = [];
            
            /*pulls the default 6 rows in the column and adds a Space*/
            for (let y = 0; y < this.rows; y++){
                const space = new Space(x, y);
                column.push(space); // 6 rows are complete and pushes into column array
            }
            spaces.push(column); //1 column w/ 6 rows of space is complete and pushes into spaces array
        }   

        return spaces; 

}