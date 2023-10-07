import React from "react";

import Cards from './Cards';

const people = [
    {
        name: 'Olivia',
        role: 'Chief Executive Office (CEO)',
        avatar: 'https://randomuser.me/api/portraits/women/36.jpg'
    },
    {
        name: 'James',
        role: 'Marketing Manager',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
        name: 'Emma',
        role: 'Product Manager',
        avatar: 'https://randomuser.me/api/portraits/women/2.jpg'
    },
    {
        name: 'Elijah',
        role: 'Business Analyst',
        avatar: 'https://randomuser.me/api/portraits/men/59.jpg'
    },
    {
        name: 'Sophia',
        role: 'Data Scientist',
        avatar: 'https://randomuser.me/api/portraits/women/91.jpg'
    },
    {
        name: 'Benjamin',
        role: 'React Developer',
        avatar: 'https://randomuser.me/api/portraits/men/26.jpg'
    }
]

const App = () => (
    <div>
        <Cards data={people} />
    </div>
)

export default App;