
export class RadioDisclaimerOptionModel {
  public disabled: boolean;
  public disclaimer: string;
  public display: string;
  public parent: string;
  public selected: boolean;
  public value: string;

  constructor(
      value: string,
      display: string,
      parent: string,
      selected: boolean = false,
      disabled: boolean = false,
      disclaimer: string = '') {
    this.disabled = disabled;
    this.disclaimer = disclaimer;
    this.display = display;
    this.parent = parent;
    this.selected = selected;
    this.value = value;
  }
}
