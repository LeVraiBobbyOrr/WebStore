import React from 'react';
import { UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap';

const ItemPopover = props => {
    const { name, price, imageUrl, description } = props.item
    const baseApiUrl = 'http://localhost:3000';
    
    var imageUrlFull = baseApiUrl.concat(imageUrl);

    return (
        <li className="media">
        <p style={{ marginLeft: 2 + 'em' }}>
            <button id="PopoverLegacy" type="button"> Add to cart </button>
            <UncontrolledPopover trigger="legacy" placement="right" target="PopoverLegacy">
                <PopoverHeader>{name}</PopoverHeader>
                <PopoverBody>
                    <img
                        className="media-object img-circle"
                        width="150px"
                        src={imageUrlFull}
                        alt={name}
                    />
                    <p>
                        {description}
                    </p>
                </PopoverBody>
            </UncontrolledPopover>
            </p>
            </li>
    );
};

export default ItemPopover;