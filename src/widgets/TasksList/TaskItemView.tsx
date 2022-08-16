import React, { useCallback } from 'react'

import { Task } from 'app/types/Task'

import { Text, Card, Pressable, View } from 'app/ds'

import styles from './TaskItemView.styles'

export const TaskItemView: React.FC<{
  task: Task
  onPress: (task: Task) => void
}> = ({ task, onPress }) => {
  return (
    <Pressable onPress={useCallback(() => onPress(task), [onPress, task])}>
      <Card my={4} alignItems='center' flexDirection='row'>
        <View flex={1}>
          <Text typeface='default/14' color='default' mb={2}>
            {task.name}
          </Text>
          <Text typeface='default/12' color='dimmed'>
            {task.description}
          </Text>
        </View>
        {task.completed ? <View style={styles.circleIsActive} /> : <View style={styles.circle} />}
      </Card>
    </Pressable>
  )
}
