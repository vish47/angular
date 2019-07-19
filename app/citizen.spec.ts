import { Citizen } from './citizen';

describe('Citizen', () => {
  it('should create an instance', () => {
    expect(new Citizen(this.cusername,this.cpass)).toBeTruthy();
  });
});
