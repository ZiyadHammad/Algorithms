
 <?php
/**
 * @return integer The minimum number of draws required to fill the tank
 */
function getCount(array $flaskSizes, int $waterAvailable, int $tankVolume) : int
{
    // Initialize a DP array with large numbers (infinity)
    $INF = PHP_INT_MAX;
    $dp = array_fill(0, $tankVolume + 1, $INF);
    $dp[0] = 0; // 0 draws needed to have 0 volume in the tank

    foreach ($flaskSizes as $flask) {
        for ($v = $flask; $v <= $tankVolume; $v++) {
            // Update dp[v] only if we can reach dp[v - flask] and then use one more flask of size flask
            if ($dp[$v - $flask] != $INF) {
                $dp[$v] = min($dp[$v], $dp[$v - $flask] + 1);
            }
        }
    }

    // If dp[tankVolume] is still INF, it means it's not possible to achieve tankVolume exactly
    return $dp[$tankVolume] == $INF ? -1 : $dp[$tankVolume];
}

$input = [2, 3, 7, 1, 5, 4];
echo getCount($input, 100, 34); // Output: 5
?>
