import './navbar.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Navbar = ({ click }) => {

    // cart에 있는 아이템 소환
    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;

    // console.log(cartItems);

    //새로운 state로 조작
    const getCartCount = () => {
        return cartItems.reduce((quantity, item) => Number(item.quantity) + quantity, 0);
    };

    return (
        <nav className="navbar">
            {/* logo */}
            <div className="navbar__logo">
                <h2><i className="fab fa-react"></i>
                    <Link to="/"> SHOPPING NEW</Link>
                </h2>
            </div>

            <ul className="navbar__links">
                <li>
                    <Link to="/cart" className="cart__link">
                        <i className="fas fa-shopping-bag"></i>
                        <span>
                            CART
                        <span className="cartlogo__badge">{getCartCount()}</span>
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="/" className="cart__link">
                        <i className="fas fa-store-alt"></i>
                        <span>
                            SHOP
                        </span>
                    </Link>
                </li>
            </ul>

            <button className="toggle__menu" onClick={click}>
                <i className="fas fa-bars"></i>
            </button>

        </nav>
    )
}

export default Navbar;