import { Inject } from "./dependency-manager/inject";
import { Injectable } from "./dependency-manager/injectable";
import { ErrorLogger } from "./services/logger/error-logger";
import { InfoLogger } from "./services/logger/info-logger";
import { LoggerService } from "./services/logger/logger-service";

@Injectable("WARNING_LOGGER")
class WarningLogger extends LoggerService {
  log(message: string): void {
    console.log(`[Warning-message]: ${message}`);
  }
}

class MyController {
  private static controllerInstance: MyController;
  @Inject("INFO_LOGGER")
  private readonly infoLogger!: InfoLogger;

  @Inject("ERROR_LOGGER")
  private readonly errorLogger!: ErrorLogger;

  @Inject("WARNING_LOGGER")
  private readonly warningLogger!: WarningLogger;

  public static getControllerInstance() {
    if (!MyController.controllerInstance) {
      MyController.controllerInstance = new MyController();
    }
    return MyController.controllerInstance;
  }

  logInfo(message: string) {
    this.infoLogger.log(message);
  }

  logError(message: string) {
    this.errorLogger.log(message);
  }

  logWarning(message: string) {
    this.warningLogger.log(message);
  }
}

const controller = MyController.getControllerInstance();
controller.logInfo("an info message happened!");
controller.logError("an error message happened!");
controller.logWarning("a warning message happened!");
