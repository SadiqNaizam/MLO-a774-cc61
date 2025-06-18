import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { cn } from "@/lib/utils"; // Assuming `cn` utility is available for class merging

interface AuthFormCardProps {
  title: string;
  children: React.ReactNode; // For the main form elements (inputs, submit button)
  footerContent?: React.ReactNode; // For links like "Forgot password?", "Sign up"
  className?: string; // Allows for additional styling from the parent component
  cardClassName?: string; // Specific styling for the Card component itself
  headerClassName?: string; // Specific styling for the CardHeader
  titleClassName?: string; // Specific styling for the CardTitle
  contentClassName?: string; // Specific styling for the CardContent
  footerClassName?: string; // Specific styling for the CardFooter
}

const AuthFormCard: React.FC<AuthFormCardProps> = ({
  title,
  children,
  footerContent,
  className,
  cardClassName,
  headerClassName,
  titleClassName,
  contentClassName,
  footerClassName,
}) => {
  console.log(`AuthFormCard loaded with title: ${title}`);

  return (
    <div className={cn("flex justify-center items-center w-full", className)}>
      <Card className={cn("w-full max-w-md shadow-lg", cardClassName)}>
        <CardHeader className={cn("pb-4", headerClassName)}>
          <CardTitle className={cn("text-2xl font-bold text-center text-gray-800", titleClassName)}>
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className={cn(contentClassName)}>
          {children}
        </CardContent>
        {footerContent && (
          <CardFooter className={cn("flex flex-col items-center space-y-2 pt-4 mt-4 border-t", footerClassName)}>
            {footerContent}
          </CardFooter>
        )}
      </Card>
    </div>
  );
};

export default AuthFormCard;