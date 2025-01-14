const class1 = [ {
    mssv: 'PS0000',
    name: 'Nguyen Van A',
    avgPoint: 8.9,
    avgTraningPoint: 7,
    status: 'pass',
    }, 
    {
    mssv: 'PS0001',
    name: 'Nguyen Van B',
    avgPoint: 4.9,
    avgTraningPoint: 10,
    status: 'pass',
    }
    ];
    const class2 = [ {
    mssv: 'PS0002',
    name: 'Nguyen Van C',
    avgPoint: 4.9,
    avgTraningPoint: 10,
    status: 'failed',
    }, 
    {
    mssv: 'PS0003',
    name: 'Nguyen Van D',  
    avgPoint: 10,
    avgTraningPoint: 10,
    status: 'pass',
    },
    {
    mssv: 'PS0004',
    name: 'Nguyen Van E',
    avgPoint: 10,
    avgTraningPoint: 2,
    status: 'pass',
    },
    ]
    const allStudent=class1.concat(class2);
    console.log(allStudent);
    const quamon= allStudent.filter(student =>student.status =='pass');
    console.log('danh sách sinh viên qua môn', quamon);
    const diemso=quamon.sort((a,b) =>a.avgPoint - b.avgPoint);
    console.log('danh sách sinh viên sắp sếp theo điểm số',diemso);
    const diemrenluyen=quamon.sort((a,b) =>a.avgTraningPoint - b.avgTraningPoint);
    console.log('danh sách sinh viên sắp sếp theo điểm rèn luyện',diemrenluyen);
  
    