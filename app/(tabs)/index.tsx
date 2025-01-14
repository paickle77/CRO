import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Try it</ThemedText>
        <ThemedText>
          Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
          Press{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: 'F12',
            })}
          </ThemedText>{' '}
          to open developer tools.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Explore</ThemedText>
        <ThemedText>
          Tap the Explore tab to learn more about what's included in this starter app.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          When you're ready, run{' '}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});

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

  //bai2
  const oldData=[
    {code:'ab',name:'son moi'},
    {code:'ac',name:'sua rua mat'},
    {code:null,name:null},
    {code:null,name:''}
  ]
  const newData={
    ab:{code:'ab',name:'son moi'},
    ac:{code:'ac',name:'sua rua mat'}
  };