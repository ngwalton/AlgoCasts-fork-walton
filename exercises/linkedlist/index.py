class Node:
    def __init__(self, data, next = None):
        self.data = data
        self.next = next

class LinkedList:
    def __init__(self):
        self.head = None
        self.node = None
    def getAt(self, index):
        node = self.head
        count = 0
        while (node):
            if count == index:
                return node
            node = node.next
            count += 1
        return None
    def getFirst(self):
        return self.getAt(0)
    def size(self):
        node = self.head
        count = 0
        while (node):
            node = node.next
            count += 1
        return count
    def getLast(self):
        return self.getAt(self.size() - 1)
    def insertAt(self, data, index):
        if not self.head:
            self.head = Node(data)
            return
        if index == 0:
            self.head = Node(data, self.head)
            return
        previous = self.getAt(index) or self.getLast()
        previous.next = Node(data, previous.next)
    def insertFirst(self, data):
        self.insertAt(data, 0)
    def insertLast(self, data):
        self.insertAt(data, self.size())
    def removeAt(self, index):
        if not self.head:
            return
        if index == 0:
            self.head = self.head.next
        previous = self.getAt(index - 1)
        if not (previous and previous.next):
            return
        previous.next = previous.next.next
    def removeFirst(self):
        self.removeAt(0)
    def removeLast(self):
        self.removeAt(self.size() - 1)
    def clear(self):
        self.head = None
    # def __iter__(self):
    #     return self
    # def __next__(self):
    #     self.node = self.head




x = LinkedList()
x.insertAt('a', 2)
x.getFirst().data == 'a'

x.insertFirst('b')
x.getFirst().data == 'b'

x.insertLast('c')
x.getLast().data == 'c'

x.size() == 3

for i in range(x.size()):
    print(x.getAt(i).data) 
# b
# a
# c


x.removeAt(1)
x.getAt(1).data == 'c'

x.removeLast()
x.getLast().data == 'b'

x.removeFirst()
x.size() == 0

x.insertFirst('x')
x.insertFirst('y')
x.insertFirst('z')
x.size() == 3
x.clear()
x.size() == 0
