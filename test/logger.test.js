import { logger } from "../src/app/logging.js";

describe("logger testing", () => {
  it("info", async () => {
    logger.info("info message");
  });
  it("warn", async () => {
    logger.warn("warn message");
  });
  it("error", async () => {
    logger.error("error message");
  });
});
