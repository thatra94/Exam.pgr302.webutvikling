using System.Collections.Generic;
using System.Threading.Tasks;
using exam.pgr302.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace exam.pgr302.Controllers {
    [ApiController]
    [Route("[controller]")]
    [EnableCors("AllowAnyOrigin")]
    public class FoodsController : Controller {
        private readonly FoodContext _context;
    

    public FoodsController(FoodContext context) {
        _context = context;
    }

    [HttpGet]
    public async Task<IEnumerable<Food>> Get() {
    Food newFood = new Food {Name = "strawberry", Price = 12, Type = "vegetable"}; 
    _context.Food.Add(newFood);
    await _context.SaveChangesAsync();
    
    List<Food> foodList = await _context.Food.ToListAsync();
    return foodList;
    }

    [HttpPost]
    public async Task<Food> Post(Food newFood) {
        _context.Food.Add(newFood);
        await _context.SaveChangesAsync();
        return newFood;
    }

    [HttpPut]
    public async Task<Food> Put(Food updateFood) {
        _context.Update(updateFood);
        await _context.SaveChangesAsync();
        return updateFood;
    }

    [HttpDelete("{id}")]
    public async Task<Food> Delete(int id) {
        Food FoodToDelete = await _context.Food.FirstAsync( food => food.Id == id);
        _context.Remove(FoodToDelete);
        await _context.SaveChangesAsync();
        return FoodToDelete;
        }
    }
}