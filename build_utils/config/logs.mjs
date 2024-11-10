import chalk from 'chalk';

const ERR_NO_BE_ENV_FLAG =
  'You must pass the BE_ENV flag into your build for webpack to work!';
const ERR_NO_APP_ENV_FLAG =
  'You must pass the APP_ENV flag into your build for webpack to work!';

function SERVER_STARTED_SUCCESSFULLY(port) {
  chalk.green(`Server started at ${port} successfully !!!`);
}

export { ERR_NO_BE_ENV_FLAG, ERR_NO_APP_ENV_FLAG, SERVER_STARTED_SUCCESSFULLY };
