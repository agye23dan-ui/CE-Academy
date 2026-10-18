# Robotics and Mechatronics: 14-Week Study Plan and Resources

Time budget: 10 to 13 hours per week (3 reading or lectures, 7 to 9 simulation, building and testing, 1 review with the app's quizzes). Robotics is learned by integrating: compute the kinematics, simulate it, then drive a real motor with your own code. A modest kit (microcontroller, two geared DC motors with encoders, motor driver, IMU, a distance sensor, a small servo arm) is enough for almost every lab.

## Textbooks
- John Craig, *Introduction to Robotics: Mechanics and Control* (the standard for kinematics and dynamics); Mark Spong, Seth Hutchinson and M. Vidyasagar, *Robot Modeling and Control*.
- Kevin Lynch and Frank Park, *Modern Robotics: Mechanics, Planning, and Control* (free PDF, with code and Coursera lectures).
- Sebastian Thrun, Wolfram Burgard and Dieter Fox, *Probabilistic Robotics* (filters, localization, SLAM); Roland Siegwart, Illah Nourbakhsh and Davide Scaramuzza, *Introduction to Autonomous Mobile Robots*.
- Devdas Shetty and Richard Kolk, *Mechatronics System Design*; W. Bolton, *Mechatronics*; Peter Corke, *Robotics, Vision and Control* (Python/MATLAB toolboxes).
- Steven LaValle, *Planning Algorithms* (free online) for motion planning.

## Free courses and resources
- Modern Robotics specialization (Northwestern, Coursera); MIT 6.4210 Robotic Manipulation; Stanford CS223A Introduction to Robotics; CMU 16-311 materials.
- Peter Corke's Robotics Toolbox (Python) and QuantEcon-style notebooks; Brian Douglas's control and robotics videos; Sebastian Thrun's "Artificial Intelligence for Robotics" (Udacity).
- ROS 2 documentation and tutorials; Gazebo, Webots and MuJoCo simulators; The Construct's free ROS lessons.
- Open hardware: TurtleBot, Pololu 3pi, ESP32 + L298N/TB6612 motor-driver kits, low-cost robot arms (SO-100, uArm).
- ISO 10218 and ISO/TS 15066 summaries from robot manufacturers' safety guides.

## Tools
Python (NumPy, SciPy, python-control, Matplotlib), the Robotics Toolbox, ROS 2 with Gazebo, a CAD program (Fusion 360, FreeCAD, Onshape), a microcontroller IDE (PlatformIO or Arduino), an oscilloscope or logic analyser, a lab power supply with current limit, and Git.

## Week by week

**Week 1: Introduction, robot types and system architecture.** DOF, workspace, accuracy versus repeatability, sensors-actuators-computing loop. Lab: build a block diagram of a robot you know and list its specifications.

**Week 2: Sensors.** Encoders, IMU, ultrasonic, LiDAR, cameras, noise and calibration. Lab: read an encoder and compute wheel speed and distance per count; characterize an ultrasonic sensor's accuracy against a ruler.

**Week 3: DC motors and drivers.** Motor model, torque-speed curve, H-bridge and PWM, current limits, thermal limits. Lab: measure Kt, R and no-load speed; plot the torque-speed line.

**Week 4: Gears, steppers, servos and actuator sizing.** Reflected inertia, backlash, holding torque, motor selection. Lab: size a motor and gearbox for a given arm and verify with a measured torque test.

**Week 5: Spatial mathematics.** Rotation matrices, homogeneous transforms, Euler angles, quaternions. Lab: code transform composition in Python; verify RᵀR = I; visualize frames.

**Week 6: Forward and inverse kinematics.** DH parameters, planar and 3-DOF arms, multiple IK solutions, workspace. Lab: implement FK/IK for a two-link arm and compare with a servo arm; verify both elbow configurations.

**Week 7: Midterm and Jacobians.** Review. Velocity kinematics, singularities, manipulability, statics (τ = Jᵀ F). Lab: compute J numerically and plot the determinant over the workspace.

**Week 8: Dynamics and trajectories.** Gravity and inertia torques, Lagrange/Newton-Euler overview, cubic, quintic and trapezoidal profiles. Lab: generate trajectories and compute required torque along them.

**Week 9: Control.** Cascade loops, PID tuning, second-order specifications, anti-windup, feedforward, gain and phase margin. Lab: tune a speed loop on a real motor; record step responses and compare with the model.

**Week 10: Mobile robot kinematics and odometry.** Differential drive, Ackermann, non-holonomic constraints, pure pursuit. Lab: drive a square and measure the closure error; calibrate wheel radius and base.

**Week 11: State estimation.** Kalman filter, EKF, particle filter, sensor fusion, IMU attitude estimation. Lab: implement a 1D Kalman filter, then a complementary filter for pitch.

**Week 12: Perception and mapping.** Camera model, stereo depth, occupancy grids, scan matching, SLAM overview. Lab: build an occupancy grid from simulated LiDAR data in a notebook.

**Week 13: Planning, behaviours and software.** Dijkstra, A*, RRT, dynamic window approach, behaviour trees, ROS 2 nodes/topics/tf. Lab: run navigation in Gazebo and tune the costmap.

**Week 14: Safety, integration and project.** Risk assessment, emergency stop, ISO standards, testing methods. Final project demonstration (a mobile base or arm performing a task with measured accuracy) and past-paper revision.

## Assessment pattern used in this course
Three assignments (spatial description and manipulator kinematics; actuators, sensors, dynamics and trajectories; mobile robots, control, estimation and planning), a class test, and a three-hour final. Practise by implementing each worked example in code and then changing the parameters.

## Study tips
- Always draw the frames and the sign conventions before writing any equation.
- Check kinematics numerically: compute forward kinematics of your inverse-kinematics answer.
- Respect hardware limits: set current limits on the supply, test at low speed first, and keep an emergency stop within reach.
- Tune inner loops first (current, then velocity, then position) and log step responses.
- Calibrate every sensor and keep a record of the transform between sensor frames.
