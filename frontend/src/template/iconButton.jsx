import React from "react";
import Visible from "./visible";

export default props => ( 
    <Visible test={!props.hide}>
        <button className={`btn btn-` + props.style} onClick={props.onClick}>
            <i className={'fa fa-' + props.icon}>
            </i>
        </button>
    </Visible>
)