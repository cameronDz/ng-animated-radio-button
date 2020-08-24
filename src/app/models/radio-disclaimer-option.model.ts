
export class RadioDisclaimerOptionModel {
  public disabled: boolean;
  public disclaimer: string;
  public display: string;
  public selected: boolean;
  public value: string;

  constructor(
      value: string,
      display: string,
      selected: boolean = false,
      disabled: boolean = false,
      disclaimer: string = '') {
    this.disabled = disabled;
    this.disclaimer = disclaimer;
    this.display = display;
    this.selected = selected;
    this.value = value;
  }
}
