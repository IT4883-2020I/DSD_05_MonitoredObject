module.exports = {
    apps: [{
        name: 'SDS 05',
        script: 'index.js',

        // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem$
        args: 'one',
        instances: 1,
        exec_mode: "cluster",
        autorestart: true,
        watch: true,
        max_memory_restart: '2G',
        env: {
            NODE_ENV: 'development',
            PORT: 9000
        },
        env_production: {
            NODE_ENV: 'production',
            PORT: 9000,
            CI: false
        }
    }],

    deploy: {
        production: {
            user: 'node',
            host: '192.168.10.105',
            ref: 'origin/master',
            repo: 'git@github.com:repo.git',
            path: '/var/www/production',
            'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production'
        }
    }
};