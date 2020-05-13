import React, { Component } from 'react';
import ItemDetail from './ItemDetail';
import * as ItemApi from './ItemApi';



class ItemList extends Component {
    constructor() {
        super();

        this.state = {
            items: []
        };
    }

    componentDidMount() {
        //this.setState({ items: this.getItems() });

        ItemApi.getItemsDb()
        .then(items => {
            this.setState({ items });
            console.log('Success : Items retreived from Database ');
         })
        .catch(error => {
            console.log('Error : could not retreived Items from Database', error);
         });
    }

    render() {
        const { items } = this.state;

        return (
            <ul className="media-list">
                {items.map(item => (
                    <ItemDetail key={item._id} item={item} />
                ))}
            </ul>
        );
    }
}

export default ItemList;