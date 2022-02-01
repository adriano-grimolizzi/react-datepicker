const Avatar = props => 
    <img className="Avatar"
        src={props.user.avatarUrl} 
        alt={props.user.name}      
    />

export default Avatar

// the Avatar doesn't need to know that it is being rendered inside a Comment.
// 'user' is more generic prop name than author. 
// It's better to name props from the component's own point of view rather than the context in which it is being used.