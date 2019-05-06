import { readFileSync } from 'fs';
import { GuessPlugin } from 'guess-webpack';

export default {
  build: {
    extend(config, ctx) {
      if (ctx.isClient) {
        config.plugins.push(
          new GuessPlugin({
            reportProvider() {
              return Promise.resolve(JSON.parse(readFileSync('./routes.json')));
            },
          }),
        );
      }
    },
  },
};
