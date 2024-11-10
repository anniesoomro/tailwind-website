import Link from "next/link";
import Image from "next/image";
function Header() {
    return (
      <header className="bg-white shadow p-4 flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center justify-start">
        
          {/* Logo */}
          <Image src="/images/logo.jpg"alt="Logo"
          className="h-6 w-6 sm:h-8 sm:w-8 mr-2" />

          <h1 className="text-xl sm:text-2xl font-bold ">Fashion</h1>
          </div>
          <nav className="mt-4 sm:mt-0 ">
          <ul className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 items-center">
            <li>
              <Link href="/">Catalogue</Link>
              </li>
              <li>
              <Link href="/sale">Payday Sale</Link>
              </li>
              <li>
              <Link href="favorite">Favourites</Link>
              </li>
              <li>
              <Link href="signup" className="font-bold bg-black text-white p-2 rounded-md">Sign Up</Link>
              </li>
            </ul>
          </nav>
        
      </header>
    );
  };
  
  export default Header;