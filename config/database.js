module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'blog-strapi-db'),
      user: env('DATABASE_USERNAME', 'postgres_user'),
      password: env('DATABASE_PASSWORD', 'postgres_pass'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
