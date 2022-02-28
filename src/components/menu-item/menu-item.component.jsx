import React from "react";
import './menu-item.styles.scss';
import {withRouter} from "react-router-dom";

const MenuItem = ({
  title,
  subtitle = 'Shop Now',
  history,
  imageUrl,
  size,
  linkUrl,
  match
}) => (
    <div className={`menu-item ${size}`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div className="background-image" style={{
            backgroundImage: `url(${imageUrl})`
        }}/>
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">{subtitle.toUpperCase()}</span>
        </div>
    </div>
);
export default withRouter(MenuItem);