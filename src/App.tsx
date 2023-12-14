import './assets/styles/App.css';
import { useRoutes } from 'react-router-dom';
import { Home } from '@components/home/home.component';
import { TaskComponent } from '@components/task/taskComponent';
import { TaskFormComponent } from '@components/taskForm/taskFormComponent';
import { ParentComponent } from '@components/parent/parentComponent';

function App() {
  const element = useRoutes([
    {
      path: '/',
      element: <ParentComponent />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: 'tasks',
          element: <TaskComponent/>
        },
        {
          path: 'taskForm',
          element: <TaskFormComponent />
        }
      ]
    }
  ]);
  return element;
}

export default App
