const oldData=[
    {code:'ab',name:'son moi'},
    {code:'ac',name:'sua rua mat'},
    {code:null,name:null},
    {code:null,name:''}
  ]
  const parseArrayToObject = ({array=[],keyId=''})=>
    Object.fromEntries(
      array?.map(item=>[keyId ? item?.[keyId]:item, item]) || [],
    );


    const filterObject = obj => {
        Object.keys(obj).forEach(key => {
          // Xóa mục nếu giá trị là null hoặc không hợp lệ
          if (!obj[key] || obj[key].name === null || obj[key].name === '') {
            delete obj[key];
          }
        });
        return obj;
      };
    const newData = parseArrayToObject({ array: oldData, keyId: 'code' });
    const filteredData = filterObject(newData);
    console.log('Old Data:', oldData);
console.log('Parsed Data:', newData);
console.log('Filtered Data:', filteredData);