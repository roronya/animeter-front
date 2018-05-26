# tips
## コンポーネントに上位コンポーネントからデータを入れるとき。

```javascript
<History histories={[1 2 3]} />
```

上のようにプロパティとして渡す。
Historyコンポーネントの中では `this.props.histories` で束縛される。

## 上位コンポーネントから入れられたデータのハンドリング
コンストラクタでやっている。
コンポーネントが最初にレンダリングされるときのみ
コンストラクタは呼ばれそうなのでsetState時に描写しなおして欲しいのならやりようがありそう。
このへんのベストプラクティスはおいおい調べる。

たぶん `this.props.hoge` に渡されてきたものはコンストラクタで 
`this.props.state.hoge` に束縛しなおして、
renderの中でも `this.props.state.hoge` を使って、
`setState()` で状態が変更されたときに描画に反映されるようにするのが良いんじゃないかなーとは思っている。

## クラス定数の書き方

```javascript
class History extends React.Component {
	columns = [
		{"id": "title", "type": "string"},
		{"id": "comment", "type": "string"},
		{"id": "Start", "type": "date"},
		{"id": "End", "type": "date"}
	];
```

上のように普通にclassブロックの直下に書けば `this.columns` で参照できる。

