import React from "react";
import { Image, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import * as images from "./images.js";
import * as routes from "./routes.js";
import * as externalRoutes from "./externalRoutes.js";

export const ACE_EDITOR_DOCS = {
	reactDocument: {
		fileExtension: "jsx",
		fileContent: 
		`class ReactSampleCode extends Component {
			constructor (props){
				super(props);
				this.state = {
					isPortalOpen: false
				};
			}

			handlePortalClick = () => alert( 'hello ' )
			handlePortalClose = () => this.setState( {isPortalOpen: false} );

			render () {
				const passToProps = {
					objectFromContainer: {...items.GALLERY_CARD_ITEMS},
					group: CardGroup,
					itemsPerRow: "3",
					wrapper: CardContainer,
				}
				const props = {card: <GenerateListContainer {...passToProps} />};

				return <GalleryComponent {...props} />;
			}
		}

		export default ReactSampleCode;`,
		fileLanguage: "React"
	},
	javaDocument: {
		fileExtension: "java",
		fileContent: 
		`public void createCleanNewFile(){
		try {
			BufferedReader bufferedReader = new BufferedReader(new FileReader(fileName));
			String line;
			Boolean insideOfCommentBlock = false;

			File cleanNewFile = new File("new" + fileName);

			boolean createdNewFileOrDeleteIt = (!cleanNewFile.exists()) ? cleanNewFile.createNewFile(): cleanNewFile.delete();

			while ((line = bufferedReader.readLine()) != null){
				BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(cleanNewFile.getAbsoluteFile(), true));

				if (!line.isEmpty()) {
					if (line.trim().charAt(0) == '*' && insideOfCommentBlock) {
						continue;
					}
				}
				if(line.contains("/*") || line.contains("//")){
					insideOfCommentBlock = true;
					continue;
				}
				else {
					bufferedWriter.write(line + "\n");
					bufferedWriter.close();
				}
			}
		}catch (IOException exception){
			exception.printStackTrace();
		}
	}`,
		fileLanguage: "Java"
	}
}

export const SEMANTIC_COLORS = {
	// red: "red",
	// orange: "orange",
	// yellow: "yellow",
	// olive: "olive",
	// green: "green",
	// teal: "teal",
	// blue: "blue",
	violet: "violet",
	purple: "purple",
	pink: "pink",
	// brown: "brown",
	// grey: "grey",
	// black: "black"
}


export const RESUME = {
	BASIC_INFO: {
		name: <h1>Marvin Moise</h1>,
		label: "Software Engineer Intern",
		email: "marvinmoise223@gmail.com",
		phone: "404-573-0968"
	},
	EDUCATION: {
		degree: <strong>Degree: Bachelor of Science in Computer Science</strong> ,
		university: <strong>University: Kennesaw State University</strong>,
		gpa: <strong>GPA: 3.3</strong>,
		expected_graduation: <strong>Expected Graduation: fall 2018</strong>
	},
	TECHNICAL_EXPERIENCES: {
		java: "Java",
		react: "React",
		dedux: "Redux",
		heroku: "Heroku",
		version_one: "Version one",
		code_climate: "Code Climate",
		jenkins: "Jenkins",
		trello: "Trello",
		vsCode: "Visual Studio Code",
		git: "Git",
		agile: "Agile",
		semantic_ui: "Semantic_Ui"
	},
	OBJECTIVE: {
		objective: `Seeking a full-time opportunity where my experiences and 
					abilities will be efficiently utilized while providing 
					opportunities for advancement.`
	},
	SUMMARY_OF_QUALIFICATION: {
		qualification_one: "Excellent analytical skills with a capacity to grasp technical details",
		qualification_two: "Excellent collaborative skills within the workplace",
		qualification_three: "Passionate about producing quality work that’ll exceed business needs"
	},
	ON_CAMPUS_ORGANIZATIONS: {
		organization_ACM: "ACM",
		organization_IEEE: "IEEE",
		organization_BDPA: "Black Data Processing Association",
		organization_ISA: "International Student Association",
		organization_AASA: "African American Student Alliance",
		organization_KBDT: "KSU Break Dance Team",
		organization_KCT: "KSU Cycling Team"
	},
	WORK_EXPERIENCE: {
		stateFarm: {
			company_name: "State Farm",
			company_location: "Atlanta GA",
			startDate_endDate: "May 2017 - Present",
			currentTitle: "Software Engineer Intern"
		},
		ksu_teacher_assistant: {
			company_name: "Kennesaw State University",
			company_location: "Kennesaw GA",
			startDate_endDate: "Jan 2016 - fall 2016",
			currentTitle: "Teachers Assistant"
		},
		ksu_bike_ksu: {
			company_name: "KSU Bike Shop",
			company_location: "Kennesaw Ga",
			stateDate_endDate: "Jan 2016 - fall 2017",
			currentTitle: "Bike Tech"
		}
	}
}

export const GET_NAV_BAR_ITEM = {
	NAV_BAR_LOGO: {
		as: Link,
		icon: <Image size="tiny" src={images.NAV_BAR_LOGO} avatar />,
		to: "/",
		position: "left",
	},
	NAV_BAR_HOME: {
		as: Link,
		name: "home",
		to: routes.LANDING,
		//active: () => this.state.activeItem === this.NAV_BAR_DEN_STORIES.name,
		//onClick: () => this.handleItemClick()
	},
	NAV_BAR_RESUME: {
		as: Link,
		name: "resume",
		to: routes.RESUME
	},
	NAV_BAR_DEN_STORIES: {
		as: Link,
		name: "stories from the den",
		to: routes.DEN_STORIES,
	},
	NAV_BAR_GALLERY: {
		as: Link,
		name: "gallery",
		to: routes.GALLERY,
	},
	NAV_BAR_GIT_HUB: {
		as: "a",
		to: externalRoutes.GIT_HUB,
		href: externalRoutes.GIT_HUB,
		icon: <Icon name="github" size="big" color="teal" />,
		position: "right",
	},
	NAV_BAR_LINKEDIN: {
		as: "a",
		to: externalRoutes.GIT_HUB,
		href: externalRoutes.LINKEDIN, 
		icon: <Icon name="linkedin" size="big" color="violet" />,
	}
};
