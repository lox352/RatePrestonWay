import React from "react";
import style from "./CardLayout.scss"

const CardLayout = (props) =>
    <div className={style.cards}>
        {React.Children.map(props.children, (child) => (<div className={style.card}>{child}</div>))}
    </div>;

export default CardLayout;