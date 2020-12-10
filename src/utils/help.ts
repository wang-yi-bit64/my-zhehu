/*
 * @Author: your name
 * @Date: 2020-12-10 15:43:05
 * @LastEditTime: 2020-12-10 16:03:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-zhehu\src\utils\help.ts
 */
import { ColumnProps, ImageProps, UserProps } from '@/store'
import { ImgHTMLAttributes } from 'vue'

export function generateFitUrl(data: ImageProps, width: number, height: number, format = ['m_pad']) {
  if(data && data.url) {
    const formatStr = format.reduce((prev, current) => {
      return current + ',' + prev
    }, '')
    data.fitUrl = data.url + `?x-oss-process=image/resize,${formatStr}h_${height},w_${width}`
  }
}

export function addColumnAvatar(data:ColumnProps| UserProps, width:number,height:number) {
  if(data.avatar) {
    generateFitUrl(data.avatar,width,height)
  } else {
    const parseCol = data as ColumnProps
    data.avatar = {
      fitUrl: require(parseCol.title ? '@/assets/column.jpg' : '@/assets/avatar.jpg')
    }
  }
}


interface CheckCondition {
  format?: string[];
  size?: number;
}
type ErrorType = 'size' | 'format' | null

export function beforeUploadCheck(file:File,condition:CheckCondition) {
  const {format, size} = condition
}

interface TestProps {
  _id: string;
  name: string;
}
const testData: TestProps[] = [{ _id: '1', name: 'a' }, { _id: '2', name: 'b' }]

export const arrToObj = <T extends {_id?:string}>(arr:Array<T>) => {
  return arr.reduce((prev,current) => {
    if(current._id) {
      prev[current._id] = current
    }
    return prev
  }, {} as {[key:string]: T})
}
const result = arrToObj(testData)
console.log(result)
