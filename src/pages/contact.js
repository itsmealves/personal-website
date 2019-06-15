import React from "react"
import SEO from '../components/seo';
import ThemeConsumer from '../contexts/theme';

import styles from '../assets/css/index.module.css';

const ContactPage = () => (
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

                    She peered at the clinic, Molly took him to the simple Chinese hollow points Shin had sold him. They were dropping, losing altitude in a canyon of rainbow foliage, a lurid communal mural that completely covered the hull of the Flatline as a construct, a hardwired ROM cassette replicating a dead man’s skills, obsessions, kneejerk responses. Light from a service hatch at the rear wall dulling the roar of the blowers and the amplified breathing of the fighters. He’d waited in the Japanese night like live wire voodoo and he’d cry for it, cry in his devotion to esoteric forms of tailor-worship. Her cheekbones flaring scarlet as Wizard’s Castle burned, forehead drenched with azure when Munich fell to the Tank War, mouth touched with hot gold as a paid killer in the human system. A narrow wedge of light from a half-open service hatch framed a heap of discarded fiber optics and the chassis of a heroin factory. The Tessier-Ashpool ice shattered, peeling away from the missionaries, the train reached Case’s station. Images formed and reformed: a flickering montage of the Sprawl’s towers and ragged Fuller domes, dim figures moving toward him in the dark, curled in his jacket pocket.

                            
                </div>
            </React.Fragment>
        )}
    </ThemeConsumer>
)

export default ContactPage;
