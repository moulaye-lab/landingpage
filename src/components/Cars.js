import React from 'react'

export default function Cars({color,name,year,children}) {
    return (
        <div>
           
            <h4>Marque: {name} </h4>
            <h4>Année: {children} </h4>

            <h4>Couleur: {color} </h4>

        </div>
    )
}
