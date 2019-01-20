import Vue from 'vue'
import 'iview/dist/styles/iview.css'

import {
  Row,
  Col,
  Layout,
  Header,
  Content,
  Sider,
  Footer,
  Menu,
  MenuGroup,
  Submenu,
  MenuItem,
  Icon,
  Breadcrumb,
  BreadcrumbItem,
  Tabs,
  TabPane,
  Page,
  Steps,
  Step,
  Input,
  Radio,
  RadioGroup,
  Checkbox,
  CheckboxGroup,
  CellGroup,
  Cell,
  Select,
  Slider,
  Option,
  Switch,
  Table,
  AutoComplete,
  DatePicker,
  TimePicker,
  Cascader,
  InputNumber,
  Rate,
  Upload,
  ColorPicker,
  Form,
  FormItem,
  Message,
  Notice,
  Modal,
  Tooltip,
  Poptip,
  Progress,
  Tag,
  Spin,
  Button,
  ButtonGroup,
  Divider,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Avatar,
  Badge,
  Carousel,
  CarouselItem,
  Card,
  BackTop
} from 'iview'

let components = [Row, Col, Layout, Header, Content, Sider, Footer, Menu, MenuGroup, Submenu, MenuItem, Icon, Breadcrumb, BreadcrumbItem, Tabs, TabPane, Page, Steps, Step, Input, Radio, RadioGroup, Checkbox, CheckboxGroup, CellGroup, Cell, Select, Slider, Option, Switch, Table, AutoComplete, DatePicker, TimePicker, Cascader, InputNumber, Rate, Upload, ColorPicker, Form, FormItem, Message, Notice, Modal, Tooltip, Poptip, Progress, Tag, Spin, Button, ButtonGroup, Divider, Dropdown, DropdownMenu, DropdownItem, Avatar, Badge, Carousel, CarouselItem, Card]

Vue.component('i-backTop', BackTop)

components.map((item) => {
  if (typeof item.name !== 'undefined') {
    Vue.component(item.name, item)
  }
})

Vue.prototype.$Message = Message
Vue.prototype.$Notice = Notice
Vue.prototype.$Modal = Modal
