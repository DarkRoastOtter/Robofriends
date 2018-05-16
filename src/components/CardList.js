import React from 'react';
import Card from './Card';

const CardList = ({ Robots }) => {
    return (
        <div>
            {
                Robots.map((user, id) => {
                    return (
                        <Card
                            key={id}
                            id={Robots[id].id}
                            name={Robots[id].name}
                            email={Robots[id].email}
                            username={Robots[id].username}
                        />
                    );
                })
             }
        </div>
    )
}

export default CardList;