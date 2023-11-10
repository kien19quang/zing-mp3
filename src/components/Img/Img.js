import PropTypes from 'prop-types'
import { useState, forwardRef } from 'react'
import images from '~/assets/images';
import classNames from 'classnames';
import styles from './Img.module.scss'

const Image = forwardRef(({
    src,
    alt,
    className,
    fallBack: customFallback = images.noImage,
    ...props }, ref) => {
    const [fallBack, setFallback] = useState('')
    const handleError = () => {
        setFallback(customFallback)
    }
    return <img
        className={classNames(styles.wrapper, className)}
        ref={ref}
        src={fallBack || src}
        alt={alt} {...props}
        onError={handleError}
    />
})

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    fallBack: PropTypes.string,

}

export default Image;