import React from 'react'

export const CharacterItem = ({item}) => {
    return (
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
                        <strong>Actor Occupation:</strong>{item.occupation}
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
    )
}

export default CharacterItem
