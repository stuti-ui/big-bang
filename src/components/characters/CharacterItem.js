import React,{useState} from 'react'
import { Button } from 'react-bootstrap'
import Info from '../Info'

export const CharacterItem = ({item}) => {
    const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
    return (
    <div >
        <div className='card'>
            <div className= 'card-inner'>
                <div className='card-front'>
                    <img src={item.img} alt={item.name}/>
                </div>
                <div className='card-back'>
                    <h1>{item.name}</h1>
                    <ul>    
                        <li>
                        <strong>Actor Name:</strong>{item.portrayed}
                        </li>
                        <li>
                        <strong>Character Occupation:</strong>{item.occupation}
                        </li>
                        <li>
                        <strong>Dae of Birth:</strong>{item.birthday}
                        </li>
                        <li>
                        <strong>Character Status:</strong>{item.status}
                        </li>
                    </ul>
                    
                    
                    
                </div>
            </div>
            
        </div>
        <Button variant="btn btn-success" onClick={togglePopup} >View More</Button>
                    {isOpen && <Info
                    content={<>
                        <img src={item.img} alt={item.name}/>
                        <li><strong>Character Name: {item.name}</strong></li>
                        <li><strong>Actor Birthdate: {item.birthday}</strong></li>
                        <li><strong>Character Occupation: {item.occupation}</strong></li>
                        <li><strong>Character Status: {item.status}</strong></li>
                        <li><strong>Character Nickname: {item.nickname}</strong></li>
                        <li><strong>Actor Name: {item.portrayed}</strong></li>
                        <li><strong>Chracter apperance in seasons: {item.appearance}</strong></li>
                        <li><strong>Category: {item.category}</strong></li>
                    </>}
                    handleClose={togglePopup}
                    />}
        </div>
    )
}

export default CharacterItem
