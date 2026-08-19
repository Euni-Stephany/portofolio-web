type ProjectCardProps = {
    title: string;
    description: string;
};
export default function ProjectCard(props: ProjectCardProps) {
    return (
        <div>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
    </div>
    );
}