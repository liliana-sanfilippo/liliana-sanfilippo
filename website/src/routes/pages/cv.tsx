import {Accordion} from "react-bootstrap";
import {MultiCategoryFilter} from "../../components/Filter";
import {CVItem} from "../../components/cvItem";
import {awards, edu, functions, publications, software, volunteering, workEx} from "../../data/cvData";
import {H2} from "../../components/H2";


const informatikOptions = [
    {value: 'typescript', label: 'TypeScript'},
    {value: 'javascript', label: 'JavaScript'},
    {value: 'python', label: 'Python'},
    {value: 'java', label: 'Java'},
    {value: 'css', label: 'CSS'},
    {value: 'html', label: 'HTML'},
    {value: 'react', label: 'React'},
    {value: 'angular', label: 'Angular'},
    {value: 'vue', label: 'Vue'},
    {value: 'springboot', label: 'Spring Boot'},
    {value: 'bootstrap', label: 'Bootstrap'},
    {value: 'tailwind', label: 'Tailwind'},
    {value: 'github', label: 'GitHub'},
    {value: 'gitlab', label: 'GitLab'},
    {value: 'vsc', label: 'VS Code'},
    {value: 'intellij', label: 'IntelliJ'},
    {value: 'ubuntu', label: 'Ubuntu'},
];

const softSkillsOptions = [
    {value: 'counselling', label: 'Counselling'},
    {value: 'teamwork', label: 'Teamwork'},
    {value: 'leadership', label: 'Leadership'},
    {value: 'communication', label: 'Communication'},
    // Füge hier weitere SoftSkills hinzu
]


export function Cv() {
    return (<section>
        <h2>Filter for skills</h2>
        <MultiCategoryFilter
            informatikOptions={informatikOptions}
            softSkillsOptions={softSkillsOptions}
        />
        <br/>

        <Accordion>
            <H2>Work Experience</H2>
            {workEx.map(item => (
                <CVItem props={item}/>
            ))}
            <H2>Academic Education</H2>
            {edu.map(item => (
                <CVItem props={item}/>
            ))}
            <H2>Awards</H2>
            {awards.map(item => (
                <CVItem props={item}/>
            ))}
            {/*
            <H2>Academic Functions</H2>
            {functions.map(item => (
                <CVItem props={item}/>
            ))}
            <H2> Certifications </H2>
            */}
            {/*
            <H2> Publications </H2>
            */}
            <H2>Volunteering</H2>
            {volunteering.map(item => (
                <CVItem props={item}/>
            ))}
            <H2>Publications</H2>
            {publications.map(item => (
                <CVItem props={item}/>
            ))}
            <H2>Software</H2>
            {software.map(item => (
                <CVItem props={item}/>
            ))}
        </Accordion>

        {/*


        <H2>Outreach & Press</H2>
        */}

    </section>)
}