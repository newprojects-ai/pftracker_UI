import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { Upload } from 'lucide-react'
import { Button } from '../ui/button'

export function DataImport() {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Handle file upload logic here
    console.log('Accepted files:', acceptedFiles)
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'text/csv': ['.csv'],
      'application/vnd.ms-excel': ['.xls'],
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx']
    }
  })

  return (
    <div className="rounded-lg border bg-card p-6">
      <h2 className="text-lg font-semibold mb-4">Import Transactions</h2>
      
      <div
        {...getRootProps()}
        className={`
          border-2 border-dashed rounded-lg p-8
          flex flex-col items-center justify-center
          cursor-pointer
          transition-colors
          ${isDragActive ? 'border-primary bg-primary/5' : 'border-muted'}
        `}
      >
        <input {...getInputProps()} />
        <Upload className="h-8 w-8 text-muted-foreground mb-4" />
        {isDragActive ? (
          <p className="text-center text-muted-foreground">Drop the files here</p>
        ) : (
          <>
            <p className="text-center text-muted-foreground mb-2">
              Drag and drop files here, or click to select files
            </p>
            <p className="text-sm text-muted-foreground">
              Supports CSV, XLS, XLSX
            </p>
          </>
        )}
      </div>

      <div className="mt-4 flex justify-end">
        <Button variant="outline" className="mr-2">
          Clear
        </Button>
        <Button>
          Import Data
        </Button>
      </div>
    </div>
  )
}