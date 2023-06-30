import BookForm from '@/components/BookForm';
import Footer from '@/components/Footer';
import HotDeals from '@/components/HotDeals';
import Navbar from '@/components/Navbar';
import TopDeals from '@/components/TopDeals';
import Upcoming from '@/components/Upcoming';

export default function Home() {
	return (
		<main className='container mx-auto'>
			<Navbar />
			<div className='px-6'>
				<TopDeals />
				<HotDeals />
				<Upcoming />
				<BookForm />
				<Footer />
			</div>
		</main>
	);
}
