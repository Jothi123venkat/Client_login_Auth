import { Store } from 'react-notifications-component';

const notifyService = async (type, title, message) => {
    Store.addNotification({
        title: title,
        message: message,
        type: type,
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
            duration: 2000,
            pauseOnHover: true
        },
    });
}

export default notifyService