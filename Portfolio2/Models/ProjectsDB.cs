using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Portfolio2.Data;
using Microsoft.EntityFrameworkCore;


namespace Portfolio2.Models
{
    public class ProjectsDB
    {
        PortfolioContext context;

        public ProjectsDB(PortfolioContext context)
        {
            this.context = context;
        }

        public List<Project> GetAllProjects()
        {
            List<Project> AllProjects = context.Projects.ToList();
            return AllProjects;
        }

        public void CreateProject(Project project)
        {
            context.Projects.Add(project);
            context.SaveChanges();
        }
    }
}
