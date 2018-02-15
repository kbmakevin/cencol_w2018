package ex01_socket;

// Exercise 27.13 Solution: Server.java
// Program receives file name from client and sends
// contents of file back to the client if file exists.
import java.net.ServerSocket;
import java.net.Socket;
import java.io.File;
import java.io.IOException;
import java.util.Formatter;
import java.util.Scanner;

public class Server
{
   private ServerSocket server; // server socket
   private Socket connection; // connection to a client
   private Scanner input; // input scanner
   private Formatter output; // output formatter

   // constructor
   public Server()
   {
      try
      {
         server = new ServerSocket( 5001, 10 ); // create ServerSocket
      } // end try
      catch ( IOException exception )
      {
         exception.printStackTrace();
         System.exit( 1 );
      } // end catch
   } // end Server constructor

   public void runServer()
   {
      // loop forever, handling connections one at a time
      while ( true )
         handleConnection();
   } // end method runServer

   // accept and handle one connection
   private void handleConnection()
   {
      try // wait for connection, get streams, read file
      {
         connection = server.accept(); // accept connection
         output = new Formatter( connection.getOutputStream() );
         output.flush(); // flush output to send header information
         input = new Scanner( connection.getInputStream() );
         File file = new File( input.nextLine() ); // get file name
         String result; // result from checking file

         // file does exist
         if ( file.exists() )
         {
            Scanner fileInput = new Scanner( file ); // file scanner
            output.format( "The file is:\n" ); // write header
            output.flush(); // flush output

            while ( fileInput.hasNextLine() )
            {
               result = fileInput.nextLine(); // read a line from file
               output.format( "%s\n", result ); // output line of file
               output.flush(); // flush output
            } // end while
         } // end if
         else // file does not exist
         {
            result = file.getName() + " does not exist\n";
            output.format( result ); // write that file does not exist
            output.flush(); // flush output
         } // end else
      } // end try
      catch( IOException ioException )
      {
         ioException.printStackTrace();
         System.exit( 1 );
      } // end catch
      finally
      {
         try
         {
            output.close(); // close output
            input.close(); // close input
            connection.close(); // close connection to client
         } // end try
         catch ( IOException ioException )
         {
            ioException.printStackTrace();
            System.exit( 1 );
         } // end catch
      } // end finally
   } // end method runServer
} // end class Server

/**************************************************************************
 * (C) Copyright 1992-2012 by Deitel & Associates, Inc. and               *
 * Prentice Hall. All Rights Reserved.                                    *
 *                                                                        *
 * DISCLAIMER: The authors and publisher of this book have used their     *
 * best efforts in preparing the book. These efforts include the          *
 * development, research, and testing of the theories and programs        *
 * to determine their effectiveness. The authors and publisher make       *
 * no warranty of any kind, expressed or implied, with regard to these    *
 * programs or to the documentation contained in these books. The authors *
 * and publisher shall not be liable in any event for incidental or       *
 * consequential damages in connection with, or arising out of, the       *
 * furnishing, performance, or use of these programs.                     *
 *************************************************************************/
