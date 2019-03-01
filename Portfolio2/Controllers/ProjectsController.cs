using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Portfolio2.Data;
using Portfolio2.Models;


namespace Portfolio2.Controllers
{
    [Route("api/controller")]
    [ApiController]
    public class ProjectsController : ControllerBase
    {
        private readonly PortfolioContext context;
        ProjectsDB db;

        public ProjectsController(PortfolioContext context)
        {
            this.context = context;
            db = new ProjectsDB(context);
        }


        [HttpGet]
        public List<Project> GetAllProjects()
        {
            return db.GetAllProjects();
        }

    }
}