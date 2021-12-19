import { InfoLogger } from "./logger/info-logger";
import { ErrorLogger } from "./logger/error-logger";

export const dependencyMapper = [
  { key: "INFO_LOGGER", value: InfoLogger },
  { key: "ERROR_LOGGER", value: ErrorLogger },
];
