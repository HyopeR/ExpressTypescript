import { ErrorHandler } from '../handlers';

class ErrorDescriptive {
  route_not_found!: ErrorHandler;
  unexpected_error!: ErrorHandler;
  predicted_error!: ErrorHandler;
  dto_error!: ErrorHandler;

  token_is_missing!: ErrorHandler;
  token_invalid!: ErrorHandler;
  token_authorization_fail!: ErrorHandler;
  token_expired!: ErrorHandler;

  wrong_email!: ErrorHandler;
  wrong_password!: ErrorHandler;

  file_max_size!: ErrorHandler;
  file_type_not_allowed!: ErrorHandler;
  file_upload!: ErrorHandler;
  file_remove!: ErrorHandler;
  file_move!: ErrorHandler;
}

ErrorDescriptive.prototype.route_not_found = new ErrorHandler(
  'route_not_found',
  'Route not found.',
  {
    statusCode: 404,
  }
);
ErrorDescriptive.prototype.unexpected_error = new ErrorHandler(
  'unexpected_error',
  'Unexpected error.'
);

ErrorDescriptive.prototype.predicted_error = new ErrorHandler(
  'predicted_error.',
  'Predicted error.'
);
ErrorDescriptive.prototype.dto_error = new ErrorHandler(
  'dto_error',
  'The data contained in the request body is missing or incorrect.'
);

ErrorDescriptive.prototype.wrong_email = new ErrorHandler(
  'wrong_email',
  'Your email is not correct.'
);
ErrorDescriptive.prototype.wrong_password = new ErrorHandler(
  'wrong_password',
  'Your password is not correct.'
);

ErrorDescriptive.prototype.token_is_missing = new ErrorHandler(
  'token_is_missing',
  'A valid token is missing.'
);
ErrorDescriptive.prototype.token_invalid = new ErrorHandler(
  'token_invalid',
  'Token is invalid.'
);
ErrorDescriptive.prototype.token_authorization_fail = new ErrorHandler(
  'token_authorization_fail',
  'You do not have the necessary authorization for this action.'
);
ErrorDescriptive.prototype.token_expired = new ErrorHandler(
  'token_expired',
  'The token has expired.'
);

ErrorDescriptive.prototype.file_max_size = new ErrorHandler(
  'file_max_size',
  'Maximum aws size exceeded.'
);
ErrorDescriptive.prototype.file_type_not_allowed = new ErrorHandler(
  'file_type_not_allowed',
  'The aws type is not valid.'
);
ErrorDescriptive.prototype.file_upload = new ErrorHandler(
  'file_upload',
  'There was a problem uploading the aws.'
);
ErrorDescriptive.prototype.file_remove = new ErrorHandler(
  'file_remove',
  'There was a problem remove the aws.'
);
ErrorDescriptive.prototype.file_move = new ErrorHandler(
  'file_move',
  'There was a problem move the aws.'
);

const Exception = new ErrorDescriptive();
export default Exception;
export { ErrorDescriptive };
