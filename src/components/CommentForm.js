import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { commentAdd } from '../actions/actions';
import Field from './forms/Field'


const CommentForm = ({ postId }) => {
  
    const [comment, setComment] = useState( {
      content: ""
    });

    const [errors, setErrors] = useState({
      content: "",
     
    });
     const dispatch = useDispatch();


     const handleChange = ({currentTarget}) => {
        const {name, value} = currentTarget;
        setComment({...comment,[name]: value});
    };
    const handleSubmit = async (event) => {
      event.preventDefault();

     try {
      dispatch(commentAdd(postId, comment))
    } catch ({ response }) {
      
      const { violations } = response.violations;
      if (violations) {
        const apiErros = {};
        violations.forEach(({ propertyPath, message }) => {
          apiErros[propertyPath] = message;
        });
        setErrors(apiErros);
        
        toast.error("Des erreurs dans votre formulaire");
      }
    }
  };

  return (
        
             <div className="card mb-3 mt-3 shadow-sm">
                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                  <Field
                      name="content"
                      label="Tapez votre commentaire"
                      value={comment.content}
                      onChange={handleChange}
                      type="textarea"
                      error={errors.content}
                    />
                    <button type="submit" className="btn btn-primary btn-big btn-block">
                      Commenter
                    </button>
                  </form>
                </div>
              </div>
        
    )
}

export default CommentForm