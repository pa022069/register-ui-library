# SPA-vite-react

## 資料夾結構說明

deployments
~ 存放不同環境的環境變數

public
~ vite 跟目錄區，用來存放圖片素材

##### src 專案開發程式碼

- `__tests__`：單元測試
- `api`：jk-api功能
- `components`：共用 components 元件
- `constants`：全域變數，不可存放環境變數
- `helpers`：工具類，ex: Redux
- `hooks`：共用 hooks
- `lang`：i18n 字典檔
- `pages`：頁面
- `types`：Typescript樣式管理

## 文件說明

catelog-info.yaml
~ Backstage 文件資料

test-case.md
~ 測試用例，需使用 [Markmap for vscode](https://markmap.js.org/) 預覽

## 錯誤狀態顯示

如有遇到以下錯誤狀態：

- 引導更新頁
- 維護頁
- 無網路
- 找不到頁面

可把頁面導轉至對應的頁面（點開查詢：<https://test-static.jkopay.app/system-page/>），需要使用的時候不要自己刻

## Packages

| Package                | Version  |
| ---------------------- | :------- |
| @jk/api                | 2.0.5    |
| @library/jkbridge      | 2.6.4    |
| @library/jui           | 1.32.7   |
| @reduxjs/toolkit       | ^2.2.1   |
| vitest                 | ^1.3.1   |
| vite-bundle-visualizer | ^1.0.1   |
| vconsole               | ^3.15.1  |
| tailwindcss            | ^3.4.1   |
| react-redux            | ^9.1.0   |
| react                  | ^18.2.0  |
| lodash                 | ^4.17.21 |
| @testing-library/react | ^14.2.1  |
| typescript             | ^5.2.2   |
| vite                   | ^5.1.4   |
