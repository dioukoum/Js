package javaprojects;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import javax.swing.*;

public class LoginForm extends JFrame{
    final private Font mainFont= new Font("Arial",Font.BOLD, 18);
    JTextField tfEmail;
    JPasswordField pfPassword;

    public void initialize()
    { 
        JLabel lbLoginForm= new JLabel("Login Form", SwingConstants.CENTER);
        lbLoginForm.setFont(mainFont);

        JLabel lbEmail= new JLabel("Email");
        lbEmail.setFont(mainFont);

        tfEmail= new JTextField();
        tfEmail.setFont(mainFont);


        JLabel lbPassword= new JLabel("Password");
        lbPassword.setFont(mainFont);

        pfPassword=new JPasswordField();
        pfPassword.setFont(mainFont);

        JPanel formPanel= new JPanel();
        formPanel.setLayout(new GridLayout(0,1,10,10));
        formPanel.setBorder(BorderFactory.createEmptyBorder(30, 50, 30, 50));
        formPanel.add(lbEmail);
        formPanel.add(tfEmail);
        formPanel.add(lbPassword);
        formPanel.add(pfPassword);

        /* BUTTONS PANEL */
        JButton btnLogin= new JButton("Login");
        btnLogin.setFont(mainFont);
        btnLogin.addActionListener(new ActionListener()
        {

            @Override
            public void actionPerformed(ActionEvent e) 
            {
                // TODO Auto-generated method stub
                String email= tfEmail.getText();
                String password= String.valueOf(pfPassword.getPassword());

                User user= getAuthenticatedUser(email,password);

                if(user != null)
                {
                    Frame mainFrame= new Frame();
                    mainFrame.initialize(user);
                    dispose();
                }
                else
                {
                    JOptionPane.showMessageDialog(LoginForm.this, "Email or Password Invalid", "Try again", JOptionPane.ERROR_MESSAGE);
                }
            }

        });

        JButton btnCancel= new JButton("Cancel");
        btnCancel.setFont(mainFont);

        btnCancel.addActionListener(new ActionListener()
        {

            @Override
            public void actionPerformed(ActionEvent e) 
            {
                // TODO Auto-generated method stub
                dispose();
                
            }
            
        });

        JPanel buttonsPanel= new JPanel();
        buttonsPanel.setLayout(new GridLayout(1,2,10,0));
        buttonsPanel.setBorder(BorderFactory.createEmptyBorder(30, 50, 30, 50));
        buttonsPanel.add(btnLogin);
        buttonsPanel.add(btnCancel);

        add(formPanel, BorderLayout.NORTH);
        add(buttonsPanel, BorderLayout.SOUTH);


        setTitle("Login Form");
        setDefaultCloseOperation(WindowConstants.EXIT_ON_CLOSE);
        setSize(400,500);
        setMinimumSize(new Dimension(350,450));
        setLocationRelativeTo(null);
        // setResizable(false);
        setVisible(true);
    }

    private User getAuthenticatedUser(String email, String password)
    {
        User user= null;
        final String BD_URL= "jdbc:mysql://localhost/mystore";
        final String USERNAME= "root";
        final String PASSWORD= "";

        try
        {
            Connection conn= DriverManager.getConnection(BD_URL, USERNAME, PASSWORD);

            String sql= "SELECT * FROM users WHERE email=? AND password=?";
            PreparedStatement preparedStatement= conn.prepareStatement(sql);
            preparedStatement.setString(1,email);
            preparedStatement.setString(2,password);

            ResultSet resultSet= preparedStatement.executeQuery();
            if(resultSet.next())
            {
                user= new User();
                user.name= resultSet.getString("name");
                user.email= resultSet.getString("email");
                user.phone= resultSet.getString("phone");
                user.address= resultSet.getString("address");
            }
            preparedStatement.close();
            conn.close();
        }
        catch(SQLException e)
        {
            System.out.println("Connection Failed!");
            System.err.println(e.getMessage());
        }

        return user;
    }

    public static void main(String[] args) {
        LoginForm myLogin= new LoginForm();
        myLogin.initialize();
    }
}
