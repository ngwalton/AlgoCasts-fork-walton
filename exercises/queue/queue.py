class Queue:
    def __init__(self):
        self.data = []

    def add(self, record):
        self.data.insert(0, record)

    def remove(self):
        return self.data.pop()

    def peek(self):
        return self.data[-1]


q = Queue()

q.add(1)
q.add('a')
print(q.remove())
print(q.peek())
