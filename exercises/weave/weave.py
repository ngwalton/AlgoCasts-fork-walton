# %%

from collections import deque


class Queue:
    def __init__(self):
        self._data = deque()

    def add(self, record):
        self._data.appendleft(record)

    def remove(self):
        if self._data:
            return self._data.pop()

    def peek(self):
        if self._data:
            return self._data[-1]

        return None

    def __repr__(self):
        return repr(self._data).replace("deque", "Queue")


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
