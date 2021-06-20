# %%

class Stack:
    def __init__(self):
        self.data = []

    def add(self, record):
        self.data.append(record)

    def remove(self):
        if self.data:
            return self.data.pop()

    def peek(self):
        if self.data:
            return self.data[-1]

    def __repr__(self):
        return str(self.data)


class Queue:
    def __init__(self):
        self.main = Stack()
        self.helper = Stack()

    def add(self, record):
        self.main.add(record)

    def remove(self):
        while self.main.peek():
            self.helper.add(self.main.remove())

        result = self.helper.remove()

        while self.helper.peek():
            self.main.add(self.helper.remove())

        return result

    def peek(self):
        while self.main.peek():
            self.helper.add(self.main.remove())

        result = self.helper.peek()

        while self.helper.peek():
            self.main.add(self.helper.remove())

        return result

    def __repr__(self):
        return str(self.main.data)


q = Queue()
q.add('a')
q.add('b')
q.add('c')

print(q)
print(q.peek())
print(q.remove())
print(q)
