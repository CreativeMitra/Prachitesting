import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { File, Image, Search, Download, Eye } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface FileItem {
  name: string;
  path: string;
  type: 'pdf' | 'image';
  size: number;
  url: string;
}

const Files = () => {
  const [files, setFiles] = useState<FileItem[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState<'all' | 'pdf' | 'image'>('all');

  useEffect(() => {
    // Load files from localStorage
    const savedFiles = localStorage.getItem("uploaded_files");
    if (savedFiles) {
      setFiles(JSON.parse(savedFiles));
    }
  }, []);

  const filteredFiles = files.filter(file => {
    const matchesSearch = file.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'all' || file.type === filter;
    return matchesSearch && matchesFilter;
  });

  const handleDownload = (file: FileItem) => {
    const link = document.createElement('a');
    link.href = file.url;
    link.download = file.name;
    link.click();
  };

  const handleView = (file: FileItem) => {
    window.open(file.url, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Downloads & Resources
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Access study materials, worksheets, and other educational resources
          </p>
        </div>

        {/* Search and Filter */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Search Files</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Search files..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <Button
                  variant={filter === 'all' ? 'default' : 'outline'}
                  onClick={() => setFilter('all')}
                >
                  All
                </Button>
                <Button
                  variant={filter === 'pdf' ? 'default' : 'outline'}
                  onClick={() => setFilter('pdf')}
                >
                  PDFs
                </Button>
                <Button
                  variant={filter === 'image' ? 'default' : 'outline'}
                  onClick={() => setFilter('image')}
                >
                  Images
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Files Grid */}
        {filteredFiles.length === 0 ? (
          <Card>
            <CardContent className="text-center py-12">
              <File className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-xl font-semibold mb-2">No files found</h3>
              <p className="text-muted-foreground">
                {searchTerm ? 'Try adjusting your search terms' : 'No files have been uploaded yet'}
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredFiles.map((file, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {file.type === 'pdf' ? (
                      <File className="w-12 h-12 text-red-500 mr-3" />
                    ) : (
                      <Image className="w-12 h-12 text-blue-500 mr-3" />
                    )}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold truncate" title={file.name}>
                        {file.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {(file.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                  </div>
                  
                  {file.type === 'image' && (
                    <div className="mb-4 rounded-lg overflow-hidden bg-muted">
                      <img
                        src={file.url}
                        alt={file.name}
                        className="w-full h-32 object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                    </div>
                  )}

                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleView(file)}
                      className="flex-1"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      View
                    </Button>
                    <Button
                      size="sm"
                      onClick={() => handleDownload(file)}
                      className="flex-1"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Files;