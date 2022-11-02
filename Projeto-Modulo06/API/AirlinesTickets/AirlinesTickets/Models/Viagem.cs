using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AirlinesTickets.Models
{
    [Table("Viagem")]
    public class Viagem
    {
        [Key]
        public int IdViagem { get; set; }

        [Required(ErrorMessage = "Informe a origem de sua viagem.")]
        public string Origem { get; set; }

        public string Destino { get; set; }

        public string Valor { get; set; }

        [Required(ErrorMessage = "Informe sua Data de Ida.")]

        public DateTime DataIda { get; set; }

        public DateTime DataVolta { get; set; }


        public static implicit operator Viagem(Task<ActionResult<Viagem>> v)
        {
            throw new NotImplementedException();
        }
    }
}
