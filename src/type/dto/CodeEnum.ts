export type CodeType = {
  code: number;
  message: string;
};

export class CodeEnum {
  static SUCCESS: CodeType = {
    code: 0,
    message: 'Success.',
  };

  static INTERNAL_ERROR: CodeType = {
    code: 50001,
    message: 'Internal error.',
  };
}
