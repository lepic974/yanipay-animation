import { Suspense } from "react";
import WelcomeContent from "@/components/WelcomeContent";
import { Skeleton } from "@/components/ui/skeleton";

function WelcomeContentSkeleton() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <Skeleton className="h-16 w-3/4 mx-auto" />
          <Skeleton className="h-6 w-1/2 mx-auto" />
          <div className="flex gap-4 justify-center">
            <Skeleton className="h-12 w-32" />
            <Skeleton className="h-12 w-32" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<WelcomeContentSkeleton />}>
      <WelcomeContent />
    </Suspense>
  );
}