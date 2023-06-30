import Image from 'next/image';

const Upcoming = () => {
	return (
		<section className='flex flex-wrap pl-4 m-6 shadow-md'>
			<div className='w-full md:w-1/2'>
				<h4 className='font-thin'>DISCOVER</h4>
				<h2 className='font-bold'>UPCOMING EVENTS</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid possimus consectetur molestias
					dicta cupiditate corrupti ut animi nihil magnam? Aliquam adipisci incidunt aperiam a quidem fuga
					nulla id, cumque quo iure dolore doloremque quasi eum unde repudiandae quibusdam, explicabo, totam
					dolorum. Rerum quae commodi autem blanditiis voluptatum, ducimus sit modi.
				</p>
			</div>
			<div className='w-full md:w-1/2'>
				<Image className='w-full' src={'/images/Food.png'} height={400} width={400} alt='Burger' />
			</div>
		</section>
	);
};

export default Upcoming;
