import { useState } from 'react'
import {Text, View, TextInput, TouchableOpacity, FlatList, Alert} from 'react-native'

import {styles} from './styles'

import LogoComponent from '../../components/LayoutComponents/LogoComponent'
import PlusComponent from '../../components/LayoutComponents/PlusComponent'
import TaskComponent from '../../components/TaskComponent'
import EmptyComponent from '../../components/LayoutComponents/EmptyComponent'

export function Home() {
  const [tasks, setTasks] = useState<string[]>([])
  const [taskName, setTaskName]= useState('')
  const [completedTasks, setCompletedTasks] = useState<string[]>([])

  function handleTaskAdd() {
    setTasks(prevState => [...prevState, taskName])
    setTaskName('')
  }

  function handleTaskRemove(taskToRemove: string) {
    Alert.alert('Remover', `Deseja remover a tarefa?`, [
      {
        text: 'Sim',
        onPress: () => setTasks(prevState => prevState.filter(taskRemove => taskRemove != taskToRemove))
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

  function handleTaskChecked(taskToChecked: string, isChecked: boolean) {
    if (isChecked) {
      setCompletedTasks(prevState => [...prevState, taskToChecked])
    } else {
      setCompletedTasks(prevState => prevState.filter(task => task !== taskToChecked))
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <LogoComponent />
      </View>
      <View style={styles.content}>
        <View style={styles.containerInput}>
          <TextInput 
            style={styles.input}
            placeholder='Descrição da tarefa'
            placeholderTextColor={'#f2f2f2'}
            onChangeText={setTaskName}
            value={taskName}
          />
          <TouchableOpacity disabled={taskName.length == 0} onPress={handleTaskAdd} style={styles.addButton}>
            <PlusComponent />
          </TouchableOpacity>
        </View>
        <View style={styles.containerCount}>
          <View style={styles.containerCountText}>
            <Text style={styles.textCountCreated}>Criadas</Text>
            <View style={styles.containerTextCount}>
              <Text style={styles.textCount}>{tasks.length}</Text>
            </View>
          </View>
          <View style={styles.containerCountText}>
            <Text style={styles.textCountFinished}>Concluidas</Text>
            <View style={styles.containerTextCount}>
              <Text style={styles.textCount}>{completedTasks.length}</Text>
            </View>            
          </View>
        </View>
        <View style={styles.containerList}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={tasks}
            keyExtractor={item => item}
            renderItem={({item}) => (
              <TaskComponent
                key={item}
                task={item}
                onRemove={() => handleTaskRemove(item)}
                onChecked={(isChecked: boolean) => handleTaskChecked(item, isChecked)}
              />
            )}
            ListEmptyComponent={() => (
              <View style={styles.containerEmpty}>
                <EmptyComponent/>
                <Text style={[styles.listEmptyText, {fontWeight: 'bold', marginTop: 16, marginBottom: 6}]}>Você ainda não tem tarefas cadastradas</Text>
                <Text style={styles.listEmptyText}>Crie tarefas e organize seus itens a fazer.</Text>
              </View>
            )}
          />
        </View>
      </View>
    </View>
  )
}