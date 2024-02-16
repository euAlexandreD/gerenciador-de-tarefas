
import React, { useState } from "react"
import { v4 as uuid } from "uuid"
import { BoxInformations, Button, Container, Input, InputButton, Icons, Trash, Rocket } from "../../styles"




export const Home = () => {

    const [list, setList] = useState([])
    const [task, setTask] = useState("")

    const myInput = (event) => {

        setTask(event.target.value)
    }

    const myButton = () => {
        if(task){
            setList([...list, { id: uuid(), task, finished: false }])
        } else (
            alert("Adicione tarefas a lista!")
        )
       
    }

    const endTask = (id) => {

        const newList = list.map(item => (
            item.id === id ? { ...item, finished: !item.finished } : item
        ))

        setList(newList)
    }

    const deleteTask = (id) => {

        const newList = list.filter(item => item.id !== id)

        setList(newList)
    }

    return (
        <>
            <Container>
                <BoxInformations>
                    <InputButton>
                        <Input onChange={myInput} placeholder="o que tenho a fazer..." />
                        <Button onClick={myButton}>Adicionar</Button>
                    </InputButton>

                    <ul>

                        {list.length > 0 ? (
                            list.map(item => (
                                <Icons isFinished={item.finished} key={item.id}>
                                    <Trash onClick={() => deleteTask(item.id)} />
                                    <li >{item.task}</li>
                                    <Rocket onClick={() => endTask(item.id)} />
                                </Icons>
                            ))
                        ) : (
                            <h3>Sem tarefas a fazer</h3>
                        )}
                    </ul>
                </BoxInformations>
            </Container>
        </>
    )
}
