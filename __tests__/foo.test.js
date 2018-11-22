
jest.mock("opn");

const path = require("path");
const execa = require("execa");
const { sync: spawnSync } = execa;
const opn = require("opn");

const CLI_PATH = path.resolve(__dirname, "../bin/good-first-issue.js");

describe("myFunc", () => {
  it("should exit process on condition match", async () => {
    console.log({opn});

    try {
      const { stdout, stderr, code } = spawnSync(CLI_PATH, ["node", "-o"], {
        reject: false
      });
      console.log({stdout});
      console.log({stderr});
      console.log({code});

      expect(opn).toBeCalled();
    } catch (e) {
      throw new Error("Could not execute test:");
    }
  });
});
