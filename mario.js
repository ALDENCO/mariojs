


/*
 * printPyramid
 *
 * Prints to the console a pyramid of '#' characters of the specified height
 * For example, if height is 5, the console will look like this:
 *          ##
 *         ###
 *        ####
 *       #####
 *      ######
 */
function printPyramid(height) {
    for (let height = '#'; height.length < 5; height+= "#")
    console.log(height);  
}
printPyramid(5);


// var num = "#";
// for(var x=1; x++)
// {
//   num = num + i
//   console.log(num);
// }