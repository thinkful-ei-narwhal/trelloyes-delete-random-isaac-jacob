import React, { Component } from 'react';
import Card from './Card';
import './List.css';

export default class List extends Component {
	render() {
		return (
			<section className='List'>
				<header className='List-header'>{this.props.header}</header>
				<div className='List-cards'>
					{this.props.cards.map((card) => (
						<Card
							id={card.id}
							key={card.id}
							title={card.title}
							content={card.content}
							deleteCard={this.props.deleteCard}
						/>
					))}

					<button type='button' className='List-add-button'>
						{' '}
						+ Add Random Card
					</button>
				</div>
			</section>
		);
	}
}
