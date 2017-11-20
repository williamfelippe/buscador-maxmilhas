import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import './style.css'

const PrimaryButton = ({
    text,
    to,
    icon,
    isLink,
    isAnExternalLink,
    secondary,
    buttonClassName,
    textClassName
}) => {

    const renderButtonText = () => {
        return (
            <span className={textClassName}
                style={{ backgroundImage: `${icon ? icon : ''}` }}>
                {text}
            </span>
        )
    }

    const renderLinkButton = () => {
        return (
            <NavLink
                exact
                to={to}
                className={buttonClassName}>
                {renderButtonText()}
            </NavLink>
        )
    }

    const renderExternalLinkButton = () => {
        return (
            <a
                href={to}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonClassName}>
                {renderButtonText()}
            </a>
        )
    }

    const renderDefaultButton = () => {
        return (
            <button
                onClick={to}
                className={buttonClassName}>
                {renderButtonText()}
            </button>
        )
    }

    const renderButton = () => {
        if (!isLink) {
            return renderDefaultButton()
        }

        return (isAnExternalLink)
            ? renderExternalLinkButton()
            : renderLinkButton()
    }

    return (
        renderButton()
    )
}

PrimaryButton.defaultProps = {
    icon: null,
    isLink: false,
    isAnExternalLink: false,
    secondary: false,
    buttonClassName: '',
    textClassName: ''
}

PrimaryButton.propTypes = {
    text: PropTypes.string.isRequired,
    to: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.func
    ]).isRequired,
    icon: PropTypes.object,
    isLink: PropTypes.bool,
    isAnExternalLink: PropTypes.bool,
    secondary: PropTypes.bool,
    buttonClassName: PropTypes.string,
    textClassName: PropTypes.string
}

export default PrimaryButton