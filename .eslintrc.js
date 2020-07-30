module.exports = {
  extends: 'airbnb-base',
  rules: {
    'no-console': 'off',
    'no-unused-vars': 'off',
    // windows linebreaks when not in production environment
    'linebreak-style': ['error', process.env.NODE_ENV === 'prod' ? 'unix' : 'windows'],
  },
};
