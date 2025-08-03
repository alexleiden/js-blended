const styles = [`jazz`, `blues`];
styles.push(`rock-n-roll`);
let bluesIndex = styles.indexOf('blues');
function logItems(array) {
    console.log();
    for (let i = 0; i < array.length; i++) {
        console.log(`${i + 1} - ${array[i]}`);
    }
}
logItems(styles);