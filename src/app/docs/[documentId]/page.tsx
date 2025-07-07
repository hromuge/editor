import Editor from "./editor";
import Toolbar from "./toolbar";

async function DocsPage({params}: {params: Promise<{documentId: string}>}) {
    const {documentId} = await params;
    return (
        <div className={"min-h-screen bg-[#FAFBFD]"}>
            <Toolbar />
            <Editor />
        </div>
    );
}
export default DocsPage;