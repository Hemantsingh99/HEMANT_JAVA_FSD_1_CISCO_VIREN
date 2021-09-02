package phase1_project;

import java.io.File;
import java.io.IOException;
import java.util.Scanner;

public class project {
		public static void main(String[] args) throws Exception {
		// TODO Auto-generated method stub
			Scanner scanner = new Scanner( System.in );
            System.out.println("Enter the file path: ");
            String dirPath = scanner.nextLine(); // Takes the directory path as the user input

           File folder = new File(dirPath);
            if(folder.isDirectory())
            {
                File[] fileList = folder.listFiles();

                Collections.sort(fileList);

                // Lists only files since we have applied file filter
                for(File file:fileList)
                {
                    System.out.println(file.getName());
                }

                // Creating a filter to return only files.
                FileFilter fileFilter = new FileFilter()
                {
                    @Override
                    public boolean accept(File file) {
                        return !file.isDirectory();
                    }
                }; 

                fileList = folder.listFiles(fileFilter);

                // Sort files by name
                Collections.sort(fileList, new Comparator()
                {
                    @Override
                    public int compare(Object f1, Object f2) {
                        return ((File) f1).getName().compareTo(((File) f2).getName());
                    }
                });

                //Prints the files in file name ascending order
                for(File file:fileList)
                {
                    System.out.println(file.getName());
                }

            }   
        // add file of existing directory array 
            // folderChooser = folder = foc
		  try {
			  
			  JFileChooser foc = new JFileChooser();
			    foc.setFileSelectionMode(JFileChooser.DIRECTORIES_ONLY);
			    int user = foc.showSaveDialog(null);
			    if (user == JFileChooser.APPROVE_OPTION) {
			    File folder = foc.getSelectedFile();

			    File f = new File(""); // name of file
			    f.createNewFile();
			  
		       }
		  } 
		// delete file from the existing directory list
			    catch(Exception e){
 
			    File file = new File("C:\\Users\\Mayank\\Desktop\\1.txt");
		          
		        if(file.delete())
		        {
		            System.out.println("File deleted successfully");
		        }
		        else
		        {
		            System.out.println("Failed to delete the file");
		        }
		     	
			    }
		  
		  // searching for file
		  
		  File directory = new File("/home/user/");
		  
	        // store all names with same name
	        // with/without extension
	        String[] flist = directory.list();
	        int flag = 0;
	        if (flist == null) {
	            System.out.println("Empty directory.");
	        }
	        else {
	  
	            // Linear search in the array
	            for (int i = 0; i < flist.length; i++) {
	                String filename = flist[i];
	                if (filename.equalsIgnoreCase("file.cpp")) {
	                    System.out.println(filename + " found");
	                    flag = 1;
	                }
	            }
	        }
	  
	        if (flag == 0) {
	            System.out.println("File Not Found");
	        }
	    }
		  
		//close the file
		
		try {
			
  
            // Now close the writer
            // using close() method
			folder.close();
        }
        catch (Exception e) {
            System.out.println(e);
        }
   }   
}           
