package source

import (
	"bufio"
	"digital-portfolio/storage/database/model"
	"digital-portfolio/storage/errors"
	"digital-portfolio/storage/types"
	"log"
	"os"
	"path/filepath"
)

type File struct {
	r string
	m *model.File
}

func NewFile(r string, m *model.File) *File {
	return &File{r, m}
}

func (c *File) Upload(p *types.ParamCreate, r *bufio.Reader) (string, error) {
	if filepath.IsAbs(p.Path) {
		// p.Path = p.Path[1:]
		return "", &errors.BadParam{Msg: "path must relative"}
	}
	p.Path = filepath.Join(c.r, p.Path)
	d, err := c.FindByPath(p.Path)
	if err != nil {
		d, err = c.Create(p)
	} else {
		d, err = c.Update(d.ID, (*types.ParamUpdate)(p))
	}
	if err != nil {
		return "", err
	}
	if err = os.MkdirAll(filepath.Dir(d.Path), os.ModePerm); err != nil {
		return "", err
	}
	f, err := os.Create(d.Path)
	if err != nil {
		return "", err
	}
	defer f.Close()
	w := bufio.NewWriterSize(f, d.Size)
	n, err := r.WriteTo(w)
	if err != nil {
		return "", err
	}
	log.Printf("write: %d\n", n)
	// buf := bufio.NewScanner(r)
	// for buf.Scan() {
	// 	b := buf.Bytes()
	// 	log.Printf("upload: %d\n", b)
	// 	s, err := f.Write(b)
	// 	if err != nil {
	// 		return "", err
	// 	}
	// 	log.Printf("write: %d\n", s)
	// 	if err = f.Sync(); err != nil {
	// 		return "", err
	// 	}
	// }
	d.Path = d.Path[len(c.r):]
	return d.Path, err
}
func (c *File) Download(p string, w *bufio.Writer) (*types.File, error) {
	p = filepath.Join(c.r, p)
	d, err := c.FindByPath(p)
	if err != nil {
		return nil, err
	}
	f, err := os.Open(d.Path)
	if err != nil {
		return nil, err
	}
	defer f.Close()
	r := bufio.NewReaderSize(f, d.Size)
	n, err := r.WriteTo(w)
	if err != nil {
		return nil, err
	}
	log.Printf("read: %d\n", n)
	// buf := bufio.NewScanner(f)
	// for buf.Scan() {
	// 	b := buf.Bytes()
	// 	log.Printf("download: %d\n", b)
	// 	s, err := w.Write(b)
	// 	if err != nil {
	// 		return nil, err
	// 	}
	// 	log.Printf("read: %d\n", s)
	// 	if err = w.Flush(); err != nil {
	// 		return nil, err
	// 	}
	// }
	d.Path = d.Path[len(c.r):]
	return d, err
}

func (c *File) FindByPath(path string) (*types.File, error) {
	d, err := c.m.FindOne(struct {
		Path string `json:"path" bson:"path" xml:"path" form:"path"`
	}{Path: path})
	return d, err
}

func (c *File) All() (*[]types.File, error) {
	d, err := c.m.All()
	return d, err
}
func (c *File) Create(p *types.ParamCreate) (*types.File, error) {
	d, err := c.m.Create(p)
	return d, err
}
func (c *File) Find(id string) (*types.File, error) {
	d, err := c.m.FindOneById(id)
	return d, err
}
func (c *File) Update(id string, p *types.ParamUpdate) (*types.File, error) {
	d, err := c.m.UpdateOneById(id, p)
	return d, err
}
func (c *File) Delete(id string) (*types.File, error) {
	d, err := c.m.DeleteOneById(id)
	return d, err
}
func (c *File) Clear() (*[]types.File, error) {
	d, err := c.m.DeleteAll()
	return d, err
}
