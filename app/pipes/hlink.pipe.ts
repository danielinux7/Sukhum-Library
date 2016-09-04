import { Pipe, PipeTransform } from '@angular/core';
/*
 * Usage:
 *   value | hlink
 * Example:
 *   {{ "http://nla.sukhum.city" |  hlink }}
*/
@Pipe({name: 'hlink'})
export class HlinkPipe implements PipeTransform {
  transform(value: string): string {
    var temp = value && value.replace(/(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:;,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:;,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:;,.]*\)|[A-Z0-9+&@#\/%=~_|$])/ig, "<a target='_blank' href='$&'>$&</a>");
    return temp;
  }
}
