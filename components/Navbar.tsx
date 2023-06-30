'use client';

import Image from 'next/image';
import { useEffect } from 'react';

const Navbar = () => {
	useEffect(() => {
		const button = document.querySelector('#menu-button')!;
		const menu = document.querySelector('#menu')!;

		button.addEventListener('click', () => {
			menu.classList.toggle('hidden');
		});
	}, []);

	return (
		<div className='relative bg-gradient-to-br from-yellow-500 from-60% to-white h-64 md:min-h-[400px]'>
			<header className='box-border p-6 font-semibold text-gray-600 body-font'>
				<nav className='flex flex-wrap items-center justify-between w-full px-4 py-4 text-lg text-gray-700 bg-white md:py-0'>
					<div>
						<a href='#'>
							<Image src={'/images/logo.png'} width={100} height={50} alt='logo' />
						</a>
					</div>

					<svg
						xmlns='http://www.w3.org/2000/svg'
						id='menu-button'
						className='block w-6 h-6 cursor-pointer md:hidden'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							d='M4 6h16M4 12h16M4 18h16'
						/>
					</svg>

					<div className='hidden w-full md:flex md:items-center md:w-auto' id='menu'>
						<ul className='pt-4 text-base text-gray-700 md:flex md:justify-between md:pt-0'>
							<li>
								<a
									className='block py-2 transition-all duration-500 md:p-4 hover:text-rose-500'
									href='#'>
									HOME
								</a>
							</li>
							<li>
								<a
									className='block py-2 transition-all duration-500 md:p-4 hover:text-rose-500'
									href='#'>
									MENU
								</a>
							</li>
							<li>
								<a
									className='block py-2 transition-all duration-500 md:p-4 hover:text-rose-500'
									href='#'>
									OUR STORY
								</a>
							</li>
							<li>
								<a
									className='block py-2 transition-all duration-500 md:p-4 hover:text-rose-500'
									href='#'>
									ABOUT US
								</a>
							</li>
						</ul>
					</div>
				</nav>
			</header>

			<div className='hidden md:block absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]'>
				<h1 className='text-5xl font-bold text-white -my-11 animate-pulse skew-y-1'>BURGER HOUSE</h1>
				<h1 className='text-5xl font-bold text-red-500'>BURGER HOUSE</h1>
			</div>
		</div>
	);
};

export default Navbar;
