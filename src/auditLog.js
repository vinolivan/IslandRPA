
const log = [];

export const addLogEntry = (type, details) => {
  log.push({ timestamp: new Date(), type, details });
};

export const getLogs = () => log;

export const clearLogs = () => { log.length = 0; };
