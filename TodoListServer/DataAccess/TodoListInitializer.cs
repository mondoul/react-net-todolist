using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Web;
using TodoListServer.DataAccess.Entities;

namespace TodoListServer.DataAccess
{
    public class TodoListInitializer : System.Data.Entity.DropCreateDatabaseIfModelChanges<TodoListDbcontext>
    {
        protected override void Seed(TodoListDbcontext context)
        {
            var list = new TodoList
            {
                Items = new Collection<ListItem>(new [] { new ListItem
                {
                    Content = "Need to enter time in OpenAir",
                }, new ListItem
                {
                    Content = "Call my lawyer",
                    IsComplete = true
                }, new ListItem
                {
                    Content = "Go grocery shopping before it's too late."
                } })
            };

            context.TodoLists.Add(list);
            context.SaveChanges();
        }
    }
}