//課題06-1.
//上記で登場したadd2, mul2の例を参考に、以下の数式をそれぞれ関数の組み合わせで記述してください。必要な関数は適宜作成してください。

//n * 100 - 5
//(n + 3) * 8 + 3
//nは変数で、自由な数値を代入して動作確認して構いません。

const add2 = x => x * 100 - 5
const mul2 = x => (x + 3) * 8 + 3

const n = 10
console.log(add2(n))
console.log(mul2(n))
