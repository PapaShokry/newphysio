import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CoursesPage = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  const { data: courses, isLoading } = useQuery({
    queryKey: ["courses"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("courses")
        .select(`
          *,
          instructor:profiles(first_name, last_name)
        `)
        .order("created_at", { ascending: false });

      if (error) {
        toast({
          title: "Error fetching courses",
          description: error.message,
          variant: "destructive",
        });
        return [];
      }

      return data;
    },
  });

  const isInstructor = user !== null;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Courses</h1>
        {isInstructor && (
          <Button onClick={() => navigate("/courses/new")}>
            Create New Course
          </Button>
        )}
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <Loader2 className="h-8 w-8 animate-spin" />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses?.map((course) => (
            <Card key={course.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{course.title}</CardTitle>
                <CardDescription>
                  By {course.instructor.first_name} {course.instructor.last_name}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  {course.description.length > 150
                    ? `${course.description.substring(0, 150)}...`
                    : course.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">
                    {course.duration} hours
                  </span>
                  <span className="text-sm font-medium">
                    ${course.price || "Free"}
                  </span>
                </div>
                <Button
                  className="w-full mt-4"
                  onClick={() => navigate(`/courses/${course.id}`)}
                >
                  View Course
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default CoursesPage;