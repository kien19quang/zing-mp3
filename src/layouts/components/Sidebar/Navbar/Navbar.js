import PropTypes from 'prop-types';

function Navbar({ children, className }) {
    return <nav className={className}>
        {children}
    </nav>;
}

Navbar.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Navbar;