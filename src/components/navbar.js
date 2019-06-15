import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "gatsby";

import ThemeConsumer from '../contexts/theme';

import styles from '../assets/css/navbar.module.css';

const Navbar = props => {
    const links = [
        { address: '/', title: 'Home', theme: 'greenish' },
        { address: '/about', title: 'About', theme: 'blueish' },
        { address: '/work', title: 'Work' , theme: 'greenish' },
        { address: '/contact', title: 'Contact', theme: 'purpleish' }
    ]

    const currentLink = links.find(link => {
        const regex = new RegExp(`^${props.currentLocation}`, 'g');
        return link.address.match(regex);
    });

    if(currentLink)
        setTimeout(() => props.onLocationFound(currentLink), 100);

    return (
        <ThemeConsumer>
            {theme => (
                <nav
                    className={styles.mainNav}
                    style={{ 
                        color: theme.white,
                        backgroundColor: theme.primary
                    }}
                >
                    <ul>
                        {links.map((link, index) => (
                            <li key={index}>
                                <Link to={link.address}>
                                    {link.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </ThemeConsumer>
    )
};

Navbar.propTypes = {
    currentLocation: PropTypes.string.isRequired,
    onLocationFound: PropTypes.func
}

Navbar.defaultProps = {
    onLocationFound: () => {}
}

export default Navbar;
