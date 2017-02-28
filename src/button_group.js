import React from 'react';

const ButtonGroup = ({terms, method, type}) => {

    const mapToButtons = terms.map((term) =>{
        const clickFunction = () => {
            if(type === "animal"){
                let buttons = document.getElementsByClassName('animal');
                for(let i=0; i<buttons.length;i++){
                    buttons[i].className = "btn btn-primary animal";
                }
                let clickedButton = document.getElementById(term);
                clickedButton.className = "btn btn-success animal";
            } else if (type === "adjective"){
                console.log('test');
                let currentClass = document.getElementById(term).className;
                if (currentClass === 'btn btn-primary adjective'){
                    document.getElementById(term).className = "btn btn-success adjective";
                } else if(currentClass === 'btn btn-success adjective'){
                    document.getElementById(term).className = "btn btn-primary adjective";
                }
            }

            method(term);
        }
        return <button id={term} key={term} className={`btn btn-primary ${type}`} onClick={clickFunction}>{term}</button>
    });

    return (
        <div>
            {mapToButtons}
        </div>
    )
}

export default ButtonGroup;