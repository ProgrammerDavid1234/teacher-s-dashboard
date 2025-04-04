
import LoginForm from "@/components/auth/LoginForm";

const Login = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary/30 to-primary/20 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md text-center mb-8">
        <h1 className="text-4xl font-bold gradient-heading mb-2">EduTeach</h1>
        <p className="text-muted-foreground">Your complete teacher dashboard solution</p>
      </div>
      <LoginForm />
    </div>
  );
};

export default Login;
