using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;
using TodoListServer.DataAccess;
using TodoListServer.DataAccess.Entities;

namespace TodoListServer.Api
{
    [EnableCors("*", "*", "*")]
    [RoutePrefix("api/todo")]
    public class TodoListController : ApiController
    {
        private TodoListRepository GetRepository()
        {
            return new TodoListRepository();
        }

        [HttpGet]
        [Route("")]
        [ResponseType(typeof(IEnumerable<ListItem>))]
        public IHttpActionResult GetItems()
        {
            return Ok(GetRepository().GetItems().Select(i => new { Id = i.ID, i.Content, i.IsComplete }));
        }

        [HttpPost]
        [Route("")]
        public IHttpActionResult CheckItem(string content)
        {
            var item = GetRepository().AddItem(content);
            return Ok(item);
        }

        [HttpPut]
        [Route("{itemId:int}/{isChecked:bool}")]
        public IHttpActionResult CheckItem(int itemId, bool isChecked)
        {
            var item = GetRepository().UpdateItemCheckStatus(itemId, isChecked);
            return Ok(item);
        }

        [HttpDelete]
        [Route("{itemId:int}")]
        public IHttpActionResult DeleteItem(int itemId)
        {
            GetRepository().DeleteItem(itemId);
            return Ok();
        }

    }
}
