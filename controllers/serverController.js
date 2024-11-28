const getInfos = (req, res) => {
    return res.json({
        "serverName": "Serveur de Robin",
        "serverLocation": "France",
        "description": "Serveur classique Express / Node"
    });
}

module.exports = {
    getInfos
}