const os = require('node:os');
const cpus = os.cpus();

const getInfos = (req, res) => {
    return res.json({
        "hostname": os.hostname(),
        "type": os.type(),
        "platform": os.platform(),
    });
}

const getCpus = (req, res) => {
    return res.json(cpus);
}

const getOneCpu = (req, res) => {
    const { id } = req.params;
    // const id = req.params.id;

    const cpu = cpus[id];

    if (cpu) {
        return res.json(cpu);
    }

    return res.status(404).json({
        "error": "Cpu not found"
    });
}

module.exports = {
    getInfos,
    getCpus,
    getOneCpu
}