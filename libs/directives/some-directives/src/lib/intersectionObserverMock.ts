const intersectionObserverMock = () => ({
  observe: () => null,
});
(window as any).IntersectionObserver = jest
  .fn()
  .mockImplementation(intersectionObserverMock);
