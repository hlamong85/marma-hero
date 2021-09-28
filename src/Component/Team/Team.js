import React, { useEffect, useState } from 'react';

import Cart from '../../Cart/Cart';
import Team from '../../Team/Team';
import './Teams.css'

const Teams = () => {
    const [teams, setTeams] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('./team.JSON')
            .then(res => res.json())
            .then(data => setTeams(data));
    }, [])

    const handleAddToCart = (teams) => {
        const newCart = [...cart, teams];
        setCart(newCart);
        console.log('clicked');
    }
    return (
        <div className="teams-body">
            <div className="teams">
                {
                    teams.map(team => <Team
                        key={team._id}
                        team={team}
                        handleAddToCart={handleAddToCart}
                    >
                    </Team>)

                }
            </div>
            <div className="team-added">
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Teams;