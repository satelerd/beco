import htmlContent from 'path/to/html/file.html';


function App() {
    return (
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    );
}
