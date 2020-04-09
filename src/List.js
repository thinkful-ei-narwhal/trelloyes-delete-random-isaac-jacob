import React, { Component } from 'react';
import Card from './Card';
import './List.css';

export default class List extends Component {



	render() {

		return (
			<section className='List'>
				<header className='List-header'>{this.props.header}</header>
				<div className='List-cards'>
					{this.props.cards.map((card) => {
						console.log('card.id:', card)
						return (
							<Card
							id={card.id}
							key={card.id}
							title={card.title}
							content={card.content}
							deleteCard={this.props.deleteCard}
						/>
						)
					
						})}

					<button type='button' className='List-add-button' onClick={() => {
						this.props.addCard();
					}}>
						{' '}
						+ Add Random Card
					</button>
				</div>
			</section>
		);
	}
}
