using AirlinesTickets.Models;
using Microsoft.EntityFrameworkCore;

namespace AirlinesTickets.Model
{
    public class AirlinesTicketDbContext : DbContext
    {
        public AirlinesTicketDbContext(DbContextOptions<AirlinesTicketDbContext> options) : base(options)
        { }

        public DbSet<Viagem> Viagem { get; set; }

        public DbSet<Cliente> Cliente { get; set; }

        public DbSet<Contato> Contato { get; set; }
    }
}
