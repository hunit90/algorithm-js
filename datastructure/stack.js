class Stack {
  constructor() {
    this.data = []
  }
  push(data) {
    this.data.push(data)
  }

  pop() {
    return this.data.pop()
  }

  peek() {
    return this.data[this.data.length - 1]
  }

  get length() {
    return this.data.length
  }

  clear() {
    this.data = []
  }
}

const stack = new Stack()

stack.push(10)
stack.push(20)
stack.push(30)
stack.length
stack.peek()
stack.pop()
stack.clear()