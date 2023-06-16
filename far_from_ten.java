import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

class far_from_ten{
     public static void main(String[] args) {
        List<Integer> arr=new ArrayList<>();
        int[] ar={10,3,4,5,11,6,0,17};
        
        for(int i : ar)
        {
          arr.add(i);
        }
        Collections.sort(arr,new comp());
        for(int i : arr)
        {
           System.out.println(i);
        }
     }



}
class comp implements Comparator<Integer>
{

    @Override
    public int compare(Integer o1, Integer o2) {
       if(Math.abs(10-o1)>Math.abs(10-o2))
       {
        return 1;
       }
       else if(Math.abs(10-o1)<Math.abs(10-o2)){
          return -1;
       }
       else{
         if(o1>o2)
         {
            return 1;
         }
         else{
            return -1;
         }
       }
    }
   
}