package javaprojects;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Scanner;

class Mabase
{
    public static void main(String []args)
    {
        try
        {

            /*LES DONNEES */
            String nom;
            float prix;
            int quantite;

            /*CONNECTION A LA BASE DONNEE */
            Connection co= DriverManager.getConnection("jdbc:mysql://localhost/base", "root", "");

            Scanner sc= new Scanner(System.in);
            
            /*GESTION DES CHOIX  */
            do
            {
                System.out.println("\n\nQuelle operation voulez-vous effectuer ?:");
                System.out.println("1.Inserez des produits dans la base\n2.Modifier des produits dans la base\n3.Supprimer des produits dans la base\n4.Afficher tous les produits\n5.Quiter\n");
                System.out.print("Choix: ");
                int choix= sc.nextInt();

            
                if(choix == 1)
                {
                    System.out.println("Vous avez choisi: l'insertion");
                    System.out.println("Veuillez renseigner pour le produit a enregister: ");
                    System.out.print("Son nom: ");
                    nom= sc.next();
                    System.out.print("Son prix: ");
                    prix= sc.nextFloat();
                    System.out.print("Sa quanitee: ");
                    quantite= sc.nextInt();

                    PreparedStatement prestate= co.prepareStatement("INSERT INTO products(product_name,product_price,product_quantity) VALUES(?,?,?)");

                    prestate.setString(1,nom);
                    prestate.setFloat(2, prix);
                    prestate.setInt(3, quantite);
                    prestate.execute();

                    System.out.println("Enregistrement du produit effectuer avec succes!!");
                    System.out.println("Nom: "+nom+" prix: "+prix+" quantite: "+quantite);
                }
                else if(choix ==2)
                {
                    System.out.println("Vous avez choisi: la modification");
                    System.out.println("Veullez entrer le nom du produit a modifier:");
                    System.out.print("NOM DU PRODUIT: ");
                    nom= sc.next();
                    
                    PreparedStatement prestate= co.prepareStatement("UPDATE products SET product_name=?,product_price=?, product_quantity=? WHERE product_name=?");
                    String nouveauNom;
                    System.out.println("Veuillez renseigner ses nouvelles informations:");
                    System.out.print("NOM: ");
                    nouveauNom= sc.next();
                    System.out.print("PRIX: ");
                    prix= sc.nextFloat();
                    System.out.print("QUATITEE: ");
                    quantite= sc.nextInt();

                    prestate.setString(1, nouveauNom);
                    prestate.setFloat(2, prix);
                    prestate.setInt(3, quantite);
                    prestate.setString(4, nom);
                    prestate.execute();
                    System.out.println("Le produit "+nom+" a bien ete modifier");
                }
                else if(choix ==3)
                {
                    System.out.println("Vous avez choisi: la suppression");
                    System.out.println("Veuillez renseigner le nom du produit a supprimer:");
                    System.out.print("NOM: ");
                    nom= sc.next();
                    PreparedStatement prestate= co.prepareStatement("DELETE FROM products WHERE product_name=?");
                    prestate.setString(1, nom);
                    prestate.execute();
                    System.out.println("Le produit "+nom+" a bien ete supprimer!!!");
                }
                else if(choix == 4)
                {
                    Statement state= co.createStatement();
                    ResultSet rs= state.executeQuery("SELECT * FROM products");
                    System.out.println("\t\tLa liste des produits:");
                    int i=1;
                    while(rs.next())
                    {
                        System.out.println(i++ +"  \t"+rs.getString("product_name")+"  \t"+rs.getFloat("product_price")+"  \t"+rs.getInt("product_quantity"));
                    }
                }
                else if(choix == 5)
                {
                    System.out.println("A bientot .......");
                    sc.close();
                    break;
                }
            } while(true);

            /*DECONNECTION A LA BASE DE DONNEE */
            co.close();
        }
        catch(SQLException e)
        {
            System.err.println(e.getMessage());
        }
        finally
        {
            System.out.println("FELICITATION VOUS AVEZ BIEN COMPRIS LA MANIPULATION DES DONNEES DANS LA BASE!!!!!");
        }
    }
}