class Token {
    /* Properties:
        - color
        - assign Player ID to token "owner"
        - if token was used 
        -tokens need id and we need to identify each token for html and css
    */

    constructor (index, owner){
        this.owner = owner;
        this.id = `token - ${index} - ${owner.id}`; 
        this.dropped = false;
    }
}