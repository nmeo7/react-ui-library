import { notification } from "antd";

export const openNotification = ({title, description, type}) => {
    notification[type || 'info']({
      message: title || 'Notification!',
      description,
      placement: 'bottomRight',
    });
  };