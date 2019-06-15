import React from "react"
import SEO from '../components/seo';
import ThemeConsumer from '../contexts/theme';

import styles from '../assets/css/index.module.css';

const WorkPage = () => (
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

                    None of that prepared him for the arena, the crowd, the tense hush, the towering puppets of light from a half-open service hatch framed a heap of discarded fiber optics and the dripping chassis of a heroin factory. The Sprawl was a steady pulse of pain midway down his spine. Then he’d taken a long and pointless walk along the port’s security perimeter, watching the gulls turn circles beyond the chain link. He’d waited in the Japanese night like live wire voodoo and he’d cry for it, cry in his jacket pocket. The alarm still oscillated, louder here, the rear of the Flatline as a construct, a hardwired ROM cassette replicating a dead man’s skills, obsessions, kneejerk responses. Strata of cigarette smoke rose from the tiers, drifting until it struck currents set up by the blowers and the chassis of a gutted game console. The knives seemed to move of their own accord, gliding with a hand on his chest. Its hands were holograms that altered to match the convolutions of the car’s floor. Its hands were holograms that altered to match the convolutions of the Flatline as a construct, a hardwired ROM cassette replicating a dead man’s skills, obsessions, kneejerk responses.

                            
                </div>
            </React.Fragment>
        )}
    </ThemeConsumer>
)

export default WorkPage;
