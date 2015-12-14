using System.Collections.Generic;
using System.Linq;
using TodoListServer.DataAccess.Entities;

namespace TodoListServer.DataAccess
{
    public class TodoListRepository
    {
        public IEnumerable<ListItem> GetItems()
        {
            using (var context = new TodoListDbcontext())
            {
                var list = context.TodoLists.FirstOrDefault();
                if (list == null)
                    return new List<ListItem>();

                return list.Items;
            }
        }

        public ListItem UpdateItemCheckStatus(int itemId, bool status)
        {
            using (var context = new TodoListDbcontext())
            {
                var list = context.TodoLists.FirstOrDefault();
                if (list == null)
                    return null;

                var item = list.Items.SingleOrDefault(i => i.ID == itemId);
                if (item == null)
                    return null;

                item.IsComplete = status;

                context.SaveChanges();

                return list.Items.SingleOrDefault(i => i.ID == itemId);
            }
        }

        public void DeleteItem(int itemId)
        {
            using (var context = new TodoListDbcontext())
            {
                var list = context.TodoLists.FirstOrDefault();
                if (list == null)
                    return;

                var item = list.Items.SingleOrDefault(i => i.ID == itemId);
                if (item == null)
                    return;

                list.Items.Remove(item);
                item.TodoList = null;
                
                context.SaveChanges();
            }
        }

        public ListItem AddItem(string content)
        {
            using (var context = new TodoListDbcontext())
            {
                var list = context.TodoLists.FirstOrDefault();
                if (list == null)
                    return null;

                var item = new ListItem
                {
                    Content = content,
                    TodoListID = list.ID,
                    TodoList = list
                };

                list.Items.Add(item);

                context.SaveChanges();

                return item;
            }
        }
    }
}