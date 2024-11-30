package BinarySearch;
import java.util.*;

public class BinarySearch{
    public static String binarySearch(List<Integer> list, int target){
        
        if (list.size() == 0) return "The list provided is empty";
        
        int left = 0;
        int right = list.size() - 1;

        while(left <= right){
            int mid = (left + right) / 2;
            if(list.get(mid) == target) return target + " was found at index number " + mid;
            else if(list.get(mid) < target) left = mid + 1;
            else right = mid - 1;
        }
        return  target + " was not found within " + list;       
    }

    public static void main(String[] args){
        
        List<Integer> list = Arrays.asList(1, 2, 3, 4, 5);
        
        System.out.println(binarySearch(list, 4));
    }
}