import React from 'react';
//import Card from './Card';
import List from './List';
import './App.css';

class App extends React.Component {
	state = {
		lists: [
			{
				id: '1',
				header: 'First list',
				cardIds: ['a', 'b', 'e', 'f', 'g', 'j', 'l', 'm'],
			},
			{
				id: '2',
				header: 'Second list',
				cardIds: ['b', 'c', 'd', 'f', 'h', 'i', 'k'],
			},
			{
				id: '3',
				header: 'Third list',
				cardIds: [
					'a',
					'b',
					'c',
					'd',
					'e',
					'f',
					'g',
					'h',
					'i',
					'j',
					'k',
					'l',
					'm',
				],
			},
			{
				id: '4',
				header: 'Fourth list',
				cardIds: ['l', 'm'],
			},
		],
		allCards: {
			a: { id: 'a', title: 'First card', content: 'lorem ipsum' },
			b: { id: 'b', title: 'Second card', content: 'lorem ipsum' },
			c: { id: 'c', title: 'Third card', content: 'lorem ipsum' },
			d: { id: 'd', title: 'Fourth card', content: 'lorem ipsum' },
			e: { id: 'e', title: 'Fifth card', content: 'lorem ipsum' },
			f: { id: 'f', title: 'Sixth card', content: 'lorem ipsum' },
			g: { id: 'g', title: 'Seventh card', content: 'lorem ipsum' },
			h: { id: 'h', title: 'Eighth card', content: 'lorem ipsum' },
			i: { id: 'i', title: 'Ninth card', content: 'lorem ipsum' },
			j: { id: 'j', title: 'Tenth card', content: 'lorem ipsum' },
			k: { id: 'k', title: 'Eleventh card', content: 'lorem ipsum' },
			l: { id: 'l', title: 'Twelfth card', content: 'lorem ipsum' },
			m: { id: 'm', title: 'Thirteenth card', content: 'lorem ipsum' },
		},
	};

	static defaultProps = {
		state: {
			lists: [],
			allCards: {},
		},
	};

	deleteCard = (cardId) => {
		//delete id from allCards
		const { [cardId]: _, ...restCards } = this.state.allCards;

		this.setState({
			allCards: restCards,
		});

		//Delete id from List
		this.setState({
			lists: this.state.lists.map((item) => {
				return {
					...item,
					cardIds: item.cardIds.filter((id) => {
						return id !== cardId;
					}),
				};
			}),
		});
	};

	newRandomCard = () => {
		const id = Math.random().toString(36).substring(2, 4)
		  + Math.random().toString(36).substring(2, 4);
		const newCards =  {
		  id,
		  title: `Random Card ${id}`,
		  content: 'lorem ipsum',
		}
		

		//append the card to allCards

		this.setState({
			allCards: {...this.state.allCards, [id]: newCards},
			
			
		})


		//append the card to its respective list

		this.setState({
			lists: this.state.lists.map((item) => {
				
				return {
					...item,
					cardIds: [...item.cardIds, id]
					
				};
			}),
		});
	  }


	render() {
		console.log('state:', this.state)
		return (
			<main className='App'>
				<header className='App-header'>
					<h1>Trelloyes!</h1>
				</header>
				<div className='App-list'>
					{this.state.lists.map((list) => (
						<List
							key={list.id}
							header={list.header}
							cards={list.cardIds.map((id) => this.state.allCards[id])}
							deleteCard={this.deleteCard}
							addCard = {this.newRandomCard}
						/>
					))}
				</div>
			</main>
		);
	}
}

export default App;
