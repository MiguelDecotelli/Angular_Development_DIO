class Cardnews extends HTMLElement {
    constructor(){
        super();

        const shadow = this.attachShadow({mode: 'open'});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build(){
        const rootComponent = document.createElement('div');
        rootComponent.setAttribute('class', 'card');

        const cardLeft = document.createElement('div');
        cardLeft.setAttribute('class', 'card_left');

        const author = document.createElement('span');
        author.textContent = 'By ' + (this.getAttribute('author') || 'Anonymous');

        const linkTitle = document.createElement('a');
        linkTitle.textContent = this.getAttribute('title')
        linkTitle.href = this.getAttribute('url-link'); 

        const newsContent = document.createElement('p');
        newsContent.textContent = this.getAttribute('content')

        cardLeft.appendChild(author);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        const cardRight = document.createElement('div');
        cardRight.setAttribute('class', 'card_right');

        const newsImage = document.createElement('img');
        // newsImage.src = 'assets/hulk.png'
        newsImage.src = this.getAttribute('photo') || ('assets/default_photo.png')
        newsImage.alt = 'Hulk'
        cardRight.appendChild(newsImage);

        rootComponent.appendChild(cardLeft)
        rootComponent.appendChild(cardRight)

        return rootComponent;
    }

    styles(){
        const style = document.createElement('style');
        style.textContent = `
        .card {
            margin-top: 20px;
            width: 55%;
            /* border: 1px solid gray; */
            box-shadow: 13px 16px 5px 0px rgba(0, 0, 0, 0.75);
            -webkit-box-shadow: 13px 16px 5px 0px rgba(0, 0, 0, 0.75);
            -moz-box-shadow: 13px 16px 5px 0px rgba(0, 0, 0, 0.75);
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
        // .card_left, .card_right {
        //     border: 1px solid darkgreen;
        // }
        .card_left {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 10px;
        }
        
        .card_left span {
            font-weight: 500;
        }
        
        .card_left a {
            margin: 15px 0px 10px 0px;
            font-size: 25px;
            color: black;
            text-decoration: none;
            font-weight: bold;
        }
        
        .card_left p {
            color: rgb(70, 70, 70);
        }

        .card_right img {
            max-height: 240px;
            max-width: 360px;
        }
        `
        return style;
    }

}

customElements.define('card-news', Cardnews)