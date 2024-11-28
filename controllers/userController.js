const users = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 35 }
];

const getAll = (req, res) => {
    return res.json(users);
}


const getOne = (req, res) => {
    const user = users.find(user => user.id == req.params.id);

    if (!user) {
        return res.status(404).json({
            "error": "User not found"
        })
    }

    return res.json(user);
}


const getUsersByAge = (req, res) => {
    const minAge = parseInt(req.params.minAge);
    const filteredUsers = users.filter(user => user.age >= minAge);

    return res.json(filteredUsers);
}

const increaseAge = (req, res) => {
    const years = parseInt(req.params.years);

    if (isNaN(years)) {
        return res.status(400).json({
            "error": "years must be a number"
        })
    }

    const user = users.find(user => user.id == req.params.id);

    if (!user) {
        return res.status(404).json({
            "error": "User not found"
        })
    }

    user.age += years;

    return res.json(user);
}

const getCount = (req, res) => {
    return res.json({
        "totalUsers": users.length
    });
}

const addUser = (req, res) => {
    users.push(req.body);

    return res.json(true);
}

module.exports = {
    getAll,
    getOne,
    getUsersByAge,
    increaseAge,
    getCount,
    addUser
}