export default function Banner({ children }) {
	return (
		<div className="lg:h-[600px] py-8 w-full bg-[url('https://images.pexels.com/photos/2132180/pexels-photo-2132180.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-no-repeat bg-cover bg-center">
			{children}
		</div>
	)
}
