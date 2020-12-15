/*
 * @Author: your name
 * @Date: 2020-12-15 15:40:05
 * @LastEditTime: 2020-12-15 16:01:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-zhehu\src\components\createMessage.ts
 */
import { createApp } from "vue";
import Message from "@/components/Message.vue";
export type MessageType = "success" | "error" | "default";

const createMessage = (message: string, type: MessageType, timeout = 2000) => {
  const messageInstance = createApp(Message, {
    message,
    type,
  });
  const mountNode = document.createElement("div");
  document.body.appendChild(mountNode);
  messageInstance.mount(mountNode);
  setTimeout(() => {
    messageInstance.unmount(mountNode);
    document.body.removeChild(mountNode);
  }, timeout);
};

export default createMessage;
