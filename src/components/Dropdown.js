import React from 'react';
import { useParams } from 'react-router-dom';
import { LogementList } from '../datas/LogementList'
import '../styles/Dropdown.css'
import arrowDown from '../assets/arrowDown.svg'

function DropdownItem() {
    const { id } = useParams()
    const lgt = LogementList.find((ele) => ele.id === id)

    const equipements = lgt.equipments

    const [open, setOpen] = React.useState(false)
    const [open2, setOpen2] = React.useState(false)
    const [rotateChevron, setRotateChevron] = React.useState(false)
    const [rotateChevron2, setRotateChevron2] = React.useState(false)

    const rotate = rotateChevron ? "rotateX(180deg)" : "rotateX(0)"
    const rotate2 = rotateChevron2 ? "rotateX(180deg)" : "rotateX(0)"

    const handleOpen = () => {
        setOpen(!open)
        setRotateChevron(!rotateChevron)
    }

    const handleOpen2 = () => {
        setOpen2(!open2)
        setRotateChevron2(!rotateChevron2)
    }

    return (
        <div className='item3'>
            <div>
                <div className='dropdown' onClick={handleOpen}>
                    <div className='dropdown-value'>Description</div>
                    <img className='dropdown-value' style={{ transform: rotate, transition: "all 0.2s linear" }} src={arrowDown} alt='arrow' />
                </div>
                {open ? (
                    <div className='description'>
                        <div className='text'>{lgt.description}</div>
                    </div>
                ) : null}
            </div>
            <div>
                <div className='dropdown' onClick={handleOpen2}>
                    <div className='dropdown-value'>Équipements</div>
                    <img className='dropdown-value' style={{ transform: rotate2, transition: "all 0.2s linear" }} src={arrowDown} alt='arrow' />
                </div>
                {open2 ? (
                    <div className='equipement'>
                        <div className='text'>
                            {equipements.map((equipement, index) => (
                                <div key={index}>{equipement}</div>
                            ))}
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
        
    )
}

export default DropdownItem