const TopDeals = () => {
	return (
		<section className='grid grid-cols-1 md:grid-cols-2 h-[500px] gap-2 pt-6 text-white'>
			<div className='p-5 h-full bg-[url(/images/Image3.png)] bg-black bg-no-repeat bg-[length:115%] bg-center object-fill rounded-lg'>
				<h1 className='text-2xl font-bold'>TRY IT TODAY</h1>
				<h3>MOST POPULAR BURGER</h3>
			</div>
			<div className='flex flex-col h-full gap-2'>
				<div className='p-5 h-full bg-[url(/images/Image1.png)] bg-black bg-no-repeat bg-[length:115%] bg-center object-fill rounded-lg'>
					<h1 className='text-2xl font-bold'>TRY IT TODAY</h1>
					<h3>MOST POPULAR BURGER</h3>
				</div>
				<div className='p-5 h-full bg-[url(/images/Image.png)] bg-black bg-no-repeat bg-[length:115%] bg-center object-fill rounded-lg'>
					<h1 className='text-2xl font-bold'>TRY IT TODAY</h1>
					<h3>MOST POPULAR BURGER</h3>
				</div>
			</div>
		</section>
	);
};

export default TopDeals;
