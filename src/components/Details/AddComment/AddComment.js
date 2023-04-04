import styles from './AddComment.module.css'
import { useForm } from "../../../hooks/useForm";

export const AddComment = ({
    onCommentSubmit,
}) =>{
    const {values, changeHandler, onSubmit} = useForm({
        comment:''
    }, onCommentSubmit);
    return(
        <div className={styles.addComment} >
            <h1>Add new Comment:</h1>
            <form className='from' onSubmit={onSubmit} >
                <textarea name='comment' placeholder="Put your comment here..." value={values.comment} onChange={changeHandler} />
                <input className='bnt submit' type='submit' value='Add comment' />
            </form>
        </div>
    );
}