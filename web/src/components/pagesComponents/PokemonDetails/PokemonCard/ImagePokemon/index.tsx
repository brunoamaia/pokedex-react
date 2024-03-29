import { useEffect, useState } from 'react'
import { ImageStyles } from './styles'

import LeftArrow from '../../../../../assets/img/left-arrow.svg'
import RightArrow from '../../../../../assets/img/right-arrow.svg'

interface ImageParams {
  image: {
    front: string
    back: string
  }
}

export function ImagePokemon({ image }: ImageParams) {
  const [imageIsFront, setImageIsFront] = useState(true)
  const [imageA, setImageA] = useState(image.front)
  const [imageB, setImageB] = useState(image.back)
  const [rotation, setRotation] = useState('')

  function timeToChangeImage(isRotationToBack: Boolean) {
    if (isRotationToBack) {
      setImageA(image.back)
      setImageB(image.front)
    } else {
      setImageA(image.front)
      setImageB(image.back)
    }
  }

  function handleChangeImage() {
    if (imageIsFront) {
      setImageIsFront(false)
      setRotation('rotation-to-back')
      setTimeout(timeToChangeImage, 500, true)
    } else {
      setImageIsFront(true)
      setRotation('rotation-to-front')
      setTimeout(timeToChangeImage, 500, false)
    }
  }

  useEffect(() => {
    setImageIsFront(true)
    setImageA(image.front)
    setImageB(image.back)
    setRotation('')
  }, [image])

  return (
    <ImageStyles>
      <button className="control" onClick={handleChangeImage}>
        <img src={LeftArrow} alt="change position of pokemon" />
      </button>
      <div className={`card ${rotation}`}>
        <div className="image">
          <div className="front">
            <img src={imageA} alt="" />
          </div>
          <div className="back">
            <img src={imageB} alt="" />
          </div>
        </div>
      </div>
      <button className="control" onClick={handleChangeImage}>
        <img src={RightArrow} alt="change position of pokemon" />
      </button>
    </ImageStyles>
  )
}
