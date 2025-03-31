
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface CodeSnippetCardProps {
  title: string;
  description: string;
  language: string;
  code: string;
  date: string;
}

const CodeSnippetCard = ({ title, description, language, code, date }: CodeSnippetCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-semibold">{title}</CardTitle>
          <Badge variant="outline">{language}</Badge>
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardHeader>
      <CardContent>
        <pre className="code-block text-sm">
          <code>{code}</code>
        </pre>
      </CardContent>
      <CardFooter className="pt-2 text-xs text-muted-foreground">
        {date}
      </CardFooter>
    </Card>
  );
};

export default CodeSnippetCard;
