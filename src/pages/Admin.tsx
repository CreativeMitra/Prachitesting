import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Upload, File, Image, Trash2, Eye, LogOut } from "lucide-react";

interface FileItem {
  name: string;
  path: string;
  type: 'pdf' | 'image';
  size: number;
  url: string;
}

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [files, setFiles] = useState<FileItem[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [githubToken, setGithubToken] = useState("");
  const [repoOwner, setRepoOwner] = useState("");
  const [repoName, setRepoName] = useState("");
  const { toast } = useToast();

  const ADMIN_PASSWORD = "admin123"; // Change this to your preferred password

  useEffect(() => {
    // Load saved GitHub settings
    const token = localStorage.getItem("github_token");
    const owner = localStorage.getItem("repo_owner");
    const name = localStorage.getItem("repo_name");
    
    if (token) setGithubToken(token);
    if (owner) setRepoOwner(owner);
    if (name) setRepoName(name);
    
    // Load files list
    loadFiles();
  }, []);

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      toast({
        title: "Success",
        description: "Logged in successfully",
      });
    } else {
      toast({
        title: "Error",
        description: "Invalid password",
        variant: "destructive",
      });
    }
  };

  const saveGithubSettings = () => {
    localStorage.setItem("github_token", githubToken);
    localStorage.setItem("repo_owner", repoOwner);
    localStorage.setItem("repo_name", repoName);
    toast({
      title: "Settings Saved",
      description: "GitHub configuration saved successfully",
    });
  };

  const uploadFile = async (file: File) => {
    if (!githubToken || !repoOwner || !repoName) {
      toast({
        title: "Error",
        description: "Please configure GitHub settings first",
        variant: "destructive",
      });
      return;
    }

    setIsUploading(true);
    try {
      const reader = new FileReader();
      reader.onload = async () => {
        const content = reader.result as string;
        const base64Content = content.split(',')[1];
        
        const filePath = `public/uploads/${file.name}`;
        
        const response = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/contents/${filePath}`, {
          method: 'PUT',
          headers: {
            'Authorization': `token ${githubToken}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            message: `Add uploaded file: ${file.name}`,
            content: base64Content,
          }),
        });

        if (response.ok) {
          const newFile: FileItem = {
            name: file.name,
            path: filePath,
            type: file.type.includes('pdf') ? 'pdf' : 'image',
            size: file.size,
            url: `./uploads/${file.name}`,
          };
          
          setFiles(prev => [...prev, newFile]);
          updateFilesList([...files, newFile]);
          
          toast({
            title: "Success",
            description: `${file.name} uploaded successfully`,
          });
        } else {
          throw new Error('Upload failed');
        }
      };
      reader.readAsDataURL(file);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to upload file",
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
    }
  };

  const deleteFile = async (fileItem: FileItem) => {
    if (!githubToken || !repoOwner || !repoName) return;

    try {
      // Get file SHA first
      const getResponse = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/contents/${fileItem.path}`, {
        headers: {
          'Authorization': `token ${githubToken}`,
        },
      });
      
      if (getResponse.ok) {
        const fileData = await getResponse.json();
        
        const deleteResponse = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/contents/${fileItem.path}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `token ${githubToken}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            message: `Delete file: ${fileItem.name}`,
            sha: fileData.sha,
          }),
        });

        if (deleteResponse.ok) {
          const updatedFiles = files.filter(f => f.path !== fileItem.path);
          setFiles(updatedFiles);
          updateFilesList(updatedFiles);
          
          toast({
            title: "Success",
            description: `${fileItem.name} deleted successfully`,
          });
        }
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete file",
        variant: "destructive",
      });
    }
  };

  const loadFiles = () => {
    const savedFiles = localStorage.getItem("uploaded_files");
    if (savedFiles) {
      setFiles(JSON.parse(savedFiles));
    }
  };

  const updateFilesList = (filesList: FileItem[]) => {
    localStorage.setItem("uploaded_files", JSON.stringify(filesList));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files;
    if (selectedFiles) {
      Array.from(selectedFiles).forEach(file => {
        if (file.type.includes('pdf') || file.type.includes('image')) {
          uploadFile(file);
        } else {
          toast({
            title: "Error",
            description: "Only PDF and image files are allowed",
            variant: "destructive",
          });
        }
      });
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-center">Admin Login</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
              />
            </div>
            <Button onClick={handleLogin} className="w-full">
              Login
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-foreground">Admin Panel</h1>
          <Button onClick={() => setIsAuthenticated(false)} variant="outline">
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>

        {/* GitHub Settings */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>GitHub Configuration</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="token">GitHub Token</Label>
                <Input
                  id="token"
                  type="password"
                 value={githubToken}
                  onChange={(e) => setGithubToken(e.target.value)}
                  placeholder="ghp_xxxxxxxxxxxx"
                />
              </div>
              <div>
                <Label htmlFor="owner">Repository Owner</Label>
                <Input
                  id="owner"
                  value={repoOwner}
                  onChange={(e) => setRepoOwner(e.target.value)}
                  placeholder="username"
                />
              </div>
              <div>
                <Label htmlFor="repo">Repository Name</Label>
                <Input
                  id="repo"
                  value={repoName}
                  onChange={(e) => setRepoName(e.target.value)}
                  placeholder="my-repo"
                />
              </div>
            </div>
            <Button onClick={saveGithubSettings}>Save Settings</Button>
          </CardContent>
        </Card>

        {/* File Upload */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Upload Files</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
              <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
              <p className="text-muted-foreground mb-4">
                Drag and drop files here or click to browse
              </p>
              <Input
                type="file"
                multiple
                accept=".pdf,.jpg,.jpeg,.png,.gif,.webp"
                onChange={handleFileChange}
                disabled={isUploading}
                className="max-w-xs mx-auto"
              />
              {isUploading && <p className="mt-2 text-sm text-primary">Uploading...</p>}
            </div>
          </CardContent>
        </Card>

        {/* Files List */}
        <Card>
          <CardHeader>
            <CardTitle>Uploaded Files ({files.length})</CardTitle>
          </CardHeader>
          <CardContent>
           {files.length === 0 ? (
              <p className="text-muted-foreground text-center py-8">No files uploaded yet</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {files.map((file, index) => (
                  <div key={index} className="border border-border rounded-lg p-4">
                    <div className="flex items-center mb-3">
                      {file.type === 'pdf' ? (
                        <File className="w-8 h-8 text-red-500 mr-3" />
                      ) : (
                        <Image className="w-8 h-8 text-blue-500 mr-3" />
                      )}
                      <div className="flex-1 min-w-0">
                        <p className="font-medium truncate">{file.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {(file.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => window.open(file.url, '_blank')}
                      >
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => deleteFile(file)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Admin;