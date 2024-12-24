// import {faker} from '@faker-js/faker'
// import { User } from '../models/user.js';

// const createUser = async (numUsers)=>{
//     try{

//         const userPromise = [];
//         for(let i=0; i<numUsers;i++){
//             const tempUser = User.create({
//                 name: faker.person.fullName(),
//                 username: faker.internet.userName(),
//                 bio:faker.lorem.sentence(10),
//                 email: faker.internet.email(),
//                 password: "morax-password",
//                 avatar:{
//                   public_id:faker.image.avatar(),
//                   url:faker.system.fileName(),
//                  }
//             })
//             userPromise.push(tempUser);
//         }

//         await Promise.all(userPromise);

//         console.log("User created  " + numUsers);

//     }catch(err){
//         console.error(err);
//         process.exit(1);
//     }
// }


// export {
//     createUser
// }