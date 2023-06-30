const BookForm = () => {
	return (
		<section className='pt-6 h-[600px] my-6 w-full text-center bg-no-repeat bg-[position:-250px_-50px,right_bottom] bg-[length:50%,50%] md:bg-[url(/images/tomato.png),_url(/images/burger3.png)]'>
			<h2 className='font-medium'>RESERVATION</h2>
			<h1 className='my-3 text-2xl font-extrabold'>
				Book YOUR{' '}
				<span className='relative inline-block before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-rose-500'>
					<span className='relative text-white'>TABLE</span>
				</span>
			</h1>

			<form className='p-3 mx-auto flex flex-wrap gap-y-3 w-full md:w-[600px]'>
				<div className='w-full p-2 md:w-1/2'>
					<div className='relative'>
						<input
							id='name'
							type='text'
							placeholder='Name'
							autoComplete='off'
							className='w-full p-1 border-2 rounded-md peer border-stone-200 focus:outline-slate-300 placeholder:text-transparent'
						/>
						<label
							htmlFor='name'
							className='absolute text-gray-400 transition-all left-1 -top-6 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-1 peer-focus:-top-6 peer-focus:left-1 peer-focus:text-gray-400'>
							Name
						</label>
					</div>
				</div>

				<div className='w-full p-2 md:w-1/2'>
					<div className='relative'>
						<input
							id='email'
							type='email'
							placeholder='Email'
							autoComplete='off'
							className='w-full p-1 border-2 rounded-md peer border-stone-200 focus:outline-slate-300 placeholder:text-transparent'
						/>
						<label
							htmlFor='email'
							className='absolute text-gray-400 transition-all left-1 -top-6 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-1 peer-focus:-top-6 peer-focus:left-1 peer-focus:text-gray-400'>
							Email
						</label>
					</div>
				</div>

				<div className='w-full p-2 md:w-1/2'>
					<div className='relative'>
						<input
							id='date'
							type='date'
							placeholder='Date'
							autoComplete='off'
							className='w-full p-1 border-2 rounded-md peer border-stone-200 focus:outline-slate-300 placeholder:text-transparent'
						/>
						<label
							htmlFor='date'
							className='absolute text-gray-400 transition-all left-1 -top-6 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-1 peer-focus:-top-6 peer-focus:left-1 peer-focus:text-gray-400'>
							Date
						</label>
					</div>
				</div>

				<div className='w-full p-2 md:w-1/2'>
					<div className='relative'>
						<input
							id='time'
							type='time'
							placeholder='Time'
							autoComplete='off'
							className='w-full p-1 border-2 rounded-md peer border-stone-200 focus:outline-slate-300 placeholder:text-transparent'
						/>
						<label
							htmlFor='time'
							className='absolute text-gray-400 transition-all left-1 -top-6 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-1 peer-focus:-top-6 peer-focus:left-1 peer-focus:text-gray-400'>
							Time
						</label>
					</div>
				</div>

				<div className='w-full p-2 md:w-1/2'>
					<div className='relative'>
						<input
							id='people'
							type='number'
							placeholder='People'
							autoComplete='off'
							className='w-full p-1 border-2 rounded-md peer border-stone-200 focus:outline-slate-300 placeholder:text-transparent'
						/>
						<label
							htmlFor='people'
							className='absolute text-gray-400 transition-all left-1 -top-6 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-1 peer-focus:-top-6 peer-focus:left-1 peer-focus:text-gray-400'>
							People
						</label>
					</div>
				</div>

				<div className='w-full p-2 md:w-1/2'>
					<button className='w-full h-full font-medium text-white rounded bg-rose-500'>FINE A TABLE</button>
				</div>
			</form>
		</section>
	);
};

export default BookForm;
