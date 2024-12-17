import { Logger } from "tydet-core-logger";
import { instance, mountServer } from  "./server"

export async function main() {
  await mountServer()
}

function exitHandler(err: any) {
  if (!(err == 0 || err == 1 || err == "SIGINT" || err == "SIGUSR1" || err == "SIGUSR2")) {
    (instance.getServiceSafe("logger") as Logger)?.error("exitHandler", err);
  }
  instance.unmountServices().then(() => {
    process.exit(1);
  })
}

//do something when app is closing
process.on('exit', exitHandler);

//catches ctrl+c event
process.on('SIGINT', exitHandler);

// catches "kill pid" (for example: nodemon restart)
process.on('SIGUSR1', exitHandler);
process.on('SIGUSR2', exitHandler);

//catches uncaught exceptions
process.on('uncaughtException', exitHandler);

main();