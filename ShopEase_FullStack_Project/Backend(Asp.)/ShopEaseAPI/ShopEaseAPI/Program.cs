using Microsoft.EntityFrameworkCore;
using ShopEaseAPI.Data; // make sure this matches your actual namespace

var builder = WebApplication.CreateBuilder(args);

// 🔗 Add services to the container
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// ✅ Add the database context using SQL Server and the connection string from appsettings.json
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

// 🌐 Enable CORS for frontend (React at http://localhost:5173)
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend", policy =>
    {
        policy.WithOrigins("http://localhost:5173")
              .AllowAnyMethod()
              .AllowAnyHeader();
    });
});

var app = builder.Build();

// 🚀 Enable Swagger in Development mode
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// 🔐 Redirect HTTP to HTTPS
app.UseHttpsRedirection();

// 🔓 Enable the CORS policy — must be before Authorization
app.UseCors("AllowFrontend");

// 🛡 Authorization Middleware
app.UseAuthorization();

// 🔄 Map Controllers
app.MapControllers();

// ▶ Run the app
app.Run();
