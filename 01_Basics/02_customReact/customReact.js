function customRender(reactElement,container){
    //Method 01
    // let domEle = document.createElement(reactElement.type);
    // domEle.setAttribute('href',reactElement.props.href);
    // domEle.setAttribute('target',reactElement.props.target);
    // domEle.innerHTML = reactElement.children;
    // container.appendChild(domEle);

    //Method 02
    let domEle = document.createElement(reactElement.type);
    domEle.innerHTML = reactElement.children;
    for(let prop in reactElement.props){
        domEle.setAttribute(prop,reactElement.props[prop]);
    }
    container.appendChild(domEle);
}

let mainContainer = document.getElementById('root');
let reactElement = {
    type :"a",
    props :{
        href : 'https://google.com',
        target : '_blank'
    },
    children : 'Click me to visit google'
}

customRender(reactElement,mainContainer);