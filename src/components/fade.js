import React from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup, Transition } from "react-transition-group"

const timeout = 200;
const transitionStyles = {
    entering: {
        position: 'absolute',
        opacity: 0,
    },
    entered: {
        transition: `opacity ${timeout}ms ease-in-out`,
        opacity: 1,
    },
    exiting: {
        transition: `all ${timeout}ms ease-in-out`,
        opacity: 0
    },
}

const defaultStyle = {
    height: '100%'
}

class FadeTransition extends React.PureComponent {
    render() {
        const { children, location, onExited } = this.props

        return (
            <TransitionGroup 
                style={{
                    height: '100%'
                }}
            >
                <Transition
                    key={location.pathname}
                    onExited={onExited}
                    timeout={timeout}
                >
                    {status => (
                        <div style={{ 
                            ...defaultStyle,
                            ...transitionStyles[status]
                        }}>
                            {children}
                        </div>
                    )}
                </Transition>
            </TransitionGroup>
        )
    }
}

FadeTransition.propTypes = {
    onExited: PropTypes.func
}

FadeTransition.defaultProps = {
    onExited: () => {}
}

export default FadeTransition;
