import 'react-native';
import { testId } from './test-id';

describe('Format currency number money', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  it('should conver int to money string correctly', () => {
    const string = 'identifier';
    const camelCase = testId(string);
    expect(camelCase).toEqual('test:id/identifier');
  });
});
