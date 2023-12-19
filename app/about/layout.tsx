import { startCase } from "lodash";



export async function generateMetadata() {

    return {
        title: startCase("About" || "organization"),
    };
};

const AboutLayout = ({
    children
}: {
    children: React.ReactNode
    }) => {
    return (
        <>
        {children}
        </>
    )
}

export default AboutLayout;