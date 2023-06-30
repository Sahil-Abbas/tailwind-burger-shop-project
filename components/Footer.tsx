import Image from 'next/image';
import { ImLocation } from 'react-icons/im';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
	return (
		<footer>
			<div className='text-white min-h-[500px] bg-[url(/images/layer.png)] bg-no-repeat bg-cover'>
				<div className='flex flex-col flex-wrap items-center justify-between w-full h-full p-4 md:flex-row'>
					<div className='w-full md:w-1/3'>
						<Image src={'/images/logo.png'} height={100} width={200} alt='logo' />
						<h1 className='text-4xl'>BURGER HOUSE</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, rem molestiae nulla culpa
							veritatis voluptates neque enim hic esse voluptas minus fuga modi? Laboriosam temporibus
							iste tempora doloremque. Iusto, quidem magnam. Adipisci similique aspernatur molestiae quae
							accusamus soluta voluptates natus nesciunt? Repellendus aut eligendi autem, iure libero
							dolores tempore quam!
						</p>
					</div>
					<div className='flex flex-col w-full gap-3 md:w-1/3'>
						<div className='flex items-center'>
							<ImLocation size={24} className='mx-1' />
							<p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
						</div>
						<div className='flex items-center w-full'>
							<MdEmail size={24} className='mx-1' />
							<p>abc@exampl.com</p>
						</div>
					</div>
				</div>
			</div>
			<small>&copy; Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, fuga!</small>
		</footer>
	);
};

export default Footer;
