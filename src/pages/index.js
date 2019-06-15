import React from "react"
import SEO from '../components/seo';
import ThemeConsumer from '../contexts/theme';

import styles from '../assets/css/index.module.css';

const HomePage = () => (
    <ThemeConsumer>
        {theme => (
                <React.Fragment>
                    <SEO title='Home' />
                    <div
                        className={styles.homePanel}
                        style={{
                            color: theme.white,
                            backgroundColor: theme.secondary
                        }}
                    >

                        <h1>
                            Gabriel Alves
                        </h1>
                                
                    </div>
                </React.Fragment>
        )}
    </ThemeConsumer>
)

export default HomePage;
