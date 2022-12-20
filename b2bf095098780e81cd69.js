import"./style.css";import*as THREE from"three";import{OrbitControls}from"three/examples/jsm/controls/OrbitControls.js";import*as dat from"dat.gui";const loader=new THREE.TextureLoader,height=loader.load("height2.png"),texture=loader.load("/texture.jpg"),alpha=loader.load("/alpha.jpg"),waves=loader.load("waves.jpg"),gui=new dat.GUI,canvas=document.querySelector("canvas.webgl"),scene=new THREE.Scene,round=new THREE.SphereGeometry(.1,7,30),gol=new THREE.MeshBasicMaterial;gol.color=new THREE.Color(13435135);const sphere=new THREE.Mesh(round,gol);scene.add(sphere),sphere.position.x=2,sphere.position.y=2,sphere.position.z=1;const round1=new THREE.SphereGeometry(.2,7,30),gol1=new THREE.MeshBasicMaterial({map:waves});gol1.color=new THREE.Color(13435135);const sphere1=new THREE.Mesh(round1,gol1);scene.add(sphere1),sphere1.position.x=-2,sphere1.position.y=1,sphere1.position.z=2;const donut=new THREE.TorusGeometry(.25,.01,20,50),pie=new THREE.MeshPhongMaterial,sweet=new THREE.Mesh(donut,pie);scene.add(sweet),sweet.position.x=-2,sweet.position.y=1,sweet.position.z=2;const geometry=new THREE.PlaneBufferGeometry(10,5,64,64),material=new THREE.MeshStandardMaterial({color:"blue",map:texture,displacementMap:height,alphaMap:alpha,transparent:!0}),plane=new THREE.Mesh(geometry,material);scene.add(plane),plane.rotation.x=181,gui.add(plane.rotation,"x").min(20).max(100),gui.add(plane.rotation,"y").min(20).max(100),gui.add(plane.rotation,"z").min(20).max(100);const pointLight=new THREE.PointLight(16711935,3);pointLight.position.x=2,pointLight.position.y=3,pointLight.position.z=4,scene.add(pointLight),gui.add(pointLight.position,"x"),gui.add(pointLight.position,"y"),gui.add(pointLight.position,"z");const col={color:"#00ffff"};gui.addColor(col,"color").onChange((()=>{pointLight.color.set(col.color)}));const sizes={width:window.innerWidth,height:window.innerHeight};window.addEventListener("resize",(()=>{sizes.width=window.innerWidth,sizes.height=window.innerHeight,camera.aspect=sizes.width/sizes.height,camera.updateProjectionMatrix(),renderer.setSize(sizes.width,sizes.height),renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))}));const camera=new THREE.PerspectiveCamera(75,sizes.width/sizes.height,.1,100);camera.position.x=0,camera.position.y=0,camera.position.z=4,scene.add(camera);const controls=new OrbitControls(camera,canvas);controls.enableDamping=!0;const renderer=new THREE.WebGLRenderer({canvas});renderer.setSize(sizes.width,sizes.height),renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));const clock=new THREE.Clock,tick=()=>{const e=clock.getElapsedTime();sphere.rotation.y=.5*e,plane.rotation.z=.03*e,sphere1.rotation.z=.5*e,renderer.render(scene,camera),window.requestAnimationFrame(tick)};tick();
