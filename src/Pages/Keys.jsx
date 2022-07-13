function Keys() {
	let cells1 = [
		'blue',
		'blue',
		'blue',
		'blue',
		'blue',
		'blue',
		'blue',
		'blue',
		'red',
		'red',
		'red',
		'red',
		'red',
		'red',
		'red',
		'red',
		'white',
		'white',
		'white',
		'white',
		'white',
		'white',
		'white',
		'Black',
		'red',
	];
	const generateKeys = () => {
		let cells = [
			'blue',
			'blue',
			'blue',
			'blue',
			'blue',
			'blue',
			'blue',
			'blue',
			'red',
			'red',
			'red',
			'red',
			'red',
			'red',
			'red',
			'red',
			'white',
			'white',
			'white',
			'white',
			'white',
			'white',
			'white',
			'Black',
		];

		drawCells(cells);
	};
	const drawCells = (cells) => {
		let str = '';
		let blueCount = 0;

		cells.forEach((cell) => {
			if (cell === 'blue') blueCount++;

			str += cell.charAt(0);
		});
	};
	let blueCount = 0;
	return (
		<>
			<div className='key-wrapper-1'>
				<div className='key-board clearfix' id='key-board'>
					{cells1.map((cellur) => {
						if (cellur === 'blue') blueCount++;
						return <div className={`cell ${cellur}`}></div>;
					})}
				</div>
				<div
					className={`lamp top ${blueCount === 9 ? 'blue' : 'red'}`}
				></div>
				<div
					className={`lamp right side ${
						blueCount === 9 ? 'blue' : 'red'
					}`}
				></div>
				<div
					className={`lamp left  side ${
						blueCount === 9 ? 'blue' : 'red'
					}`}
				></div>
				<div
					className={`lamp bottom ${
						blueCount === 9 ? 'blue' : 'red'
					}`}
				></div>
				<div className='bezel top'></div>
				<div className='bezel right'></div>
				<div className='bezel left'></div>
				<div className='bezel bottom'></div>
			</div>
			<div className='key-wrapper-shirt'> </div>
		</>
	);
}

export default Keys;
