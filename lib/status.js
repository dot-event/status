// Packages
import chalk from "chalk"

// Composer
export default function(options) {
  const { events } = options

  if (events.ops.has("status")) {
    return options
  }

  events.onAny({ status })

  return options
}

export async function status(options) {
  const { fail, highlight, op, props, msg } = options
  const msgs = Array.isArray(msg) ? msg : [msg]

  // eslint-disable-next-line no-console
  console.log(
    fail ? "🚨" : "☑️ ",
    chalk.bold[fail ? "red" : "green"](op),
    chalk.bold.gray(props[1]),
    ...msgs.map(m => (highlight ? chalk.inverse(m) : m))
  )
}
