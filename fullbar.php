<?php
function fullbar(int $start, int $end): void 
{ 

    if($start === 0 && $end === 0) :
        echo "Os dois número não podem ser iguais a zero";
        return;
    endif; 
    if ($start > $end) : 
        $aux = $start; 
        $start = $end; 
        $end = $aux; 
    endif; 

    while($start <= $end) : 
        if ($start % 3 == 0 && $start % 5 == 0) : 
            echo "full bar<br>"; 
        elseif ($start % 3 == 0) : 
            echo "full<br>"; 
        elseif ($start % 5 == 0) : 
            echo "bar<br>";
        elseif ($start % 7 == 0) : 
            echo "fizz<br>"; 
        endif;
        $start++;
    endwhile; 
}
