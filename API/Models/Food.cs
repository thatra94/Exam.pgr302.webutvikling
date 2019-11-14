using System.ComponentModel.DataAnnotations;

namespace exam.pgr302.Models
{
    public class Food {
        [Key]
        public int Id { get; set; }
        
        public string Name { get; set; }

        public int Price { get; set; }

        public string Type { get; set; }
        }

}