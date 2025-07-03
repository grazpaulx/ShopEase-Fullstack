using Microsoft.AspNetCore.Mvc;

namespace ShopEaseAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TestController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetMessage()
        {
            return Ok("Backend is working perfectly! 🎉");
        }
    }
}
