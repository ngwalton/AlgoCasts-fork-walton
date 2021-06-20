# %%

class Queue:
    def __init__(self):
        self.data = []

    def add(self, record):
        self.data.insert(0, record)

    def remove(self):
        if self.data:
            return self.data.pop()

    def peek(self):
        if self.data:
            return self.data[-1]
        return None

    def __repr__(self):
        rep = self.data[:]
        rep.reverse()
        return str(rep)


def weave(q1, q2):
    result = Queue()

    while q1.peek() or q2.peek():
        if q1.peek():
            result.add(q1.remove())
        if q2.peek():
            result.add(q2.remove())

    return result


qu1 = Queue()
qu2 = Queue()

qu1.add('a')
qu1.add('b')
qu2.add(1)
qu2.add(2)
qu2.add(3)

qu = weave(qu1, qu2)
print(qu)
while qu.peek():
    print(qu.remove())


# %%
