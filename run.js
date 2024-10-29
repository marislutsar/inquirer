import inquirer from 'inquirer';

async function main() {

  const nameResponse = await inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
      validate: (input) => input ? true : 'Name cannot be empty!'
    }
  ]);

  const ageResponse = await inquirer.prompt([
    {
      type: 'number',
      name: 'age',
      message: 'How old are you?',
      validate: (input) => Number.isInteger(input) && input > 0 ? true : 'Please enter a valid age.'
    }
  ]);

  const favoriteColorResponse = await inquirer.prompt([
    {
      type: 'list',
      name: 'favoriteColor',
      message: 'Which color do you like the best?',
      choices: ['Red', 'Green', 'Blue', 'Yellow']
    }
  ]);

   // Rawlist - similar to a list but allows only one selection without the ability to navigate using arrow keys
 const rawlistResponse = await inquirer.prompt([
   {
     type: 'rawlist',
     name: 'selection',
     message: 'Choose your dinner for today:',
     choices: ['Hamburger & fries', 'Ramen', 'Butter chicken']
   }
 ]);

  const likeProgrammingResponse = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'likeProgramming',
      message: 'Do you like programming?',
      default: true
    }
  ]);

  const hobbiesResponse = await inquirer.prompt([
    {
      type: 'checkbox',
      name: 'hobbies',
      message: 'Select your hobbies:',
      choices: ['Reading', 'Gaming', 'Traveling', 'Cooking'],
      validate: (answer) => answer.length < 1 ? 'You must choose at least one hobby!' : true
    }
  ]);

  const passwordResponse = await inquirer.prompt([
   {
     type: 'password',
     name: 'password',
     message: 'Create a password:',
     mask: '*'
   }
 ]);

 // Editor: Opens a text editor for multi-line input 
 const editorResponse = await inquirer.prompt([
   {
     type: 'editor',
     name: 'editorInput',
     message: 'Write down your todays shopping list:'
   }
 ]);

 //Expand: Presents options that can be selected using specified keys or letters 
 const expandResponse = await inquirer.prompt([
   {
     type: 'expand',
     name: 'expandChoice',
     message: 'Please select an action:',
     choices: [
       { key: 'a', name: 'Add', value: 'add' },
       { key: 'd', name: 'Delete', value: 'delete' },
       { key: 'e', name: 'Edit', value: 'edit' }
     ]
   }
 ]);

  console.log('\n--- Your Responses ---');
  console.log(`Name: ${nameResponse.name}`);
  console.log(`Age: ${ageResponse.age}`);
  console.log(`Favorite color: ${favoriteColorResponse.favoriteColor}`);
  console.log(`Dinner for today: ${rawlistResponse.selection}`);
  console.log(`Do you like programming: ${likeProgrammingResponse.likeProgramming}`);
  console.log(`Hobbies: ${hobbiesResponse.hobbies.join(', ')}`);
  console.log(`Password: ${passwordResponse.password}`);
  console.log(`Your shopping list: ${editorResponse.editorInput}`);
  console.log(`Action selected: ${expandResponse.expandChoice}`);
}

main().catch(error => console.error(error));
