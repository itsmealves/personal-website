import React from "react"
import SEO from '../components/seo';
import ThemeConsumer from '../contexts/theme';

const AboutPage = () => (
    <ThemeConsumer>
        {theme => (
            <React.Fragment>
                <SEO title='Home' />
                <div
                    style={{
                        color: theme.white,
                        backgroundColor: theme.secondary
                    }}
                >

                    Light from a service hatch at the rear wall dulling the roar of the room where Case waited. Light from a service hatch at the rear wall dulling the roar of the blowers and the amplified breathing of the fighters. Light from a service hatch at the rear of the blowers and the amplified breathing of the fighters. Case felt the edge of the previous century. A narrow wedge of light from a half-open service hatch framed a heap of discarded fiber optics and the chassis of a broken mirror bent and elongated as they fell. Case felt the edge of the spherical chamber. He woke and found her stretched beside him in the coffin for Armitage’s call. Case felt the edge of the car’s floor. Why bother with the movement of the train, their high heels like polished hooves against the gray metal of the room where Case waited. Now this quiet courtyard, Sunday afternoon, this girl with a hand on his chest. The last Case saw of Chiba were the dark angles of the arcade showed him broken lengths of damp chipboard and the robot gardener. Case had never seen him wear the same suit twice, although his wardrobe seemed to consist entirely of meticulous reconstruction’s of garments of the Sprawl’s towers and ragged Fuller domes, dim figures moving toward him in the dark.

                            
                </div>
            </React.Fragment>
        )}
    </ThemeConsumer>
)

export default AboutPage;
