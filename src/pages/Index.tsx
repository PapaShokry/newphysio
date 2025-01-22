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
                <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[400px]">
                    <div className="row-span-3">
                      <h4 className="font-medium leading-none">Learning Resources</h4>
                      <p className="text-sm text-muted-foreground">
                        Comprehensive physiotherapy education and opportunities
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <Button variant="ghost" className="justify-start">Blog Posts</Button>
                      <Button variant="ghost" className="justify-start">Courses</Button>
                      <Button variant="ghost" className="justify-start">Announcements</Button>
                      <Button variant="ghost" className="justify-start">Certificates</Button>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Community</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[400px]">
                    <div className="row-span-3">
                      <h4 className="font-medium leading-none">Join Our Community</h4>
                      <p className="text-sm text-muted-foreground">
                        Connect with fellow physiotherapists across platforms
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <Button variant="ghost" className="justify-start">WhatsApp</Button>
                      <Button variant="ghost" className="justify-start">Telegram</Button>
                      <Button variant="ghost" className="justify-start">Facebook</Button>
                      <Button variant="ghost" className="justify-start">Instagram</Button>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Button variant="ghost">AI Assistant</Button>
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
          Your comprehensive platform for physiotherapy education, job opportunities, and professional growth
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg">Explore Courses</Button>
          <Button size="lg" variant="outline">Read Blog</Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Our Platform Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Rich Blog Content</CardTitle>
              <CardDescription>SEO-optimized articles with reading time estimates</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Expert-written articles with progress tracking and easy sharing across social platforms.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Professional Courses</CardTitle>
              <CardDescription>Free and premium learning opportunities</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Structured courses with certificates, taught by experienced educators in the field.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>AI Assistant</CardTitle>
              <CardDescription>Intelligent physiotherapy support</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Get instant answers to your physiotherapy questions with our specialized AI chatbot.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Announcements Preview */}
      <section className="container mx-auto px-4 py-20 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">Latest Updates</h2>
        <div className="max-w-3xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Announcements</CardTitle>
              <CardDescription>Stay updated with the latest opportunities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <span className="text-sm text-gray-500">2 hours ago</span>
                  <h3 className="font-semibold mt-1">New Job Opportunity Available</h3>
                  <p className="text-gray-600">Senior Physiotherapist position open at Cairo Medical Center</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <span className="text-sm text-gray-500">1 day ago</span>
                  <h3 className="font-semibold mt-1">Upcoming Workshop</h3>
                  <p className="text-gray-600">Advanced Rehabilitation Techniques - Register Now</p>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4">View All Updates</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Social Integration */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-8">Join Our Growing Community</h2>
        <p className="text-xl text-gray-600 mb-12 text-center max-w-2xl mx-auto">
          Connect with us across all platforms and stay updated with the latest in physiotherapy
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>WhatsApp Channel</CardTitle>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">Join Channel</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Telegram Group</CardTitle>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">Join Group</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Facebook Page</CardTitle>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">Follow Us</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Instagram</CardTitle>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">Follow Us</Button>
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
              <h3 className="font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Blog</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Courses</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Certificates</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Updates</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Community</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">WhatsApp</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Telegram</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Facebook</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Instagram</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">About Us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Support</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Terms</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Privacy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center">
            <p className="text-gray-600">&copy; 2024 NewPhysio Academy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;