package javaprojects;

/**
 * Structure
 */
public class Structure {
    public static void main(String[] args) {
        double x= 1E200;
        System.out.println("X: "+x);
        System.out.println("(X*X): "+(x*x));
        System.out.println("(X*X)/X: "+(x*x)/x);
        System.out.println("(X*X)/(X*X): "+(x*x)/(x*x));

        String s= "2.718";
        System.out.println("s: "+s);
        Double d= new Double(s);
        System.out.println("d: "+d);
        double y= d.doubleValue();
        System.out.println("y: "+y);
        s+=45;
        System.out.println("s: "+s);
        y+=45;
        System.out.println("y: "+y);
        int n= d.intValue();
        System.out.println("n: "+n);
        n=Integer.parseInt("f0",16);
        System.out.println("n: "+n);
    }
}