import { DynamicFormArray } from './dynamic-form-array';

describe('DynamicFormArray', () => {
  it('adds and removes controls from the skills array', () => {
    const component = new DynamicFormArray();

    component.addSkill();
    component.addSkill();
    component.removeSkill(1);

    expect(component.skills.length).toBe(2);
  });

  it('accepts a valid list of skills', () => {
    const component = new DynamicFormArray();

    component.skills.at(0).setValue('Angular');
    component.addSkill();
    component.skills.at(1).setValue('TypeScript');

    expect(component.form.valid).toBe(true);
  });
});
