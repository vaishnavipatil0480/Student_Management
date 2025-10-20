import { UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Card, Col, List, Progress, Row, Statistic, Tag } from 'antd';
import React from 'react';
import { coursesData, productsData, studentsData } from '../data/MocData';
import { STATUS_COLORS } from '../utilx/Constant';

export default function Dashbordscreen() {
  // === type +eqal
const activeStudents = studentsData.filter(s => s.status === 'active').length;
  const averageProgress = Math.round(
    studentsData.reduce((acc, s) => acc + s.progress, 0) / studentsData.length
  );
  //coursedata is object
  const beginnerStudents = coursesData.filter(b => b.level=== 'Beginner').length;
  // const averageProgress = Math.round(
  //   studentsData.reduce((acc, b) => acc + b.progress, 0) / studentsData.length
    console.log("fyuttuiu",beginnerStudents);
  //filter-get only avalabal product(stock>0)
     const status= coursesData.filter(s => s.status=== 'draft').length;
 console.log("this is status",status);


     //1.filter-get only available product(stock > 0)
     //When you searthing
     const product=productsData.filter(p => p.stock>0).length;
     console.log("this is stock",product);

     //2.map -get only name of product
     const productname=productsData.map((n)=>{
      return n.name
     });
     console.log("product names",productname)

     

     // filter find product with prize >1000
     const prize=productsData.filter((prize) => {
      return prize.price > 10000;
     });
    console.log("this prize is ",prize);
    const pr=productsData.filter((pr) => pr.price > 10000
      
     );
    console.log("this prize is ",prize);

    //find a product with have a catregory Electronics
    const category=productsData.filter((cat) => cat.category==="Electronics");
    console.log("electronics category is",category);

    const cat=productsData.filter((cat) => {
      return cat.category === "Electronics";
    });
    console.log("electronics",cat);

    
    //Aerray
    //home work
    //find a product witch a category clothing
    const clothproduct=productsData.filter((clothproduct) =>{
      return clothproduct.category ==="Clothing";
    }).length;
    console.log("clothing product is",clothproduct);

    //find a product which have a product price < 2000
    const price=productsData.filter((price) =>{
      return price.price < 2000;
    })
    console.log(price,"find price less than 2000");

    //find a product have product name as book
    const book=productsData.filter((book) => {
      return book.name ==="Book";
    })
    console.log("find books",book);

    //find a product with stock which is betwween 10 to 40
    const stock=productsData.filter((stock)=>{
      return stock.stock >=10 && stock.stock <=40;
    })
    console.log(stock," find stock beetwwn 10 to 40");


//find a product which has isd as 3
const id=productsData.filter((id)=>{
      return id.id===3;
    });
    console.log(id," find product which has id 3");
//find a even number from array
const number=[1,2,3,4,5,6,7,8,9,10]

const num=number.filter((num)=>{
      return num % 2===0;
    })
    console.log(num," even number is");


    // find odd number from array

const arr=[1,2,3,4,5,6,7,8,9,10]

const array=arr.filter((num)=>{
      return num % 2 !==0;
    })
    console.log(array," odd number is");
//get new array()found /updation


const mul=number.map((mul)=>{
  console.log("multiplication is",mul)

return mul*2 ;
//  console.log(mul)
})
console.log("multiplication is",mul)

//convrt each name into uppercase
const nameArray=["vaishu" ,"tyTT" ,"ui" ,"klo"];

const uppercase=nameArray.map((uppercase)=>{
  

return uppercase.toUpperCase() ;
//  console.log(mul)
})
console.log("string as uppercase",uppercase)


//make name off arrya inside name make as first letter as  capital

  const firstSSSS=nameArray.map((first)=>{
    return first.charAt(0).toUpperCase() + first.slice(1).toLowerCase();
 })
 console.log("first",firstSSSS)


//convsrt name into lowercase
const lowercase=nameArray.map((lowercase)=>{
  return lowercase.toLowerCase();
})
console.log("string as lowercase",lowercase)
// const newobject
const newobject=[{id:"one",name:"ghu"},
  {id:"two",name:"uio"},
  {id:"three",name:"gkl"}

];
const key=newobject.map((key)=>{
  return key.id;
})
console.log("key",key)
//imp
const keys=newobject.map((k)=>{
  return Object.keys(k);
})
console.log("key",keys)









//Home work
//square of each number
const square=[1,2,3,4,5];
const SquareOfeachNumber=square.map((square)=>{
  return square*square; // s*s

})
console.log("square is",SquareOfeachNumber);

//substract 2 from every
 const number1=[5,10,15,20];
 const substractnumber=number1.map((substract)=>{
  return substract-2;

 })
console.log("substract 2 from every number",substractnumber)




//conver each number in string 
const string=[10,20,30];
const convrtEachstring=string.map((string)=>{
  return string.toString();
})
console.log("each name in stiring",convrtEachstring);

//divided no as 10
const array2=[100,200,300]
const divideNumberByTen=array2.map((div)=>{
  return div/10;
});
console.log("divsible by 10",divideNumberByTen);

//half of each number
const half=[2,4,6,8]
const HalfOfEachNumber=half.map((half)=>{
  return half/2;

});
console.log("half of each number",HalfOfEachNumber)


//string Array
const friut=['apple','banana','cherry'];
const convrtAllwordIntoUpperCase=friut.map((friut)=>{
return friut.toUpperCase();
})
console.log("string in uppercase",convrtAllwordIntoUpperCase);

//first letter uppercase
const name3=['rohan','neha','nisha'];
const convrtFirstLetterIntoUppercase=name3.map((capital)=>{
  return capital.charAt(0).toUpperCase()+capital.slice(1).toLowerCase();

})
console.log("first letter is uppercase",convrtFirstLetterIntoUppercase);


// Add aniaml word at end the lettter
const aniaml=['cat','dog','fish'];
const AddTheWordAnimal=aniaml.map((color)=>{
  return color+" animal"; 
})
console.log("add word animal",AddTheWordAnimal);

//object array
const array1=[{name:'Rohan',age:20},
  {name:'vaishu',age:22}]
  const returnname=array1.map((name)=>{
    return name.name;

  });
  console.log("name is ",returnname);

  //Add 10 rupes of each prise

  const array4=[{price:100},{price:200},{price:300}];
  const AddTenRupeseOfEachPrize=array4.map((pri)=>{
    return pri.price+10;
  })
  console.log("add the 10 rupes of each price",AddTenRupeseOfEachPrize)

  //append the city

  const data=[{city:"Delhi"},{city:'Pune'},{city:'Mumbai'}];
  const toappendTheCity=data.map(city=>`${city}city`);
    // return city.toappend();
  
console.log("Append the word city",toappendTheCity);

//add score by 10 pointsof each score

const Score=[{id:1,score:50},{id:2,score:75}];
const increaseScoreByTenPoints=Score.map((score)=>{
  return score.score+10;

})
console.log("increase each score by 10 point",increaseScoreByTenPoints);
  
//cobine fist and last letter  
const Name=[{first:"Pallavi",last:"shintre"},{first:"vaishu",last:"Patil"}]
const CombineName=Name.map((CombineName)=>{
  return CombineName.first+CombineName.last;
})
console.log("combination of name ",CombineName);
//prifix each colour with colourcode
const colour=['red','green','blue'];
const colourcode={
  red:'#FF0000',
  green:'#00FF00',
  blue:'#0000FF'
};
const resultOfColorCode=colour.map(c=>`${c} ${colourcode[c]}`

);
console.log("color with coulorcode :",resultOfColorCode);

//extract the domain name

const emailid=['sneha @ gmail.com','pallavi @ yaoo.com'];
const resultOfdomainName=emailid.map(e=>e.split('@')[1]);
console.log("show domain name from email",resultOfdomainName);

//.....HomeWork..........//

//forEach() it is used to run functions once for every element in an arry
//it dose not return any value or statment it just perform opration like print
//it new arry not return
//syntax:
const arraynumber=[1,2,3,4,5,6]; 
arraynumber.forEach((a)=>{
  console.log("print each element",a);

});
//print each student name 
const studentName=['rohan','pallavi','suchit','samir'];
studentName.forEach((returnEachStudentName)=>{
  console.log("return all student name",returnEachStudentName)
})
//print "roll no x:student name"
const students=[{id:1,name:"pallavi"}];
students.forEach((returnRollnoAndstudentName)=>{
  console.log("add roll no  and student name",returnRollnoAndstudentName.id + returnRollnoAndstudentName.name)
})
//- Add all numbers from this array using forEach()
  const marks = [10, 20, 30, 40];
marks.forEach(addtion => {
  console.log("add the marks from this array ",marks)
    
  });
  //- Print only uppercase names using forEach()
  const names = ["rohan", "pallavi", "suchit"];
names.forEach((returntoUpperCase)=>{
  console.log("convrt string into uppercase",returntoUpperCase.toUpperCase());

})
//- Create an array of objects and use forEach() to print —
//“<name> scored <marks> marks.”
const score=[{name:"vaishu",marks:90,},
              {name:"samu",marks:80},
              {name:"dipa",marks:70}
];
score.forEach((student)=>{
console.log(`${student.name} scored ${student.marks} marks.`);
});


////map():
//- Convert each student name to uppercase using map()
  const student1 = ["rohan", "pallavi", "suchit"];
  const returnStringIntoUppercase=student1.map((stud)=>{
    return stud.toUpperCase();
  })
  console.log("return string as uppercase",returnStringIntoUppercase);

  //- Add 5 bonus marks to each student’s score
  const studentmarks = [75, 80, 92, 60];
  const Addfivebonuscemarks=studentmarks.map((bonus)=>{
    return bonus+5;
  })
  console.log("return marks with adding five bonus",Addfivebonuscemarks)

//- Extract student names from array of objects
  const studentdata = [
    { name: "Rohan", age: 20 },
    { name: "Pallavi", age: 21 }
  ];
  const extractNameOfStudent=studentdata.map((data)=>{
return data.name;
  })
  console.log("extract student name only",extractNameOfStudent);
  
  //- Convert numbers into strings with “marks: ” prefix
  const scores = [10, 20, 30];
  const returnnameIntoSringwithPrefix=scores.map((score)=>{
return score.toString()+ " marks";

  })
  console.log("return number into string with marks",returnnameIntoSringwithPrefix)

  //- Return array of students’ roll numbers multiplied by 10
  const rollNos = [1, 2, 3, 4];
  const rollnoMultiplyByTen=rollNos.map((rollno)=>{
    return rollno*10;
  })
  console.log("return students roll number by multiply 10",rollnoMultiplyByTen);

//- Find students who scored above 80
  const studentscore=[70, 85, 90, 60, 95];
const returnStudentScore=studentscore.filter((m)=>{
  return m >= 80;
});

console.log("return students who scored above 80",returnStudentScore);

//- Filter out students whose status is "inactive"
  const studentStatus = [
   { name: "Rohan", status: "active" },
   { name: "Pallavi", status: "inactive" }
  ];
  const returnInactiveStudent=studentStatus.filter((st)=>{
return st.status=="inactive";
  })
  console.log("return student whose status is inactive",returnInactiveStudent);

  // - Get all even roll numbers
  const rollNumber = [1, 2, 3, 4, 5];
  const returnEvenNumber=rollNumber.filter((evenNo)=>{
    return evenNo%2==0;
})
console.log("get all even roll number",returnEvenNumber)

//- Filter names starting with “S”
  const name1 = ["Samir", "Rohan", "Suchit", "Pallavi"];
  const nameStartingWiths=name1.filter((n)=>{
    return n.startsWith('s');
  })
console.log("return names starting with s",nameStartingWiths)

//- Filter all students older than 18 years
const studedata = [
  { name: "Rohan", age: 17 },
  { name: "Pallavi", age: 19 }
  
];
const returnOlderStudentThaneightien=studedata.filter((old)=>{
return old.age >18
})
console.log("return student older then 18 years",returnOlderStudentThaneightien)
//.......................//
return (
    <div className="page-container">
      <div className="dashboard-header">
        <h1 style={{ margin: 0, color: '#1890ff' }}>Dashboard Overview</h1>
        <div style={{ fontSize: '14px', color: '#666' }}>
          Welcome back! Here's what's happening with your students.
        </div>
      </div>
      
      <Row gutter={[16, 16]} style={{ marginBottom: '24px' }}>
        <Col xs={24} sm={12} md={6}>
          <Card className="stats-card dashboard-card">
            <Statistic
              title="Total Students"
              value={studentsData.length}
              valueStyle={{ color: '#3f8600' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card className="stats-card dashboard-card">
            <Statistic
              title="Active Students"
              value={activeStudents}
              valueStyle={{ color: '#1890ff' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card className="stats-card dashboard-card">
            <Statistic
              title="Average Progress"
              value={averageProgress}
              suffix="%"
              valueStyle={{ color: '#722ed1' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card className="stats-card dashboard-card">
            <Statistic
              title="Total Courses"
              value={4}
              valueStyle={{ color: '#eb2f96' }}
            />
          </Card>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col xs={24} lg={12}>
          <Card 
            title="Recent Students" 
            extra={<Button type="link">View All</Button>}
            className="dashboard-card"
          >
            <List
              itemLayout="horizontal"
              dataSource={studentsData.slice(0, 4)}
              renderItem={student => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar icon={<UserOutlined/>} />}
                    title={student.name}
                    description={`${student.course} - ${student.progress}% complete`}
                  />
                  <Tag color={STATUS_COLORS[student.status]}>
                    {student.status.toUpperCase()}
                  </Tag>
                </List.Item>
              )}
            />
          </Card>
        </Col>
        <Col xs={24} lg={12}>
          <Card title="Progress Overview" className="dashboard-card">
            {studentsData.slice(0, 5).map(student => (
              <div key={student.id} style={{ marginBottom: '16px' }}>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  marginBottom: '8px' 
                }}>
                  <span style={{ fontWeight: '500' }}>{student.name}</span>
                  <span style={{ color: '#666' }}>{student.progress}%</span>
                </div>
                <Progress 
                  percent={student.progress} 
                  showInfo={false}
                  strokeColor={{
                    '0%': '#108ee9',
                    '100%': '#87d068',
                  }}
                />
              </div>
            ))}
          </Card>
        </Col>
      </Row>
    </div>
  );
}
