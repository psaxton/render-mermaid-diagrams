#!/usr/bin/env node

const { exec } = require('child_process');
const { globSync } = require('glob');
const path = require('path');
const mermaidCli = path.join('node_modules', '.bin', 'mmdc');

globSync('**/*.mmd').forEach(file => {
  const command = `${mermaidCli} -t forest -i ${file} -o ${file}.png`;
  exec(command, (err, stdout, _stderr) => {
    if (err) {
      console.error(`Error executing command "${command}": ${err}`);
      return;
    }

    console.log(stdout);
  });
});