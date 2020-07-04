import Link from 'next/link';

const Navbar = () => (
    <nav className="flex sticky top-0 bg-white items-center justify-between flex-wrap p-2 shadow-md">
        <div className="flex items-center flex-grow text-white mx-1">
            <img className="px-1 mx-2 h-12 w-12" src="/asset2.svg" />
            <span className="font-sans text-blue-600 text-xl mx-4">
                matias fernandez
            </span>
        </div>
        <div className="text-sm">
            <Link href="/about">
                <a
                    href="#responsive-header"
                    className="font-sans block mt-4 lg:inline-block lg:mt-0 text-blue-600 hover:text-blue-800 mr-4"
                >
                    about me
                </a>
            </Link>
        </div>
    </nav>
);

export default Navbar;
