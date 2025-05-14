import image1 from '../projects/1.png';
import image2 from '../projects/2.png';
import image3 from '../projects/3.png';
import image4 from '../projects/34.png';
import image5 from '../projects/5.png';
import image6 from '../projects/6.png';
import './Project.css';




function Project (){
    return(
        <div>
            <div className="project-header">
                <h1>My Projects</h1>
           
            </div>
            
            <div className="project-list">
                <div className="project-item">
                   <img src={image1} alt="Project 1"  />
                   
                </div>
                <div className="project-item">
                   <img src={image2} alt="Project 1"  />
                   
                </div>
                <div className="project-item">
                   <img src={image3} alt="Project 1"  />
                  
                </div>
                <div className="project-item">
                   <img src={image4} alt="Project 1"  />
                  
                </div>
                <div className="project-item">
                   <img src={image5} alt="Project 1"  />
                    
                </div>
                <div className="project-item">
                   <img src={image6} alt="Project 1"  />
                  
                </div>Hello. Hello. I. 
                
            </div>
        </div>
    )
}
export default Project;