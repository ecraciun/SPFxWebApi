'use strict';

const gulp = require('gulp');
const build = require('@microsoft/sp-build-web');
const fs = require('fs');
build.addSuppression(`Warning - [sass] The local CSS class 'ms-Grid' is not camelCase and will not be type-safe.`);

// Usage: gulp update-config-properties --apiUrl="https://yourapiurl.something"
build.task('update-config-properties', {
    execute: (config) => {
      return new Promise((resolve, reject) => {
        const apiUrl = config.args['apiUrl'] || "";
        fs.writeFileSync('./src/common/config.ts',
          `export const config: any = {
                  apiUrl: "${apiUrl}"
              };`);
        resolve();
      });
    }
});

build.initialize(gulp);