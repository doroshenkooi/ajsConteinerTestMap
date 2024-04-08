export default class errorRepository {
    constructor() {
      this.errors = new Map();
      this.errors.set(500, 'Internal Server Error');
      this.errors.set(404, 'Not Found');
      this.errors.set(400, 'Bad Request');
    }
  
    translate(code) {
      if (this.errors.has(code)) {
        return this.errors.get(code);
      }
      return 'unknown error';
    }
  }
  