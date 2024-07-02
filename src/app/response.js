class Response {
  constructor(status, message, data, refrance, error) {
    this.status = status;
    this.message = message;
    this.data = data;
    this.refrance = refrance;
    this.error = error;
  }
}
export { Response };
