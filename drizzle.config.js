export default {
  schema: "./data/schema_*.js",
  out: "./data/migrations",
  driver: "better-sqlite",
  dbCredentials: {
    url: "./data/data.db",
  },
};
