export {};

declare global {
  interface Date {
    addDays(days: number): Date;
    addYears(years: number): Date;
  }
  interface StringConstructor {
    empty: string;
    isNullOrEmpty: (val: any) => boolean;
  }
}

// date extensions
Date.prototype.addDays = function (days: number) {
  this.setDate(this.getDate() + days);
  return this;
};
Date.prototype.addYears = function (years: number) {
  this.setFullYear(this.getFullYear() + years);
  return this;
};

// string extensions
String.empty = "";
String.isNullOrEmpty = function (val: any): boolean {
  return !val ? true : false;
};
