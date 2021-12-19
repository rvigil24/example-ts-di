import { LoggerService } from "./logger-service";

export class InfoLogger extends LoggerService {
  log(message: string): void {
    console.log(`[Info-message]: ${message}`);
  }
}
