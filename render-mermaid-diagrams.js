#!/usr/bin/env node

const { exec } = require('child_process');
const { globSync } = require('glob');
const mermaidCli = require('path').join('node_modules', '.bin', 'mmdc');

globSync('**/*.mmd')
  .forEach(file => exec(`${mermaidCli} -t forest -i ${file} -e png`));
