import { CodeEnum, CodeType } from './CodeEnum';

export class ApiResponse<TData> {
  readonly code: number;
  readonly message: string;
  readonly data: TData;

  constructor(code: number, message: string, data: TData) {
    this.code = code;
    this.message = message;
    this.data = data;
  }

  static success<TData>(data?: TData): ApiResponse<TData> {
    const { code, message } = CodeEnum.SUCCESS;
    return new ApiResponse<TData>(code, message, data);
  }

  static error<TData>(
    code: number,
    message: string,
    data?: TData,
  ): ApiResponse<TData>;

  static error<TData>(ct: CodeType, data?: TData): ApiResponse<TData>;

  // 实现签名
  static error<TData>(
    codeOrType: number | CodeType,
    messageOrData?: string | TData,
    data?: TData,
  ): ApiResponse<TData> {
    if (typeof codeOrType === 'number') {
      return new ApiResponse<TData>(codeOrType, messageOrData as string, data);
    } else {
      return new ApiResponse<TData>(
        codeOrType.code,
        codeOrType.message,
        messageOrData as TData,
      );
    }
  }
}
