module.exports = {
    apps: [
        {
            // name: 'fast',
            // script: './fastify.main.js',
            name: 'hyper-express',
            script: './hyper-express.main.js',
            instances: 4,
            exec_mode: 'cluster'
        },
    ],
};
