const panelWrapper = document.querySelector('.container')
const panels = document.querySelectorAll('.panel')

panelWrapper.addEventListener('click', function (e) {
  const currPanel = e.target.closest('.panel')
  if(!currPanel) return;
  panels.forEach((panel) => panel.classList.remove('active'))
  currPanel.classList.add('active')
})
