let n = 3;
let star = ''
for(let i = 1; i <= n; i++)
{
    for( let j = 1; j <= i; j++)
    {
        star += '*';
    }
    star += '\n';
}
console.log(star)