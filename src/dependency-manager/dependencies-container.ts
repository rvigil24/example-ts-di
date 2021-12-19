import { InfoLogger } from "../services/logger/info-logger";
import { ErrorLogger } from "../services/logger/error-logger";

export const dependenciesContainer = [
  { key: "INFO_LOGGER", value: InfoLogger },
  { key: "ERROR_LOGGER", value: ErrorLogger },
];