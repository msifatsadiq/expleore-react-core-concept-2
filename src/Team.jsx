import { useState } from "react"

export default function Team() {

    const [team, setTeam] = useState(11);

    const teamStyle = {
        border: '2px solid purple',
        padding: '15px',
        margin: '15px',
        borderRadius: '15px'
    }

    return (
        <div style={teamStyle}>
            <h3>Players:</h3>
        </div>
    )
}