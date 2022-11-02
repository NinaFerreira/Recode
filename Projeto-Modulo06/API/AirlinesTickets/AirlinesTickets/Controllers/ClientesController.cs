using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AirlinesTickets.Model;
using AirlinesTickets.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;

namespace AirlinesTickets.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClientesController : ControllerBase
    {
        private readonly AirlinesTicketDbContext _context;
        public ClientesController(AirlinesTicketDbContext context)
        {
            _context = context;
        }

        [HttpGet("BuscarClientes")]
        public async Task<ActionResult<IEnumerable<Cliente>>> GetCliente()
        {
            List<Cliente> clientes = await _context.Cliente.ToListAsync();

            foreach(var item in clientes)
            {
                item.viagem = _context.Viagem.Where(cl => cl.IdViagem == item.ViagemId).FirstOrDefault();
            }

            return clientes;
        }

        [HttpGet("BuscarCliente/{id}")]
        public async Task<ActionResult<Cliente>> GetCliente(int id)
        {
            var cliente = await _context.Cliente.FindAsync(id);

            if (cliente == null)
            {
                return NotFound();
            }

            return cliente;
        }

        [HttpPut("AlterarCliente/{id}")]
        public async Task<IActionResult> PutCliente(int id, Cliente cliente)
        {
            if (id != cliente.IdCliente)
            {
                return BadRequest();
            }

            _context.Entry(cliente.viagem).State = EntityState.Modified;
            _context.Entry(cliente).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ClienteExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        [HttpPost("AdicionarCliente")]
        public async Task<ActionResult<Cliente>> PostCliente(Cliente cliente)
        {
            _context.Viagem.Add(cliente.viagem);
            _context.Cliente.Add(cliente);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCliente", new { id = cliente.IdCliente }, cliente);
        }

        [HttpDelete("ApagarCliente/{id}")]
        public async Task<IActionResult> DeleteCliente(int id)
        {
            var cliente = await _context.Cliente.FindAsync(id);
            if (cliente == null)
            {
                return NotFound();
            }

            _context.Cliente.Remove(cliente);
            _context.Viagem.Remove(cliente.viagem);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ClienteExists(int id)
        {
            return _context.Cliente.Any(e => e.IdCliente == id);
        }
    }
}
