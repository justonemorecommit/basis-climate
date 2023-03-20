/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import cors from "cors";
import * as ngrok from "ngrok";

import { AppModule } from "./app/app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = "api";
  app.setGlobalPrefix(globalPrefix);
  const port = Number(process.env.PORT) || 3333;
  app.use(cors());
  await app.listen(port);

  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );

  if (
    process.env.NODE_ENV === "development" &&
    Boolean(process.env.NX_AUTO_NGROK) === true
  ) {
    let maxRetries = 5;
    let finalError: unknown;
    do {
      try {
        const ngrokUrl = await ngrok.connect(port);
        Logger.log("The public URL is: " + ngrokUrl);
        break;
      } catch (error: unknown) {
        maxRetries--;
        finalError = error;
      }
    } while (maxRetries--);

    if (maxRetries === 0) {
      console.error("Failed to start Ngrok, reason: ", finalError);
    }
  }
}

bootstrap();
