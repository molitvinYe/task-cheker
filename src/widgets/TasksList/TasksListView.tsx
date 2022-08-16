import React, { useCallback } from 'react'
import { FlatList } from 'react-native'

import { Task } from 'app/types/Task'

import { Header } from 'app/ds'

import { TaskItemView } from './TaskItemView'
import styles from './TasksListView.styles'

export const TasksListView: React.FC<{
  tasks: Task[]
  projectName: string
  onTaskPress: (tasks: Task) => void
}> = ({ tasks, projectName, onTaskPress }) => {
  const renderItem = useCallback(
    ({ item }: { item: Task }) => <TaskItemView task={item} onPress={onTaskPress} />,
    []
  )

  return (
    <FlatList
      data={tasks}
      ListHeaderComponent={<Header mb={12}>{projectName}</Header>}
      renderItem={renderItem}
      style={styles.list}
    />
  )
}
