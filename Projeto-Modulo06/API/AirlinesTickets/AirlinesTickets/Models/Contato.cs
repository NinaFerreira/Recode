using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace AirlinesTickets.Models
{
    [Table("Contato")]
    public class Contato
    {

        [Key]
        public int IdContato { get; set; }

        [Required(ErrorMessage = "Informe seu nome.")]
        public string Nome { get; set; }

        [Required(ErrorMessage = "Informe seu E-mail.")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Informe sua Mensagem de texto")]
        public string Mensagem { get; set; }


    }
    
}
