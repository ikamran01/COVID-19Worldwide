import React from 'react'
import './Casesinfo.css'

function Casesinfo({ countries}) {
    return <div className='table'>
            {countries.map(({country, cases,deaths,recovered }) => (
                
                <tr>  
                    <td>{country}</td>
                    <td>{cases}</td>
                    

                </tr>
             
            ))}
            
        </div>
    
}

export default Casesinfo
