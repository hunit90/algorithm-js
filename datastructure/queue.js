class Queue {
  constructor() {
    this.data = []
  }
  enqueue(data) {
    this.data.push(data)
  }

  dequeue() {
    return this.data.shift()
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

const queue = new Queue()

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.length
queue.peek()
queue.dequeue()
queue.clear()