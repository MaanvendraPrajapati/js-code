const marvel=["hulk", "iron", "spider", "thor"];
const dc=["bat", "flash", "super"];

const all=marvel.concat(dc);
console.log(all);

const all_new=[...marvel,...dc];
console.log(all_new);