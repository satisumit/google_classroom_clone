onload();
function onload(){
  displayClasses();
  displaySideClasses();
}
function displayClasses(){
  let classContainerElement = document.querySelector('.class_container');
  let innerHtml=``;
  classrooms.forEach(classroom =>{
    innerHtml += `<div class="class1">
    <div class="up">
        <div class="class_info">
            <p class="class_name"> ${classroom.className} </p>
            <p class="info1">${classroom.info1}</p>
            <p class="teacher">${classroom.teacherName}</p>
        </div>
        <div class="icon">
            <a href="#"><span class="material-symbols-outlined" style="color: aliceblue;">
                more_vert
            </span></a>
        </div>        
    </div>
    
    <div class="teacher_id">${classroom.teacherName[0]}</div>
    <div class="empty"></div>
    <div class="bottom">
        <a href="#" class="icon"><span class="material-symbols-outlined">
            folder
            </span></a>
            <a href="#" class="icon"><span class="material-symbols-outlined">
                assignment_ind
            </span></a>
    </div>
  </div>`
  });
  classContainerElement.innerHTML = innerHtml;
}
function displaySideClasses(){
  let enrolledElement = document.querySelector('.enrolled');
  let innerHtml=``;
  classrooms.forEach(classroom => {
    innerHtml+= `<div class="side_classes">
    <div class="class_id">${classroom.className[0]}</div>
    <div class="side_class_info">
        <p class="side_class_name"> ${classroom.className}</p>
        <p class="side_info1">${classroom.info1}</p>
    </div>
</div>`
  });
  enrolledElement.innerHTML += innerHtml;
}