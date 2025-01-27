
export abstract class StorageUtil {
  constructor(private readonly storage: Storage) {}

  clear() {
    this.storage.clear();
  }

  getItem(key: string): string | null {
    return this.storage.getItem(key);
  }

  removeItem(key:string) {
    this.storage.removeItem(key);
  }

  setItem(key: string, value: string): void {
    this.storage.setItem(key, value);
  }


}
