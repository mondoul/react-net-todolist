using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using TodoListServer.DataAccess.Entities;

namespace TodoListServer.DataAccess
{
    public class TodoListDbcontext : DbContext
    {
        public TodoListDbcontext() : base("TodoListContextDb")
        {
            Database.SetInitializer(new TodoListInitializer());
        }

        public DbSet<TodoList> TodoLists { get; set; }
        public DbSet<ListItem> ListItems { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
        }
    }
}