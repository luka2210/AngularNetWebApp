import { TestBed } from '@angular/core/testing';

import { EmployeesService } from './EmployeesService';

describe('EmployeesService', () => {
  let service: EmployeesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
