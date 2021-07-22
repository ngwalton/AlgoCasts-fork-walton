def chunk(inList: list = [], size: int = 0) -> list:
    if size < 0 or not isinstance(size, int):
        raise ValueError('size must be positive integer.')
    size = size or len(inList)
    chunked = []
    start = 0

    while start < len(inList):
        chunked.append(inList[start:start+size])
        start += size

    return chunked
