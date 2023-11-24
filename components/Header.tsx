import Link from "next/link";


function Header() {

    return (
        <header  className="flex items-center justify-between py-10">
            <div>
                <Link href="/">
                    BlogName
                </Link>
            </div>
            <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
                <Link href="/"
                    className="hidden font-medium sm:block"
                >
                    Home
                </Link>
                <Link href="/"
                      className="hidden font-medium sm:block"
                >
                    About
                </Link>
            </div>
        </header>
    )
}

export default Header