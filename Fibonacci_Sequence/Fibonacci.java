package Fibonacci_Sequence;

import java.util.*;

public class Fibonacci {
    public static List<Integer> fibonacci(int iterations) {
        if (iterations <= 0) {
            throw new IllegalArgumentException("Iterations should be a positive number");
        }

        List<Integer> sequence = new ArrayList<>();
        int n1 = 0;
        int n2 = 1;

        for (int i = 0; i < iterations; i++) {
            sequence.add(n1);
            int nextTerm = n1 + n2;
            n1 = n2;
            n2 = nextTerm;
        }
        return sequence;
    }

    public static void main(String[] args) {
        try {
            System.out.println(fibonacci(5));
        } catch (IllegalArgumentException e) {
            System.err.println(e.getMessage());
        }
    }
}