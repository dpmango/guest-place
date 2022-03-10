import { mount } from '@vue/test-utils'
import Homepage from '@/pages/index.vue'
import About from '@/pages/About/index.vue'

describe('Homepage', () => {
  test('page rendered', () => {
    const wrapper = mount(Homepage)
    expect(wrapper.vm).toBeTruthy()
  })
})

describe('About', () => {
  test('page rendered', () => {
    const wrapper = mount(About)
    expect(wrapper.vm).toBeTruthy()
  })
})
