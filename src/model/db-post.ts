[
{id:0,
 autor:"Quim",
 post:"Elephant borned with health!",
 data:"09/02/2024",
 hora: "13:00"
}
];



rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if
          request.time < timestamp.date(2024, 3, 10);
    }
  }
}
