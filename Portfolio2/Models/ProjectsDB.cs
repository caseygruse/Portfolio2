using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Portfolio2.Data;

namespace Portfolio2.Models
{
    public class ProjectsDB
    {
        private PortfolioContext context;

        private List<Project> GetAllProjects(PortfolioContext context)
        {
            List<Project> AllProjects = context.Projects.ToList();
            return AllProjects;
        }

        private void CreateProject(PortfolioContext context, Project project)
        {
            context.Projects.Add(project);
            context.SaveChanges();
        }
    }
}
