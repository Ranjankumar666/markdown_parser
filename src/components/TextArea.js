import React, { Fragment } from "react";

// I was in a hurry so made the componenet here
export const Label = (props) => (
    <label htmlFor="" className="flow-text">
        {props.label}
    </label>
);

const TextArea = (props) => {
    return (
        <Fragment>
            <Label label={props.label}></Label>
            <textarea
                className="custom-textarea red lighten-5 z-depth-1"
                name={props.name}
                placeholder={props.placeholder}
                onInput={props.inputHandler}
                rows={20}
                readOnly={props.readOnly}
                value={props.value}
                autoFocus
            ></textarea>
        </Fragment>
    );
};

export default TextArea;
