import React from 'react';

const ButtonGroup = ({terms, method}) => {
    const mapToButtons = terms.map((term) =>{
        return <button className="btn btn-primary" onClick={() =>method(term)}>{term}</button>
    });

    return (
        <div>
            {mapToButtons}
        </div>
    )

                // <div><button className="btn btn-primary">Button1</button> <button className="btn btn-primary">Button2</button> <button className="btn btn-primary">Button3</button> <button className="btn btn-primary">Button4</button></div>
                // <div> <button className="btn btn-primary">Button5</button> <button className="btn btn-primary">Button6</button> <button className="btn btn-primary">Button7</button> <button className="btn btn-primary">Button8</button></div>

}

export default ButtonGroup;