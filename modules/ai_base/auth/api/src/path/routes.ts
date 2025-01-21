import {MODULE_NAME} from '../path';

export abstract class AuthRoutes {
  private static readonly $base = `${MODULE_NAME}/auth`;
  static get login() {return `${this.$base}/login`;}
  static get logout() {return `${this.$base}/logout`;}

  static get itemGet() {return `${this.$base}/item/get`;}
  static get itemSave() {return `${this.$base}/item/save`;}
  static get itemDelete() {return `${this.$base}/item/delete`;}
  static get collectionGet() {return `${this.$base}/collection/get`;}
  static get collectionDelete() {return `${this.$base}/collection/delete`;}
}

// export const AuthRoutes = {
//   base: `${MODULE_NAME}/auth`,
//
//   login: `${base}/login`,
//   log_out: `${base}/log_out`,
// }
