/*
 * @Author: your name
 * @Date: 2020-12-15 15:29:12
 * @LastEditTime: 2020-12-15 16:02:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-zhehu\src\hooks\useDOMCreate.ts
 */
import { onUnmounted } from "vue";

function useDOMCreate(nodeId: string) {
  const node = document.createElement("div");
  node.id = nodeId;
  document.body.appendChild(node);
  onUnmounted(() => {
    document.body.removeChild(node);
  });
}

export default useDOMCreate;
