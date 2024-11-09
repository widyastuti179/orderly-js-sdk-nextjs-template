import { ConfigKey, DefaultConfigStore } from "@orderly.network/core";
import { MarketsStorageKey } from "@orderly.network/hooks";

export class CustomConfigStore extends DefaultConfigStore {
  constructor(init: Partial<Record<ConfigKey, any>>) {
    super(init);
  }

  get<T>(key: ConfigKey): T {
    // markets favorites need to use local storage
    if (key === MarketsStorageKey) {
      const jsonStr = localStorage.getItem(MarketsStorageKey);
      return jsonStr ? JSON.parse(jsonStr) : ("" as T);
    }

    return super.get(key);
  }

  set<T>(key: ConfigKey, value: T): void {
    if (key === MarketsStorageKey) {
      const jsonStr = JSON.stringify(value);
      localStorage.setItem(MarketsStorageKey, jsonStr);
      return;
    }

    super.set(key, value);
  }
}
