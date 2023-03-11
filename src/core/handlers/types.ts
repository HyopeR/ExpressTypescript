export type HandlerOptions = Partial<{
  message: string;
  detail: any;
  statusCode: number;
  extra: ExtraField;
}>;

export type ExtraField = Partial<{
  total: number;
}>;
