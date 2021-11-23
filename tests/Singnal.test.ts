import { Signal } from '../src/Signal';

describe('>>> Signal', () => {
  let s: Signal<any>;

  beforeEach(() => {
    s = new Signal();
    expect(s.listeners.length).toBe(0);
  });

  it('should be defined', () => {
    expect(s).toBeDefined();
  });

  it('should dispatch on dispatch', () => {
    const spy = jest.fn();
    s.add(spy);
    s.dispatch();
    expect(spy).toHaveBeenCalled();
  });

  it('should add a new listener on add', () => {
    const spy = jest.fn();
    s.add(spy);
    expect(s.listeners.length).toBe(1);
  });

  it('should remove a listener on remove', () => {
    const spy = jest.fn();
    s.add(spy);
    expect(s.listeners.length).toBe(1);
    s.remove(spy);
    expect(s.listeners.length).toBe(0);
  });

  it('should dispatch but not removed listeners', () => {
    const spy1 = jest.fn();
    const spy2 = jest.fn();

    s.add(spy1);
    expect(s.listeners.length).toBe(1);

    s.add(spy2);
    expect(s.listeners.length).toBe(2);

    s.remove(spy1);
    expect(s.listeners.length).toBe(1);

    s.dispatch();
    expect(spy1).toHaveBeenCalledTimes(0);
    expect(spy2).toHaveBeenCalled();
  });

  it('should remove all listeners on removeAll', () => {
    const spy = jest.fn();
    const count = 5;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    [...Array(count)].forEach(() => s.add(spy));
    expect(s.listeners.length).toBe(count);
    s.removeAll();
    expect(s.listeners.length).toBe(0);
  });
});
