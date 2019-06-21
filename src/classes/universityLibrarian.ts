import * as Interfaces from '../interfaces';
import { sealed, logger, writable, logMethod, logParameter, format } from '../decorators';

@logger
@sealed('UniversityLibrarian')
class UniversityLibrarian implements Interfaces.Librarian {
  @format('123') name: string;
  email: string;
  department: string;

  @logMethod
  assistCustomer(@logParameter custName: string): void {
    console.log(`${this.name} is assisting ${custName}`);
  }

  @writable(true)
  assistFaculty() {
    console.log('Assisting Faculty');
  }

  @writable(false)
  teachCommunity() {
    console.log('Teaching Community');
  }
}

export {
  UniversityLibrarian
};