/**
* This method will transform the fullname of all your contacts in uppercase
*/
function checkGoogleContact() {

  var contacts = ContactsApp.getContactGroup("System Group: My Contacts").getContacts();
  
  for (var i=0; i<contacts.length; i++){
    if(contacts[i].getFullName() !== ''){
      contacts[i].setFamilyName(contacts[i].getFamilyName().toUpperCase());
      contacts[i].setFullName(contacts[i].getFamilyName() + ' ' + contacts[i].getGivenName());
    }
  }
}

/**
* This method will end you an email if a contact do not have any company
*/
function checkGoogleContactHasCompany() {
  
  
  var contacts = ContactsApp.getContactGroup("System Group: My Contacts").getContacts();
  
  var message = "";
  
  for (var i=0; i<contacts.length; i++){
    if(contacts[i].getCompanies().length === 0){
      if(message !== '') {
        message += ', ';
      }
      
      message += contacts[i].getFullName()
    }
  }
  
  message = ('Contact without company : ' + message );
  
  if(messae !== ''){
    MailApp.sendEmail('email@gmail.com, 'Contact without Company', message);
  }
  
}
