/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 1000                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: kallzzang@naver.com <boj.kr/u/kallzzang@n   +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/1000                           #+#        #+#      #+#    */
/*   Solved: 2025/02/13 15:53:43 by kallzzang@nave###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
var fs = require("fs");

var input = fs.readFileSync('/dev/stdin').toString().split(' ');

var a = parseInt(input[0]);
var b = parseInt(input[1]);

console.log(a+b);