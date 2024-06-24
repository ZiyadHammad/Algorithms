<!-- In the game Pixelville, a player has a set of digital flasks of different sizes. 
 The objective is to fill these flasks from magical well and pour water into an overhead tank.
 Water can only be drawn one flask at a time, and each flask can be either partially or fully filled.
 A flask can be used any number of times. 
 
 Implement the getCount function which should take a list of flask capacities, the total water available 
 in the well, and the volume of the tank. It should return the minimal number of draws required to completely
 fill the overhead tank, or -1 if its not possible to completely fill the tank. -->

 <!-- For example, the following code should print 5: -->
 <?php
$input = [2,3,7,1,5,4]
echo getCount($input, 100, 34)
?> 

<?php
/**
 * @return integer The minimum number of draws required to fill the tank
 */
function getCount(array $flaskSizes, int $waterAvailable, int $tankVolume) : int
{
    return 0;
}

$input = [2, 3, 7, 1, 5, 4];
echo getCount($input, 100, 34);
?>
