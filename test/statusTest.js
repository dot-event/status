// Packages
import dotEvent from "dot-event"

// Helpers
import dotStatus from "../"

// Variables
let events

// Tests
beforeEach(async () => {
  events = dotEvent()
  dotStatus({ events })
})

test("status", async () => {
  await events.status(["tasks", "task"], {
    highlight: true,
    msg: "hi",
    op: "op",
  })
})
