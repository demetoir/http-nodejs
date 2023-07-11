module.exports = {
    apps: [
        {
            name: 'fast',
            script: './fastify.main.js',
            instances: 3,
            exec_mode: 'cluster'
        },
    ],
};
