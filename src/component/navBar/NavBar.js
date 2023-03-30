import CartWidget from "../CartWidget/CartWidget"

const NavBar = ()=>{
    return ( 
        <nav>
            <h3>Ecomerce</h3>
            <div>
                <button>Celular</button>
                <button>Tablets</button>
                <button>Notebooks</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar