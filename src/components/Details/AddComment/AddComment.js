import { useForm } from "../../../hooks/useForm";

export const AddComment = ({
    onCommentSubmit,
}) =>{
    const {values, changeHandler, onSubmit} = useForm({
        comment:''
    }, onCommentSubmit);
    return(
        <div className='comment' >
            <label >New Comment:</label>
            <form className='from' onSubmit={onSubmit} style={{display:'block', width:'60%' }}>
                <textarea name='comment' placeholder="Put your comment here..." value={values.comment} onChange={changeHandler} ></textarea>
                <input className='bnt submit' type='submit' value='Add comment' />
            </form>
        </div>
    );
}