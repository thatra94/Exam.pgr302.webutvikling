using Microsoft.EntityFrameworkCore;

namespace exam.pgr302.Models{
    public class FoodContext : DbContext {
        
    public FoodContext(DbContextOptions<FoodContext> options) :base(options) {}

    public DbSet<Food> Food { get; set;}
    }
}