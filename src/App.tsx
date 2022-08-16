import React, { useState, useCallback, useMemo } from 'react'
import { View } from 'react-native'
import isEqual from 'lodash.isequal'

import { Project } from 'app/types/Project'
import { Task } from './types/Task'
import { ProjectsListView } from 'app/widgets/ProjectsList'
import { TasksListView } from './widgets/TasksList'
import { PROJECTS } from 'app/mock/data'

import styles from './App.styles'

function App() {
  const [projects, setProjects] = useState<Project[]>(PROJECTS)

  const defaultTasks = useMemo(() => {
    return projects.map(project => project.tasks).flat()
  }, [])

  const [tasks, setTasks] = useState<Task[]>(defaultTasks)

  const onProjectPress = useCallback((project: Project) => {
    setTasks(prev => {
      const isSecondPress = isEqual(prev, project.tasks)
      return isSecondPress ? defaultTasks : project.tasks
    })
  }, [])

  const onTaskPress = useCallback((task: Task) => {
    const changedProjects = projects.map(project => {
      project.tasks.map(({ name }, index) => {
        if (name === task.name) {
          task.completed
            ? (project.tasks[index].completed = false)
            : (project.tasks[index].completed = true)
        }
      })
      return project
    })
    setProjects(changedProjects)
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.column}>
        <ProjectsListView projects={projects} onProjectPress={onProjectPress} />
      </View>
      <View style={styles.column}>
        <TasksListView tasks={tasks} onTaskPress={onTaskPress} />
      </View>
    </View>
  )
}

export default App
