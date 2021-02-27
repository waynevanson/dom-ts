import { Config } from "@jest/types"

const configuration: Config.InitialOptions = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
}

export default configuration
