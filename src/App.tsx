import React, { useCallback } from 'react'
import { View } from 'react-native'

import { Project } from 'app/types/Project'
import { ProjectsListView } from 'app/widgets/ProjectsList'
import { TasksListView } from './widgets/TasksList'
import { PROJECTS } from 'app/mock/data'
import { Task } from './types/Task'

import styles from './App.styles'

function App() {
  const onProjectPress = useCallback((project: Project) => {
    // TODO
  }, [])

  const onTaskPress = useCallback((task: Task) => {
    // TODO
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.column}>
        <ProjectsListView projects={PROJECTS} onProjectPress={onProjectPress} />
      </View>
      <View style={styles.column}>
        <TasksListView
          tasks={PROJECTS.map(project => project.tasks).flat()}
          onTaskPress={onTaskPress}
        />
      </View>
    </View>
  )
}

export default App
