import { GUI } from 'dat.gui'
import * as THREE from 'three'
import Stats from 'three/examples/jsm/libs/stats.module.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
const { random, PI, floor, ceil, min, max, sin, cos } = Math

export function main() {
  const canvasDom: HTMLCanvasElement = document.querySelector('#canvas')!
  const canvasCon: HTMLElement = document.querySelector('#canvasCon')!

  let width = window.innerWidth
  let height = window.innerHeight
  let stats: Stats
  let orbitControls: OrbitControls
  let scene: THREE.Scene
  let camera: THREE.PerspectiveCamera
  let renderer: THREE.WebGLRenderer
  let axesHelper: THREE.AxesHelper

  let cube: THREE.Group
  let viewCenter = {
    x: 120,
    y: 60,
  }
  let viewDistance = 100
  let light1: THREE.PointLight // 垂直方向绕基准点旋转的点光源
  let light2: THREE.PointLight // 水品方向绕基准点旋转的点光源

  const params = {
    showHelper: true
  }
  
  initGUI()
  initTHREE()
  initMesh()
  initLight()
  render()

  
  function initGUI() {
    let panel = new GUI()
    panel.add(params, 'showHelper').onChange(val=>{
      axesHelper.visible = val
    })
  }

  function initMesh() {
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.5,
    })
    const meshMaterial = new THREE.MeshPhongMaterial({
      color: 0x156289,
      emissive: 0x072534,
      side: THREE.DoubleSide,
      flatShading: true,
    })
    const geometry = new THREE.BoxGeometry(10, 10, 10)
    cube = new THREE.Group()
    cube.add(new THREE.LineSegments(geometry, lineMaterial))
    cube.add(new THREE.Mesh(geometry, meshMaterial))
    scene.add(cube)
  }

  function initLight() {
    light1 = new THREE.PointLight(0xffffff, 2, 300)
    light1.position.set(viewCenter.x, viewCenter.y, viewDistance)
    light2 = new THREE.PointLight(0xffffff, 2, 300)
    light2.position.set(viewCenter.x, viewCenter.y, viewDistance)
    scene.add(light1)
    scene.add(light2)
  }
  function updateLight(){
    let angle = Date.now()*0.005
    const y = sin(angle) * viewDistance
    const z1 = cos(angle) * viewDistance
    light1.position.y = y
    light1.position.z = z1
  
    const x = sin(angle) * viewDistance
    const z2 = cos(angle) * viewDistance
    light2.position.x = x
    light2.position.z = z2
  }

  function animate() {
    let t = Date.now() * 0.001
    cube.rotation.x = t
    cube.rotation.y = t
    updateLight()
  }
  // three初始化
  function initTHREE() {
    canvasDom.style.display = 'block'
    scene = new THREE.Scene()
    scene.background = new THREE.Color(0x444444)
    camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
    renderer = new THREE.WebGLRenderer({
      canvas: canvasDom,
      antialias: true,
    })
    renderer.setSize(width, height)
    // renderer.setPixelRatio(window.devicePixelRatio) // 不推荐
    window.addEventListener('resize', onWindowResize)

    // 坐标轴
    axesHelper = new THREE.AxesHelper(1000)
    scene.add(axesHelper)

    // 环境光
    scene.add(new THREE.AmbientLight(0x404040))

    // 帧率状态
    stats = Stats()
    canvasCon.append(stats.dom)

    // 轨道控制器
    orbitControls = new OrbitControls(camera, renderer.domElement)
    orbitControls.target = new THREE.Vector3(0, 0, 0)
    orbitControls.object.position.set(10, 10, 10)
    orbitControls.update()
  }
  // 绘制
  function render() {
    requestAnimationFrame(render)
    stats.update()
    animate()
    renderer.render(scene, camera)
  }
  // 自适应
  function onWindowResize() {
    width = window.innerWidth
    height = window.innerHeight
    camera.aspect = width / height
    camera.updateProjectionMatrix()
    renderer.setSize(width, height)
  }
}
