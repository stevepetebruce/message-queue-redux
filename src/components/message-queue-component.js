import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addMessage, deleteMessage } from '../actions/message-queue-action';
import { getId } from '../utils/idGenerator';

function MessageQueue(props) {
  const [message, setMessage] = useState('');

  const onChangeHandler = (e) => {
    setMessage(e.target.value);
  }

  const onSubmitHandler = (e) => {
      if(message === '') return;
      const id = getId();
      props.addMessage({
          id:id,
          message:message
      });
      setMessage('');
      const timer = setTimeout(
        () => props.deleteMessage(id)
        ,5000
      );
      return () => clearTimeout(timer);  
  }

  return (
    <>
      <header class="header">
        <label>Enter your message</label> 
        <div class="message-input">
          <input type="text" onChange={onChangeHandler} value={message}/>
          <button type="submit" onClick={onSubmitHandler}>Submit</button>
        </div>
      </header>
      <section class="messages-container">
      {
        props.messageQueue.map(queue => {
          return(
            <div key={queue.id} class="message">{queue.message}</div>
          )
        })
      }
      </section>
    </>
  )
}

const mapStateToProps = state => {
  return {
    messageQueue : state.messageQueue
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addMessage : (data) => dispatch(addMessage(data)),
    deleteMessage : (id) => dispatch(deleteMessage(id))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(MessageQueue);

