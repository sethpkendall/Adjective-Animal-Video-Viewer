import React from 'react';
import ButtonGroup from './button_group';
import './button_panel.css';

const ButtonPanel = (props) => {
    const returnAdjectiveString =  () =>{
        let adjectives = '';
        let selectedAdjectives = props.selectedAdjectives;
        console.log(selectedAdjectives);
        if (selectedAdjectives.length === 1){
            return `${selectedAdjectives[0]} `
        } else if (selectedAdjectives.length > 1){
            selectedAdjectives.forEach(function(adjective){
                adjectives += `${adjective}, `;
            });
            return adjectives;
        } else {
            return "";
        }
    };
    return (
        <div className="col-md-6">
            <div id="animalButtons" className="subsection">
                <div className="buttonsDisplay">
                    <h3>Pick some adjectives...</h3>
                    <ButtonGroup
                        method={props.onAdjectiveSelect}
                        type="adjective"
                        terms={props.adjectives} />

                </div>
                <div id="adjectiveButtons" className="buttonsDisplay">
                    <h3>and an animal!</h3>
                    <ButtonGroup
                        method={props.onAnimalSelect}
                        type="animal"
                        terms={props.animals} />
                </div>
                <div id="currentSearch">
                    <p>Show me a {returnAdjectiveString()} {props.selectedAnimal}</p>
                </div>
            </div>
        </div>
    )
}

export default ButtonPanel;