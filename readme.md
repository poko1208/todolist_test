# react.jsに入る前に

## アプリケーションの概要
- **アプリ名:** VanillaJS ToDo List
- **目的:** JavaScriptの基礎を固め、後にReact.jsの学習にスムーズに移行するための準備。

## 機能要件
### 基本機能
1. **タスクの表示:** 登録されたタスクを一覧で表示する。
2. **タスクの追加:** フォームを通じて新しいタスクを入力し、追加ボタンを押すとリストにタスクが追加される。
3. **タスクの削除:** 各タスクに削除ボタンを設け、クリックするとタスクをリストから削除する。
4. **タスクの完了:** タスクをクリックすると、「完了」とマークし、視覚的に区別する（例：テキストの取り消し線）。

### 追加機能（オプション）
5. **タスクの編集:** 既存のタスクをダブルクリックし、内容をインプレースで編集できる機能。
6. **フィルタリング機能:** 全てのタスク、未完了のタスク、完了したタスクをフィルタリングして表示する機能。
7. **永続性:** ブラウザのローカルストレージを使用して、タスクリストを保存し、アプリを再起動してもタスクが保持されるようにする。

## 技術スタック
- **フロントエンド:** バニラJavaScript
- **スタイリング:** CSS

## 実装ステップ
1. **HTML構造の設定:** ToDoリストのための基本的なHTMLを作成。
2. **スタイリング:** CSSを使ってアプリケーションを見栄えよくする。
3. **JavaScriptでの機能実装:** 
   - タスクの追加、削除、完了、編集の機能を実装。
   - イベントリスナーを使ってユーザーのアクションに反応する。
   - ローカルストレージを使用してタスクの状態を保存・復元。
4. **デバッグとテスト:** コンソールとデバッガーを活用してエラーを修正し、機能が正しく動作するかテスト。