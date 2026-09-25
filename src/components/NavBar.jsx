import {navLinks} from '../constants/index.js'

function NavBar() {
    return (
        <header>
            <nav>
                <img src="/logo.svg" alt="Apple logo" />

                <ul>
                    {navLinks.map(({ label }) => (
                        <li key={label}>
                            <a href={label}>{label}</a>
                        </li>
                    ))}
                </ul>

                <div className="flex-center gap-3">
                    <button type="button" aria-label="Search">
                        <img src="/search.svg" alt="" />
                    </button>
                    <button type="button" aria-label="Cart">
                        <img src="/cart.svg" alt="" />
                    </button>
                </div>
            </nav>
        </header>
    );
}

export default NavBar
