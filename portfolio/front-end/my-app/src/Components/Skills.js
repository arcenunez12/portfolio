import { Card, CardBody, CardImg} from "reactstrap";
import htmlPic from '../Photos/html-3.png';
import cssPic from '../Photos/css-3.png';
import bootstrapPic from '../Photos/bootstrap-1.png';
import javaPic from '../Photos/java-1.png';
import javascriptPic from '../Photos/jscript (1).png';
import pythonPic from '../Photos/python (1).png';
import uipathPic from '../Photos/uipath2.png';
import gitPic from '../Photos/git (1).png';
import reactPic from '../Photos/react.png';
function Skills () {
    return (
        <section id="skills">
        <div className="skills-container-1">
        <h1 id="skills-header">
                Skills
            </h1>
            <div className="skills-container">
                <div className="skills-card">
                    <Card
                        className="my-2"
                        color="primary"
                        outline
                        style={{
                            width: '18rem'
                        }}>
                        <CardImg
                            alt="html-logo"
                            src={htmlPic}
                            >
                        </CardImg>
                        <CardBody>
                            Structuring the web's content using modern semantic HTML.
                        </CardBody>
                    </Card>
                </div>
                <div className="skills-card">
                    <Card
                        className="my-2"
                        color="primary"
                        outline
                        style={{
                            width: '18rem'
                        }}>
                        <CardImg
                            alt="css-logo"
                            src={cssPic}
                            >
                        </CardImg>
                        <CardBody>
                            Presenting beautiful web designs and interactions using modern CSS.
                        </CardBody>
                    </Card>
                </div>
                <div className="skills-card">
                    <Card
                        className="my-2"
                        color="primary"
                        outline
                        style={{
                            width: '18rem'
                        }}>
                        <CardImg
                            alt="bootstrap-logo"
                            src={bootstrapPic}
                            >
                        </CardImg>
                        <CardBody>
                            Rapidly developing responsive websites using the web's most popular framework.
                        </CardBody>
                    </Card>
                </div>
                <div className="skills-card">
                    <Card
                        className="my-2"
                        color="primary"
                        outline
                        style={{
                            width: '18rem'
                        }}>
                        <CardImg
                            alt="java-logo"
                            src={javaPic}
                            >
                        </CardImg>
                        <CardBody>
                            Creating interactive programs with Java and use object-orientated principles. Experience 
                            creating full-stack web apps with Springboot and 3-tier archiecture.
                        </CardBody>
                    </Card>
                </div>
                <div className="skills-card">
                    <Card
                        className="my-2"
                        color="primary"
                        outline
                        style={{
                            width: '18rem'
                        }}>
                        <CardImg
                            alt="javascript-logo"
                            src={javascriptPic}
                            >
                        </CardImg>
                        <CardBody>
                            Making interactive experiences, web apps, and more using javascript.
                        </CardBody>
                    </Card>
                </div>
                <div className="skills-card">
                    <Card
                        className="my-2"
                        color="primary"
                        outline
                        style={{
                            width: '18rem'
                        }}>
                        <CardImg
                            alt="react-logo"
                            src={reactPic}
                            >
                        </CardImg>
                        <CardBody>
                            Creating reusable and self-contained componenets to create dynamic web apps.
                        </CardBody>
                    </Card>
                </div>
                <div className="skills-card">
                    <Card
                        className="my-2"
                        color="primary"
                        outline
                        style={{
                            width: '18rem'
                        }}>
                        <CardImg
                            alt="python-logo"
                            src={pythonPic}
                            >
                        </CardImg>
                        <CardBody>
                            Creating programs to evaluate data. Used primarly with bioinformatics.
                        </CardBody>
                    </Card>
                </div>
                <div className="skills-card">
                    <Card
                        className="my-2"
                        color="primary"
                        outline
                        style={{
                            width: '18rem'
                        }}>
                        <CardImg
                            alt="uipath-logo"
                            src={uipathPic}
                            >
                        </CardImg>
                        <CardBody>
                            Triaging and debugging bots created with UiPath.  
                        </CardBody>
                    </Card>
                </div>
                <div className="skills-card">
                    <Card
                        className="my-2"
                        color="primary"
                        outline
                        style={{
                            width: '18rem'
                        }}>
                        <CardImg
                            alt="git-logo"
                            src={gitPic}
                            >
                        </CardImg>
                        <CardBody>
                            Using git in terminal to update code in github.
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
        </section>

    );
}

export default Skills;