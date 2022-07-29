import React from 'react'
import { Transition } from 'react-transition-group';

function Toast({ message = 'Email ID copied to clipboard', inProp = false }) {
    const duration = 1000;

    const defaultStyle = {
        transition: `opacity ${duration}ms ease-in-out`,
        opacity: 0,
    }

    const transitionStyles = {
    entering: { opacity: 1 },
    entered:  { opacity: 1 },
    exiting:  { opacity: 0 },
    exited:  { opacity: 0 },
    };

    return (

        <Transition in={inProp} timeout={duration}>
            { state => (
                <div style={{
                    ...defaultStyle,
                    ...transitionStyles[state]
                }}>
                    <div className='toast'>
                        <p>{message}</p>
                    </div>
                </div>
            )}
        </Transition>

    )
}

export default Toast