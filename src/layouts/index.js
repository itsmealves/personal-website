import React from 'react';
import ThemeConsumer, { ThemeProvider } from '../contexts/theme';

import FadeTransition from '../components/fade';
import Navbar from '../components/navbar';
import Main from '../components/main';

import '../assets/css/index.css';

class MainLayout extends React.Component {
    state = {
        requests: []
    }

    changeTheme({ theme }, { set }) {
        setTimeout(() => set(theme), 100)
    }

    render() {
        const { children, location } = this.props;
            
        return (
            <ThemeProvider>
                <ThemeConsumer>
                    {theme => (
                        <React.Fragment>
                            <Navbar
                                currentLocation={location.pathname}
                                onLocationFound={link => this.changeTheme(link, theme)}
                            />
                            <Main>
                                <FadeTransition location={location}>
                                    {children}
                                </FadeTransition>
                            </Main>
                        </React.Fragment>
                    )}
                </ThemeConsumer>
            </ThemeProvider>
        )
    }
}

export default MainLayout;
