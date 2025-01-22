import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Navigation */}
      <nav className="container mx-auto p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/5d95635d-4c26-4941-94d0-302c460666e4.png" 
              alt="NewPhysio Logo" 
              className="h-12 w-auto"
            />
          </div>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[400px]">
                    <div className="row-span-3">
                      <h4 className="font-medium leading-none">Our Services</h4>
                      <p className="text-sm text-muted-foreground">
                        Comprehensive physiotherapy resources and opportunities
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <Button variant="ghost" className="justify-start">Blog Posts</Button>
                      <Button variant="ghost" className="justify-start">Courses</Button>
                      <Button variant="ghost" className="justify-start">Job Opportunities</Button>
                      <Button variant="ghost" className="justify-start">Workshops</Button>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Button variant="ghost">About</Button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Button variant="ghost">Contact</Button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div className="flex gap-4">
            <Button variant="outline">Sign In</Button>
            <Button>Sign Up</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-bold mb-6">Welcome to NewPhysio Academy</h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Empowering physiotherapy graduates with knowledge, opportunities, and community support
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg">Get Started</Button>
          <Button size="lg" variant="outline">Learn More</Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">What We Offer</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Knowledge Hub</CardTitle>
              <CardDescription>Access to comprehensive learning resources</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Free materials, case studies, and expert insights to enhance your professional knowledge.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Career Opportunities</CardTitle>
              <CardDescription>Connect with potential employers</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Latest job postings, internships, and networking opportunities for physiotherapists.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Professional Development</CardTitle>
              <CardDescription>Workshops and courses</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Online and offline workshops, specialized courses, and certification programs.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Community Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl font-bold mb-8">Join Our Growing Community</h2>
        <p className="text-xl text-gray-600 mb-8">
          Connect with fellow physiotherapists, share knowledge, and grow together
        </p>
        <div className="flex justify-center gap-8">
          <Card className="w-[300px]">
            <CardHeader>
              <CardTitle>Social Channels</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-4">
                <Button variant="outline">WhatsApp Channel</Button>
                <Button variant="outline">Telegram Group</Button>
                <Button variant="outline">Facebook Page</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">NewPhysio</h3>
              <p className="text-gray-600">Empowering the next generation of physiotherapists</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Home</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">About</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Services</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Blog</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Courses</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Workshops</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Jobs</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">WhatsApp</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Telegram</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Facebook</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center">
            <p className="text-gray-600">&copy; 2024 NewPhysio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;