using System.Collections.ObjectModel;

namespace TodoListServer.DataAccess.Entities
{
    public class TodoList
    {
        public int ID { get; set; }
        public virtual Collection<ListItem> Items { get; set; }
    }
}