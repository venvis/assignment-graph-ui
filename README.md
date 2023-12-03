<p align="center">To run the script , clone the forked repo and navigate to the following directory : </p>

```sh
git clone git@github.com:venvis/assignment-graph-ui.git
cd assignment-graph-ui
cd src
npm start
```
<p align="center">Once started , it will automatically open localhost:3000 and this should be how index.tsx looks like</p>

<div align="center">
  <img src="https://i.imgur.com/lEoOxBA.png">
</div>
<br><br>
<p align="center"> Click on any node to see it's information : Name , Id , Indegree , Outdegree on the right hand side for Requirement 1</p>
<p align="center">While clicking on the nodes , every other node it is connected to and the neighbouring lines and arrows are also highlighted : Requirement 2</p>
<br><br>

<p align="center"> To change the name , into another , I have set the content of the h3 to be editable , so it can directly be changed . Requirement 3 </p>
<p align="center">For Requirement 4 , start searching by typing directly in the search field and automatically all nodes not related and their edges start disappearing , showing only related nodes from the search bar</p>
