import Link from "next/link";


interface Props {
    title: string
    subTitle?: string
}


function Header({title, subTitle}: Props) {



    return (
        <header  className="flex items-center justify-between py-10">
            <div>
                <Link href="/">
                    <div>
                        {title?
                            <h1 className="text-3xl font-bold">{title}</h1>
                            :
                            <h1 className="text-3xl font-bold">BlogName</h1>

                        }
                        {subTitle?
                            <span className="dark:text-gray-300">{subTitle}</span>
                            :
                            ""
                        }
                    </div>
                </Link>
            </div>
            <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
                <Link href="/"
                    className="hidden font-medium sm:block"
                >
                    Home Edited
                </Link>
                <Link href="/about"
                      className="hidden font-medium sm:block"
                >
                    About Edited
                </Link>
            </div>
        </header>
    )
}

export default Header