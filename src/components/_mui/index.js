// 按需引用 iview 组件

// import Affix from 'iview/src/components/affix'
// import Alert from 'iview/src/components/alert'
// import BackTop from 'iview/src/components/back-top'
// import Badge from 'iview/src/components/badge'
// import Breadcrumb from 'iview/src/components/breadcrumb'
import Button from 'iview/src/components/button'
import Card from 'iview/src/components/card'
// import Carousel from 'iview/src/components/carousel'
import Cascader from './cascader'
import Checkbox from 'iview/src/components/checkbox'
// import Circle from 'iview/src/components/circle'
// import Collapse from 'iview/src/components/collapse'
import DatePicker from 'iview/src/components/date-picker'
import Dropdown from 'iview/src/components/dropdown'
import Form from 'iview/src/components/form'
import Icon from 'iview/src/components/icon'
import Input from 'iview/src/components/input'
import InputNumber from 'iview/src/components/input-number'
import LoadingBar from 'iview/src/components/loading-bar'
import Menu from 'iview/src/components/menu'
import Message from 'iview/src/components/message'
import Modal from 'iview/src/components/modal'
// import Notice from 'iview/src/components/notice'
import Page from 'iview/src/components/page'
import Poptip from 'iview/src/components/poptip'
// import Progress from 'iview/src/components/progress'
import Radio from 'iview/src/components/radio'
// import Rate from 'iview/src/components/rate'
// import Slider from 'iview/src/components/slider'
import Spin from 'iview/src/components/spin'
// import Steps from 'iview/src/components/steps'
import Switch from 'iview/src/components/switch'
import Table from 'iview/src/components/table'
import Tabs from 'iview/src/components/tabs'
// import Tag from 'iview/src/components/tag'
// import Timeline from 'iview/src/components/timeline'
import TimePicker from 'iview/src/components/time-picker'
import Tooltip from 'iview/src/components/tooltip'
// import Transfer from 'iview/src/components/transfer'
// import Tree from 'iview/src/components/tree'
// import Upload from 'iview/src/components/upload'
import { Row, Col } from 'iview/src/components/grid'
import { Select, Option, OptionGroup } from 'iview/src/components/select'

const mui = {
  // Affix,
  // Alert,
  // BackTop,
  // Badge,
  // Breadcrumb,
  // BreadcrumbItem: Breadcrumb.Item,
  iButton: Button,
  Button,
  ButtonGroup: Button.Group,
  Card,
  // Carousel,
  // CarouselItem: Carousel.Item,
  Cascader,
  Checkbox,
  CheckboxGroup: Checkbox.Group,
  // iCircle: Circle,
  DatePicker,
  Dropdown,
  DropdownItem: Dropdown.Item,
  DropdownMenu: Dropdown.Menu,
  Form,
  iForm: Form,
  FormItem: Form.Item,
  Col,
  iCol: Col,
  // Collapse,
  Icon,
  Input,
  iInput: Input,
  InputNumber,
  LoadingBar,
  Menu,
  iMenu: Menu,
  MenuGroup: Menu.Group,
  MenuItem: Menu.Item,
  Submenu: Menu.Sub,
  Message,
  Modal,
  // Notice,
  Option: Option,
  iOption: Option,
  OptionGroup,
  Page,
  // Panel: Collapse.Panel,
  Poptip,
  // Progress,
  // iProgress: Progress,
  Radio,
  RadioGroup: Radio.Group,
  // Rate,
  Row,
  Select,
  iSelect: Select,
  // Slider,
  Spin,
  // Step: Steps.Step,
  // Steps,
  // Switch,
  iSwitch: Switch,
  iTable: Table,
  Table,
  Tabs: Tabs,
  TabPane: Tabs.Pane,
  // Tag,
  // Timeline,
  // TimelineItem: Timeline.Item,
  TimePicker,
  Tooltip
  // Transfer,
  // Tree,
  // Upload
}

const install = function (Vue, opts = {}) {
  Object.keys(mui).forEach((key) => {
    Vue.component(key, mui[key])
  })

  Object.defineProperty(Vue.prototype, '$Loading', { value: LoadingBar })
  Object.defineProperty(Vue.prototype, '$Message', { value: Message })
  Object.defineProperty(Vue.prototype, '$Modal', { value: Modal })
  // Object.defineProperty(Vue.prototype, '$Notice', { value: Notice })
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default Object.assign(mui, {install})   // eslint-disable-line no-undef
