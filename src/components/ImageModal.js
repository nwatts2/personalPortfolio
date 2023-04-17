import React, { useEffect, useState } from 'react';
import '../css/ImageModal.css';

const ImageModal = ({ image, setShowImage }) => {
    const [modalAnimation, setModalAnimation] = useState({opacity: 0});
    const [imageAnimation, setImageAnimation] = useState({animation: "floatOut .3s ease-in"});

    useEffect(() => {
        if (image !== null) {
            setModalAnimation({
                opacity: 1
            });

            setImageAnimation({
                animation: "floatIn .3s ease-out"
            })
        } else {
            setModalAnimation({
                opacity: 0
            });

            setImageAnimation({
                animation: "floatOut .3s ease-in"
            })
        }

    }, [image])

    function hide () {
        setModalAnimation({
            opacity: 0
        });

        setImageAnimation({
            animation: "floatOut .3s ease-in"
        })

        setTimeout(() => {
            setShowImage(null);
        }, 500)
    }

    return (
        <div className='row imageModal' style={modalAnimation}>
            <div className='imageModalBackground' onClick={hide} />
            <div className="imageContainer" style={imageAnimation}>
                <img src={image} alt="Example of Noah's Election Machine website" />
                <svg onClick={ hide } viewBox="0 0 24 24" ><path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm3.707,12.293a1,1,0,1,1-1.414,1.414L12,13.414,9.707,15.707a1,1,0,0,1-1.414-1.414L10.586,12,8.293,9.707A1,1,0,0,1,9.707,8.293L12,10.586l2.293-2.293a1,1,0,0,1,1.414,1.414L13.414,12Z"/></svg>
            </div>
        </div>
    )
}

export default ImageModal;