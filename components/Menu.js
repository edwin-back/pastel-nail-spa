import PropTypes from 'prop-types'
import Link from 'next/link'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link href="/"><a><span onClick={props.onToggleMenu}>Home</span></a></Link></li>
                <li><Link href="/about"><a><span onClick={props.onToggleMenu}>About</span></a></Link></li>
                <li><Link href="/services"><a><span onClick={props.onToggleMenu}>Services</span></a></Link></li>
                <li><Link href="/gallery"><a><span onClick={props.onToggleMenu}>Gallery</span></a></Link></li>
                <li><Link href="/elements"><a><span onClick={props.onToggleMenu}>Elements</span></a></Link></li>
            </ul>
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu
