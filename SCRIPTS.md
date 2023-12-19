# 常用命令说明

## ESLint 相关命令

- **`--cache`**

  - **描述**：启用缓存机制，只检查更改的文件。
  - **示例**：
    ```bash
    eslint --cache
    ```

- **`--fix`**

  - **描述**：自动修复代码中的错误和风格问题。
  - **示例**：
    ```bash
    eslint --fix
    ```

- **`--ext`**

  - **描述**：指定需要检查的文件扩展名。
  - **示例**：
    ```bash
    eslint --ext .js,.jsx,.ts,.tsx
    ```

- **`--no-cache`**

  - **描述**：运行检查时不使用缓存。
  - **示例**：
    ```bash
    eslint --no-cache
    ```

- **`--quiet`**

  - **描述**：只报告错误，忽略警告。
  - **示例**：
    ```bash
    eslint --quiet
    ```

- **`--max-warnings`**

  - **描述**：设置警告的最大数量，超过则退出非零状态。
  - **示例**：
    ```bash
    eslint --max-warnings 10
    ```

- **`--format`**
  - **描述**：指定输出报告的格式。
  - **示例**：
    ```bash
    eslint --format stylish
    ```

## Prettier 相关命令

- **`--write`**
  - **描述**：格式化并覆盖指定文件。
  - **示例**：
    ```bash
    prettier --write
    ```

## 配置相关命令

- **`--config`**

  - **描述**：指定使用的配置文件。
  - **示例**：
    ```bash
    eslint --config .eslintrc.js
    prettier --config .prettierrc
    ```

- **`--ignore-path`**
  - **描述**：指定忽略文件的路径。
  - **示例**：
    ```bash
    eslint --ignore-path .eslintignore
    ```
