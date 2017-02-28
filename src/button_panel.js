import React from 'react';
import ButtonGroup from './button_group';

const ButtonPanel = (props) => {
    return (
        <div className="col-md-6">
            <div id="animalButtons" className="subsection">
                <div className="subsection buttonsDisplay">
                   <ButtonGroup
                       method={props.onAnimalSelect}
                       type="animal"
                       terms={props.animals} />
                </div>
                <div id="adjectiveButtons" className="subsection buttonsDisplay">
                    <ButtonGroup
                        method={props.onAdjectiveSelect}
                        type="adjective"
                        terms={props.adjectives} />
                </div>
            </div>
        </div>
    )
}

export default ButtonPanel;