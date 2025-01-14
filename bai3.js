const firtPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('foo');
    }, 2000);
  });
  
  const secondPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('Error: som bug');
    }, 2000);
  });
  
  // Hàm getList với URL hợp lệ
  const getList = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts'); // URL thay thế
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json(); // Chuyển phản hồi thành JSON
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // Ném lại lỗi nếu cần xử lý thêm
    }
  };
  
  // Xử lý tất cả các Promise
  const handlePromises = async () => {
    try {
      // Kết hợp tất cả các promise
      const results = await Promise.allSettled([firtPromise, secondPromise, getList()]);
      
      // In kết quả
      console.log('Promise results:', results);
    } catch (error) {
      console.error('Error in promises:', error);
    }
  };
  
  handlePromises();
  