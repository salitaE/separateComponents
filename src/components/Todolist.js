import react from 'react';

export default function Todolist(props) {
    return(
        <div>
          <table>
              <thead className="tHead">
                  <tr>
                      <th>
                          Date
                      </th>
                  </tr>
                  <tr>
                      <th>
                          Description
                      </th>
                  </tr>
              </thead>
            <tbody className="tBody">
            {
              props.todos.map((addtodo, index) => 
                <tr key={index}>
                  <td>{addtodo.date}</td>
                  <td>{addtodo.desc}</td>
                  <td>
                      <button onClick={() => props.poistaTodo(index)}>Delete </button>
                  </td>
                </tr>
              )
            }
        </tbody>
      </table>
        </div>
    )
}