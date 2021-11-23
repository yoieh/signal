import { Signal } from './Signal';
import { SignalListener } from './SignalListener';

describe('>>> SignalListener', () => {
  let s: Signal<any>;

  beforeEach(() => {
    s = new Signal();
    expect(s.listeners.length).toBe(0);
  });

  it('should trigger listener function', () => {
    const spy = jest.fn();
    const l = new SignalListener(s, spy);
    expect(s.listeners.length).toBe(1);

    s.dispatch();

    expect(spy).toHaveBeenCalled();

    l.dispose();
    expect(s.listeners.length).toBe(0);
  });

  it('should dispose on dispose', () => {
    const l = new SignalListener(s, () => {
      return null;
    });

    expect(s.listeners.length).toBe(1);
    l.dispose();
    expect(s.listeners.length).toBe(0);
  });

  it('should dispatch but not dispose listeners', () => {
    const spy1 = jest.fn();
    const l1 = new SignalListener(s, spy1);
    expect(s.listeners.length).toBe(1);

    const spy2 = jest.fn();
    new SignalListener(s, spy2);
    expect(s.listeners.length).toBe(2);

    l1.dispose();
    expect(s.listeners.length).toBe(1);

    s.dispatch();
    expect(spy1).toHaveBeenCalledTimes(0);
    expect(spy2).toHaveBeenCalled();
  });
});
