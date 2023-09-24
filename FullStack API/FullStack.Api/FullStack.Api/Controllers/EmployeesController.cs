using FullStack.Api.Data;
using FullStack.Api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FullStack.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmployeesController : Controller
    {
        private readonly FullStackDbContext _fullStackDbContext;

        public EmployeesController(FullStackDbContext fullStackDbContext)
        {
            _fullStackDbContext = fullStackDbContext;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllEmployees()
        {
            var employees = await _fullStackDbContext.Employees.ToListAsync();

            return Ok(employees);
        }

        [HttpPut]
        public async Task<IActionResult> UpdateEmployee([FromBody] Employee updatedEmployee)
        {
            Employee employee = await _fullStackDbContext.Employees.FirstOrDefaultAsync(employee => employee.Id == updatedEmployee.Id);
            if (employee == null)
                return NotFound();

            _fullStackDbContext.Remove(employee);
            await _fullStackDbContext.SaveChangesAsync();
            await _fullStackDbContext.AddAsync(updatedEmployee);
            await _fullStackDbContext.SaveChangesAsync();

            return Ok(employee);
        }

        [HttpPost]
        public async Task<IActionResult> AddEmployee([FromBody] Employee employee)
        {
            employee.Id = Guid.NewGuid();
            await _fullStackDbContext.Employees.AddAsync(employee);
            await _fullStackDbContext.SaveChangesAsync();

            return Ok(employee);
        }

        [HttpGet]
        [Route("{id:Guid}")]
        public async Task<IActionResult> GetEmployee([FromRoute] Guid id)
        {
            Employee employee = await _fullStackDbContext.Employees.FirstOrDefaultAsync(employee => employee.Id == id);
            if (employee == null)
                return NotFound();

            return Ok(employee);   
        }

        [HttpDelete]
        [Route("{id:Guid}")]
        public async Task<IActionResult> DeleteEmployee([FromRoute] Guid id)
        {
            Employee employee = await _fullStackDbContext.Employees.FirstOrDefaultAsync(employee => employee.Id == id);
            if (employee == null)
                return NotFound();

            _fullStackDbContext.Remove(employee);
            await _fullStackDbContext.SaveChangesAsync();

            return Ok(employee);
        }
    }
}
