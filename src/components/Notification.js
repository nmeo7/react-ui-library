import { notification } from "antd";
// import ping from 'assets/Notification.mp3'

export const openNotification = ({title, description, type}) => {
    notification[type || 'info']({
      message: title || 'Notification!',
      description,
      placement: 'bottomRight',
    });

    // const audio = new Audio(ping)
    // audio.play()
  };