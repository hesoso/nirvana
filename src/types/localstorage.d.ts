type LocalKey = "LOCAL_BASE_THEME" | "LOCAL_USER_NAME";

/**
 * 这里重新定义了Storage的两个常用函数 getItem 和 setItem，
 * 我们可以通过增加 LocalKey 的方式使得开发中得到更好的语法提示
 */
interface Storage {
  getItem(key: LocalKey): string | null;
  setItem(key: LocalKey, value: string): void;
}
