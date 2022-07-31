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

    /**
     * Draws new HTML token
     */
    drawHTMLToken(){
    
        const token = document.createElement('div');
        document.getElementById('game-board-underlay').appendChild(token);
        token.setAttribute('id',this.id);
        token.setAttribute('class','token');
        token.style.backgroundColor = this.owner.color;
    }

}