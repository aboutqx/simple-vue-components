import { Message } from 'element-ui'
const Ok = () => {
  Message('')
}
const Err = e => {
  Message(`${e.name}: ${e.message}`)
}
const Reject = data => {
  Message({ message: data.message, type: 'warning' })
}
export { Ok, Err, Reject }
