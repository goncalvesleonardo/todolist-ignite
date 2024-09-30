import {View, Text, TouchableOpacity} from 'react-native'
import {useState} from 'react'
import Checkbox from 'expo-checkbox';
import TrashComponent from '../LayoutComponents/TrashComponent'

import {styles} from './styles'

type Props = {
  task: string,
  onRemove: () => void,
  onChecked: (isChecked: boolean) => void
}

export default function TaskComponent({task, onRemove, onChecked}: Props) {
  const [taskCompleted, setTaskCompleted] = useState(false)

  function handleCheckboxChange() {
    const newValue = !taskCompleted
    setTaskCompleted(newValue)
    onChecked(newValue)
  }

  return (
    <View style={styles.containerList}>
      <Checkbox

        color={!taskCompleted ? '#4EA8DE' : '#5E60CE'} 
        style={[styles.checkbox]} 
        value={taskCompleted} 
        onValueChange={handleCheckboxChange} 
      />
      <Text style={[styles.textTask, taskCompleted ? {textDecorationLine: 'line-through', color: '#808080'} : null]}>
        {task}
      </Text>
      <TouchableOpacity onPress={onRemove}>
        <TrashComponent />
      </TouchableOpacity>
    </View>
  )
}
