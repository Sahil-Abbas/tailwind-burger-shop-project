import { twMerge } from 'tailwind-merge';

interface OrderButtonProps {
	children: React.ReactNode;
}
const Button: React.FC<OrderButtonProps> = ({ children }) => {
	return <button className={twMerge('bg-rose-500 mt-2 p-2 mx-auto block hover:bg-rose-600')}>{children}</button>;
};

export default Button;
