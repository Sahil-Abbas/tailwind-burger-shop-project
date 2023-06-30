import Image from 'next/image';
import Button from './OrderButton';

const HotDeals = () => {
	return (
		<section className='p-2 pt-6 w-full lg:w-[1000px] mx-auto'>
			<div className='p-2 mx-auto bg-yellow-400 rounded-sm animate-bounce w-max'>Hot Deals</div>
			<div className='flex flex-col gap-2 sm:flex-row'>
				<div className='px-2 pb-2 shadow-md'>
					<Image
						className='w-full'
						src={'/images/burger2.jpg'}
						height={300}
						width={300}
						alt='hot deal burger'
					/>
					<h3 className='font-medium'>Lorem, ipsum dolor.</h3>
					<p style={{ textAlignLast: 'center' }}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, dolorum.
					</p>
					<Button>ORDER NOW</Button>
				</div>

				<div className='px-2 pb-2 shadow-md'>
					<Image
						className='w-full'
						src={'/images/burger2.jpg'}
						height={300}
						width={300}
						alt='hot deal burger'
					/>
					<h3 className='font-medium'>Lorem, ipsum dolor.</h3>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, dolorum.</p>
					<Button>ORDER NOW</Button>
				</div>

				<div className='px-2 pb-2 shadow-md'>
					<Image
						className='w-full'
						src={'/images/burger2.jpg'}
						height={300}
						width={300}
						alt='hot deal burger'
					/>
					<h3 className='font-medium'>Lorem, ipsum dolor.</h3>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, dolorum.</p>
					<Button>ORDER NOW</Button>
				</div>
			</div>
		</section>
	);
};

export default HotDeals;
