import java.sql.Connection;
import java.sql.DriverManager;

 public static Connection getConnection() throws Exception{
  try{
   String driver = "com.mysql.jdbc.Driver";
   String url = "jdbc:mysql://24.196.52.166:3306/testdb";
   String username = "username";
   String password = "password";
   Class.forName(driver);
   
   Connection conn = DriverManager.getConnection(url,username,password);
   System.out.println("Connected");
   return conn;
  } catch(Exception e){System.out.println(e);}
  
  
  return null;
 }
