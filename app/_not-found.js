export default function NotFound() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: 'black', 
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem',
      textAlign: 'center'
    }}>
      <h1 style={{ 
        fontSize: '6rem', 
        fontWeight: 'bold', 
        marginBottom: '1rem',
        color: '#a3a3a3'
      }}>404</h1>
      <h2 style={{ 
        fontSize: '2rem', 
        fontWeight: 'bold', 
        marginBottom: '1.5rem' 
      }}>Page Not Found</h2>
      <p style={{ 
        fontSize: '1.125rem', 
        color: '#d1d5db', 
        maxWidth: '28rem',
        marginBottom: '2rem'
      }}>
        The page you are looking for doesn't exist or has been moved.
      </p>
      <a href="/" style={{
        display: 'inline-block',
        backgroundColor: '#3b3b3b',
        color: 'white',
        fontWeight: 'medium',
        padding: '0.75rem 1.5rem',
        borderRadius: '0.375rem',
        textDecoration: 'none'
      }}>
        Return Home
      </a>
    </div>
  )
} 