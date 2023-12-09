const { spawn } = import('child_process')
const serverProcess = spawn('yarn', ['dev'])

serverProcess.stdout.on('data', (data) => {
  console.log(data.toString())
});

serverProcess.stderr.on('data', (data) => {
  console.error(data.toString())
});
