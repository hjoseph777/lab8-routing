const fs = require('fs');
const path = require('path');

// Configuration: files that should only exist in one location
const uniqueFiles = [
  { name: 'globals.css', correctPath: 'app/globals.css', description: 'Global CSS file' },
  { name: 'layout.tsx', correctPath: 'app/layout.tsx', description: 'Root layout file' },
  // Add more files as needed
];

// Root directory to scan
const rootDir = path.resolve(__dirname);

// Function to find all instances of a file
function findAllInstances(fileName, dir = rootDir, results = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    
    if (entry.isDirectory() && !fullPath.includes('node_modules') && !fullPath.includes('.next')) {
      findAllInstances(fileName, fullPath, results);
    } else if (entry.name === fileName) {
      results.push(fullPath);
    }
  }
  
  return results;
}

// Main function to identify and optionally remove duplicates
function cleanDuplicates(autoRemove = false) {
  console.log('Scanning for duplicated files...\n');
  
  let duplicatesFound = false;
  
  for (const file of uniqueFiles) {
    const instances = findAllInstances(file.name);
    const correctFullPath = path.join(rootDir, file.correctPath);
    
    if (instances.length > 1) {
      duplicatesFound = true;
      console.log(`Found ${instances.length} instances of ${file.name} (${file.description}):`);
      
      instances.forEach((instance, i) => {
        const isCorrectPath = instance === correctFullPath;
        console.log(`  ${i + 1}. ${instance} ${isCorrectPath ? '[KEEP - CORRECT LOCATION]' : '[DUPLICATE - WRONG LOCATION]'}`);
        
        // Only remove duplicates that are in the wrong location
        if (autoRemove && !isCorrectPath) {
          try {
            fs.unlinkSync(instance);
            console.log(`     ✓ Removed duplicate from wrong location: ${instance}`);
          } catch (err) {
            console.log(`     ✗ Failed to remove file: ${err.message}`);
          }
        }
      });
      console.log('');
    } else if (instances.length === 1) {
      const onlyInstance = instances[0];
      const isCorrectPath = onlyInstance === correctFullPath;
      
      if (!isCorrectPath) {
        console.log(`Warning: ${file.name} exists only at ${onlyInstance}, but should be at ${correctFullPath}`);
        console.log('   This file is in the wrong location but is not duplicated, so it will not be removed automatically.');
        console.log('');
      }
    }
  }
  
  if (!duplicatesFound) {
    console.log('No duplicates found! Your project structure looks clean.');
  } else if (!autoRemove) {
    console.log('To automatically remove duplicates in wrong locations, run: node clean-duplicates.js --remove');
    console.log('NOTE: Only duplicates in wrong locations will be removed. The correct file will be kept.');
  }
}

// Check command line args for auto-remove flag
const autoRemove = process.argv.includes('--remove');
cleanDuplicates(autoRemove);
