namespace TodoListServer.DataAccess.Entities
{
    public class ListItem
    {
        public int ID { get; set; }
        public int TodoListID { get; set; }
        public string Content { get; set; }
        public bool IsComplete { get; set; }

        public virtual TodoList TodoList { get; set; }
    }
}