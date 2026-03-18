module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'menteadmin123456789'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'mentesalt123'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT', 'mentransfer123456789'),
    },
  },
});