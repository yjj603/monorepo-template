module.exports = {
  apps: [
    {
      name: 'pkg1',
      script: 'dist/apps/pkg1/main.js',
      env_production: {
        ENV: 'prod',
        NAME: 'pkg1',
      },
      env_development: {
        ENV: 'dev',
        NAME: 'pkg1',
      },
    },
  ],
};
