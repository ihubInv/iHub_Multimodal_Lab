module.exports = {
  apps: [{
    name: 'onepage-mml',
    script: './node_modules/.bin/next',
    args: 'dev -H 0.0.0.0',
    cwd: '/root/Fariyad/MML/OnePageMML',
    env: {
      NODE_ENV: 'development',
      PORT: 5555,
      HOSTNAME: '0.0.0.0'
    },
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    error_file: './logs/pm2-error.log',
    out_file: './logs/pm2-out.log',
    log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
  }]
}

