import { ErrorHandler, HandlerOptions } from '../handlers';

export { ErrorHandler };
export const Exception = {
  error: (key: string, options?: HandlerOptions) =>
    new ErrorHandler(key, options),

  route_not_found: new ErrorHandler('route_not_found', {
    statusCode: 404,
  }),
  unexpected_error: new ErrorHandler('unexpected_error'),

  predicted_error: new ErrorHandler('predicted_error.'),
  dto_error: new ErrorHandler('dto_error'),

  wrong_email: new ErrorHandler('wrong_email'),
  wrong_password: new ErrorHandler('wrong_password'),

  token_is_missing: new ErrorHandler('token_is_missing'),
  token_invalid: new ErrorHandler('token_invalid'),
  token_authorization_fail: new ErrorHandler('token_authorization_fail'),
  token_expired: new ErrorHandler('token_expired'),

  file_max_size: new ErrorHandler('file_max_size'),
  file_type_not_allowed: new ErrorHandler('file_type_not_allowed'),
  file_upload: new ErrorHandler('file_upload'),
  file_remove: new ErrorHandler('file_remove'),
  file_move: new ErrorHandler('file_move'),
};
