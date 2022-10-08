module.exports = {
  apps: [
    {
      name: 'backend-pkg1',
      script: 'backend/dist/apps/pkg1/main.js',
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
