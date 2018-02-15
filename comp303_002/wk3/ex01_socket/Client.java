package ex01_socket;

// Exercise 27.13 Solution: Client.java
// Program receives a file name from user, sends file name
// to server and displays file contents if file exists.
import java.awt.Color;
import java.awt.BorderLayout;
import java.awt.GridLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.net.Socket;
import java.net.InetAddress;
import java.io.IOException;
import java.util.Formatter;
import java.util.Scanner;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JScrollPane;
import javax.swing.JTextArea;
import javax.swing.JTextField;

public class Client extends JFrame implements ActionListener 
{
   private JTextField fileField; // text field to input file
   private JTextArea contents; // text area to display contents
   private JPanel panel; // panel to hold components
   private JLabel label; // label to prompt user
   private JScrollPane scroller; // scroller for text area

   // set up GUI, connect to server, get streams
   public Client()
   {
      super( "File Downloader" );

      label = new JLabel( "Enter file name to retrieve:" );
      panel = new JPanel(); // create JPanel
      panel.setLayout( new GridLayout( 1, 2, 0, 0 ) );
      panel.add( label ); // add label to panel

      fileField = new JTextField(); // create text field
      fileField.addActionListener( this ); // add action listener
      panel.add( fileField ); // add text field to panel

      contents = new JTextArea(); // create text area
      scroller = new JScrollPane( contents ); // add scrolling
      add( panel, BorderLayout.NORTH ); // add panel to north
      add( scroller ); // add scrolling text area

      setSize( 400, 200 ); // set window size
      setVisible( true ); // show window
   } // end Client constructor

   // process file name entered by user
   public void actionPerformed( ActionEvent event )
   {
      Socket connection = null; // connection to server
      Scanner input = null; // input scanner
      Formatter output = null; // output formatter
   
      try // display contents of file
      {
         // create Socket to make connection to server
         connection = new Socket( InetAddress.getLocalHost(), 5001 );
         output = new Formatter( connection.getOutputStream() );
         output.flush(); // flush output to send header information
         input = new Scanner( connection.getInputStream() );

         String fileName = event.getActionCommand() + "\n";
         output.format( fileName );
         output.flush(); // flush output
         String inputLine = input.nextLine(); // read input line
         contents.setText( inputLine ); // show input line in textarea

         // if file exists, display file contents
         if ( inputLine.equals( "The file is:" ) ) 
         {
            while ( input.hasNextLine() ) 
            {
               inputLine = input.nextLine(); // read a new line
               contents.append( '\n' + inputLine ); // add line
            } // end while
         } // end if
      } // end try
      catch ( IOException ioException )
      {
         ioException.printStackTrace();
         System.exit( 1 );
      } // end catch
      finally
      {
         try
         {
            input.close(); // close output
            output.close(); // close input
            connection.close(); // close connection to server
         }
         catch ( IOException ioException )
         {
            ioException.printStackTrace();
            System.exit( 1 );
         } // end catch
      } // end finally
   } // end method actionPerformed
} // end class Client


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
