const DeleteAlert = ({ content, onDelete }) => {
    return ( 
        <div classNmae="">
            <p className="text-sm">{content}</p>
            <div className="flex justify-end gap-3 mt-4">
                <button type="button" className="add-btn add-btn-fill" onClick={onDelete}>Delete</button>
            </div>
        </div>
    );
}
 
export default DeleteAlert;