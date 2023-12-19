type LocalKey = 'LOCAL_BASE_THEME' | 'LOCAL_USER_NAME';

interface Storage {
  getItem(key: LocalKey): string | null;
  setItem(key: LocalKey, value: string): void;
}
