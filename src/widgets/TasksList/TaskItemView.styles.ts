import { StyleSheet } from 'react-native'

import colors from '../../theme/colors'

export default StyleSheet.create({
  circle: {
    borderRadius: 1000,
    height: 15,
    width: 15,
    borderWidth: 1,
    borderColor: colors.text.default
  },
  circleIsActive: {
    borderRadius: 1000,
    height: 15,
    width: 15,
    backgroundColor: colors.primary.main
  }
})
