export const downloadExcel = (data, name) => {
    const url = window.URL.createObjectURL(new Blob([data]));
    const link = document.createElement('a');
    link.href = url;
    const date = new Date();
    let currentDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}-${date.getSeconds()}`;
    var filename = name + currentDate + '.xlsx'
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
}
export default downloadExcel;