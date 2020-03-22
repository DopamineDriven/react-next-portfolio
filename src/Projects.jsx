import React, { useState, useEffect } from "react";
import "./site.css";
import Navbar from "../Navbar/Navbar.jsx";
import ProjectData from "./ProjectData";
import ProjectDetail from "./ProjectDetail";

const Projects = ({}) => {
  const [independentProject, setIndependentProject] = useState(true);
  const [bootcampProject, setBootcampProject] = useState(true);

  const [projectList, setProjectList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true)
    new Promise((resolve) => {
      setTimeout(() => {
        resolve()
      }, 1000);
    }).then(() => {
      setIsLoading(false)
      const projectListServerFilter = ProjectData.filter(({ bootcamp, independent }) => {
        return (bootcampProject && bootcamp) || (independentProject && independent);
      })
      setProjectList(projectListServerFilter)
    })
    return () => {
      console.log("cleanup")
    }
  }, []) // [bootcampProject, independentProject]
  const handleChangeBootcamp = () => {
    setBootcampProject(!bootcampProject)
  }

  const projectListFiltered = isLoading
    ? [] : projectList
      .filter(
        ({ bootcamp, independent }) => (bootcampProject && bootcamp) || (independentProject && independent)
      )
        .sort(function(a,b) {
          if (a.title < b.title) {
            return -1
          }
          if (a.title > b.title) {
            return 1
          }
          return 0
        });

  const handleChangeIndependent = () => {
    setIndependentProject(!independentProject)
  }

  const cardioFavoriteHandler = (e, favoriteValue) => {
    e.preventDefault();
    const sessionId = parseInt(e.target.attribute["data-sessionid"].value);
    setProjectList(projectList.map(item => {
      if (item.id === sessionId) {
        item.favorite = favoriteValue;
        return item
      }
      return item;
    }))
  };

  if (isLoading) return (
    <div>
      Loading...
    </div>
  )

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="btn-toolbar mt-5 mb-5 checkbox-bigger">
          <div className="hide">
            <div className="form-check-inline">
              <label className="form-check-label">
                <input 
                  type="checkbox" 
                  className="form-check-input"
                  onChange={handleChangeBootcamp}
                  checked={bootcampProject}
                />
                Bootcamp Projects
              </label>
            </div>
            <div className="form-check-inline">
              <label className="form-check-label">
                <input 
                  type="checkbox" 
                  className="form-check-input"
                  onChange={handleChangeIndependent}
                  checked={independentProject}
                />
                Independent Projects
              </label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="card-deck">
              {projectListFiltered.map(
                ({ id, title, overview, favorite }) => {
                  return (
                    <ProjectDetail  
                      key={id}
                      id={id}
                      favorite={favorite}
                      onFavoriteCardioHandle={cardioFavoriteHandler}
                      title={title}
                      overview={overview}
                    />
                  )
                }
              )}
          </div>
        </div>
      </div>
    </div>
  )
};

export default Projects;