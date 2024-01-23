export const formatDate = (date)=>{
    const hours = new Date(date).getHours();
    const minutes = new Date(date).getMinutes();

    return `${hours <10 ? '0' + hours : hours }:${minutes <10 ? '0'+minutes : minutes} `;
}

export const downloadModal = (e,originalMessage)=>{
    e.preventDefault();
    try {
        fetch(originalMessage).then(res=>res.blob()).then(blob=>{
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display="none";
            a.href=url;

            const name = originalMessage.split("/").pop();
            a.download = "" + name+ "";
            document.body.appendChild(a)
            a.click()
            window.URL.revokeObjectURL(url)
        }).catch(error=>console.log(error))
    } catch (error) {
        console.log(error)
    }
}