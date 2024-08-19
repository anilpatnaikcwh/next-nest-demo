export {};

declare global {
  interface StringConstructor {
    empty: string;
    isNullOrEmpty: (val: any) => boolean;
  }
}

String.empty = "";
String.isNullOrEmpty = function (val: any): boolean {
  return !val ? true : false;
};
