import React from 'react';
import { UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap';

const ItemDetail = props => {
    const { name, price, amount, imageUrl, description } = props.item
    const baseApiUrl = 'http://localhost:3000';

    var imageUrlFull = baseApiUrl.concat(imageUrl);

    return (
        <li className="media">
            <div className="media-left">
                <img
                    className="media-object img-circle"
                    width="150px"
                    src={imageUrlFull}
                    alt={name}
                />
            </div>
            <div className="media-right">
                <h4 className="media-heading" style={{ marginLeft: 1 + 'em' }} >{name}</h4>
                <p style={{ marginLeft: 2 + 'em' }}>
                    <b >Price: </b>
                    {price} &nbsp;       
                    <b >Amount: </b>
                    {amount}
                </p>
                
                <p style={{ marginLeft: 2 + 'em' }}>
                    <b >{description} </b>
                </p>
                <p style={{ marginLeft: 2 + 'em' }}>
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
                </p>
                <hr />
            </div>
        </li>
    );
};

export default ItemDetail;