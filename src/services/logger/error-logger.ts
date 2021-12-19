import { LoggerService } from "./logger-service";

export class ErrorLogger extends LoggerService {
  log(message: string): void {
    console.log(`[Error-message]: ${message}`);
  }
}
