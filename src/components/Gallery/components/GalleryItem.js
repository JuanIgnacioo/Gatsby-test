import React, { useCallback } from 'react'
import PropTypes from 'prop-types'

const GalleryItem = ({
  id,
  source,
  thumbnail,
  caption,
  description,
  position,
  toggleLightbox,
}) => {
  const onClick = useCallback(
    (e) => {
      e.preventDefault()
      toggleLightbox(position)
    },
    [position, toggleLightbox]
  )

  const styleDescription = {
    textAlign: 'center',
  }

  return (
    <article key={id} className="6u 12u$(xsmall) work-item">
      <a className="image fit thumb" href={source} onClick={onClick}>
        <img src={thumbnail} />
      </a>
      <div style={styleDescription}>
        <h3>{caption}</h3>
      </div>

      {/* <p>{description}</p> */}
    </article>
  )
}

GalleryItem.displayName = 'GalleryItem'
GalleryItem.propTypes = {
  id: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  position: PropTypes.number.isRequired,
  toggleLightbox: PropTypes.func.isRequired,
}

export default GalleryItem
