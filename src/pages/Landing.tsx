
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, TrendingUp, Award, CheckCircle, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: BookOpen,
      title: "Easy Result Management",
      description: "Post and manage student results with our intuitive interface"
    },
    {
      icon: Users,
      title: "Student Tracking",
      description: "Keep track of all your students and their progress"
    },
    {
      icon: TrendingUp,
      title: "Performance Analytics",
      description: "Visualize student performance with detailed charts and graphs"
    },
    {
      icon: Award,
      title: "Grade Management",
      description: "Automated grading system with customizable grade scales"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Mathematics Teacher",
      content: "EduTeach has revolutionized how I manage my classroom. The result posting feature saves me hours every week!",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Science Teacher", 
      content: "The analytics dashboard helps me identify struggling students early and provide targeted support.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "English Teacher",
      content: "Simple, elegant, and powerful. Everything a teacher needs in one place.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary/30 to-primary/20">
      {/* Header */}
      <header className="border-b border-white/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold gradient-heading">EduTeach</h1>
          <div className="space-x-4">
            <Button variant="ghost" onClick={() => navigate("/login")}>
              Login
            </Button>
            <Button onClick={() => navigate("/signup")}>
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-heading">
            Your Complete Teacher Dashboard Solution
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Streamline your teaching workflow with our powerful platform. Post results, track student progress, and manage your classroom with ease.
          </p>
          <div className="space-x-4">
            <Button size="lg" onClick={() => navigate("/signup")} className="text-lg px-8 py-6">
              Start Teaching Better
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate("/login")} className="text-lg px-8 py-6">
              Sign In
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 gradient-heading">Everything You Need</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed specifically for educators to enhance their teaching experience
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="card-hover bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 gradient-heading">
              Why Teachers Love EduTeach
            </h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Save Time</h3>
                  <p className="text-muted-foreground">
                    Automate repetitive tasks and focus on what matters most - teaching your students.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Improve Student Outcomes</h3>
                  <p className="text-muted-foreground">
                    Track progress more effectively and identify students who need additional support.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Stay Organized</h3>
                  <p className="text-muted-foreground">
                    Keep all your teaching materials, results, and student data in one secure place.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:text-center">
            <img 
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Teacher using laptop"
              className="rounded-lg shadow-2xl w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 gradient-heading">What Teachers Say</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of educators who have transformed their teaching experience
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="card-hover bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardDescription className="text-base italic">
                  "{testimonial.content}"
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 gradient-heading">
            Ready to Transform Your Teaching?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of teachers who are already using EduTeach to enhance their classroom experience.
          </p>
          <div className="space-x-4">
            <Button size="lg" onClick={() => navigate("/signup")} className="text-lg px-8 py-6">
              Get Started Free
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate("/login")} className="text-lg px-8 py-6">
              Sign In to Dashboard
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8 text-center">
          <p className="text-muted-foreground">
            © 2024 EduTeach. Made with ❤️ for educators everywhere.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
