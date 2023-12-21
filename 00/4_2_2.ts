const numArr: number[] = [1, 2, 3]; //型名の後ろに[]をつけるとその型データの配列になる
console.log(numArr);

// 配列はArrayオブジェクトとしても定義できる
const strArr: Array<string> = ['one', 'two', 'three'];
console.log(strArr);

// オブジェクトの型定義
const words: object = ['foo', 'bar', 'baz'];
// ↑あまり意味のない書き方
console.log(words);

// オブジェクトの型を定義する際は、プロパティのキー名と値の型を明記する
const red: { rgb: string, opacity: number } = { rgb: 'ff0000', opacity: 1 };
console.log(red);
