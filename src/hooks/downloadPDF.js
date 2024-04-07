export const downloadPDF = (data, name) => {
    const url = window.URL.createObjectURL(new Blob([data]));
    const link = document.createElement('a');
    link.href = url;
    var filename = name + '.pdf'
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
}
export default downloadPDF;