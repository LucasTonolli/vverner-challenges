<?php
function foobar(int $start, int $end): void 
{ 

    if($start === 0 && $end === 0) :
        echo "Os dois número não podem ser iguais a zero";
        return;
    endif; 

    if ($start > $end) : 
        while( $end <= $start) : 
            if ($end % 3 == 0 && $end % 5 == 0) : 
                echo "$end - foo bar<br>"; 
            elseif ($end % 3 == 0) : 
                echo "$end - foo<br>"; 
            elseif ($end % 5 == 0) : 
                echo "$end - bar<br>";
            elseif ($end % 7 == 0) : 
                echo "$end - fizz<br>"; 
            endif;
            $end++;
        endwhile;  
    else:
        while($start <= $end) : 
            if ($start % 3 == 0 && $start % 5 == 0) : 
                echo "$start - foo bar<br>"; 
            elseif ($start % 3 == 0) : 
                echo "$start - foo<br>"; 
            elseif ($start % 5 == 0) : 
                echo "$start - bar<br>";
            elseif ($start % 7 == 0) : 
                echo "$start - fizz<br>"; 
            endif;
            $start++;
        endwhile; 
    endif; 
}
