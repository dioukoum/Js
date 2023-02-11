package javaprojects;
import java.sql.Statement;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;


public class Main 
{
    public static void main(String[] args) 
    {
        
        try 
        {
            Connection co= DriverManager.getConnection("jdbc:sqlite:base.db");
            Statement stmt= co.createStatement();

            String req=  "DELETE FROM  products WHERE product_quntity = 15";
            stmt.executeUpdate(req);
            ResultSet res= stmt.executeQuery("SELECT * FROM products");

            while(res.next())
            {
                String name= res.getString("product_name");
                float price= res.getFloat("product_price");
                System.out.println(name + ", vendu au prix de "+ price + " euros.");
            }
            co.close();
        } 
        catch (SQLException e) 
        {
            System.err.println(e.getMessage());
        }
    }
}
