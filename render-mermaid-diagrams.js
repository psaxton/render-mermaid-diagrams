#!/usr/bin/env node

const { exec } = require('child_process');
const glob = require('glob');
const path = require('path');
const mermaidCli = path.join('node_modules', '.bin', 'mmdc');

glob('**/*.mmd', (err, files) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }

  files.forEach(file => {
    const command = `${mermaidCli} -t forest -i ${file} -o ${file}.png`;
    exec(command, (err, stdout, stderr) => {
      if (err) {
        console.error(`Error executing command "${command}": ${err}`);
        return;
      }

      console.log(stdout);
    });
  });
});