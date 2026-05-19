import MainLayout from "@/components/MainLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  FolderOpen,
  Layers,
  Mail,
  Shield,
  Zap,
} from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  const features = [
    {
      icon: <FolderOpen className="h-6 w-6" />,
      title: "Icon Library",
      description:
        "Browse and download hundreds of icons organized by category",
      href: "/icons",
      color: "bg-blue-100 text-blue-700",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Templates",
      description: "Access email templates and Figma links for quick reference",
      href: "/emails",
      color: "bg-green-100 text-green-700",
    },
  ];

  const benefits = [
    {
      icon: <Shield className="h-5 w-5" />,
      title: "Secure Access",
      description: "Protected by authentication to keep your assets safe",
    },
    {
      icon: <Zap className="h-5 w-5" />,
      title: "Fast Search",
      description: "Quickly find what you need with powerful search filters",
    },
    {
      icon: <Layers className="h-5 w-5" />,
      title: "Organized Categories",
      description: "Everything neatly organized for easy navigation",
    },
  ];

  return (
    <MainLayout>
      <div className="bg-gradient-to-b from-slate-50 to-white min-h-full">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              ShareTrip Assets
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Your Design Assets,
              <span className="text-blue-600"> One Place</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Access icons, email templates, and design resources all in one
              secure location. Streamline your workflow with ShareTrip's
              comprehensive asset library.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-base">
                <Link href="/icons">
                  Browse Icons
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base">
                <Link href="/emails">
                  View Emails
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What's Available
              </h2>
              <p className="text-slate-600 text-lg">
                Explore our curated collection of design assets
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {features.map((feature) => (
                <Link key={feature.title} href={feature.href}>
                  <Card className="group hover:shadow-lg transition-all duration-200 border-2 hover:border-blue-200 h-full">
                    <CardHeader>
                      <div
                        className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-4`}
                      >
                        {feature.icon}
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                      <CardDescription className="text-base">
                        {feature.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700">
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            {/* Benefits Section */}
            <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12">
              <h3 className="text-2xl font-bold mb-8 text-center">
                Why Use Our Asset Library?
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                {benefits.map((benefit) => (
                  <div key={benefit.title} className="text-center">
                    <div className="inline-flex p-3 rounded-full bg-slate-100 mb-4">
                      <div className="text-slate-700">{benefit.icon}</div>
                    </div>
                    <h4 className="font-semibold text-lg mb-2">
                      {benefit.title}
                    </h4>
                    <p className="text-slate-600 text-sm">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-600 text-white">
          <div className="container mx-auto px-4 py-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Sign in to access all the design assets and resources you need.
            </p>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="text-base font-semibold"
            >
              <Link href="/signin">Sign In Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
