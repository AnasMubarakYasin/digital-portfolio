package feature

import (
	"fmt"
	"golokal/instance/types"
	"time"
)

type Monitor struct {
	MapLog       map[string]*types.LogData
	stop_spinner bool
}

func NewMonitor() *Monitor {
	return &Monitor{MapLog: map[string]*types.LogData{}, stop_spinner: false}
}

func (monitor *Monitor) Start() {
	go monitor.LogSpinner("monitor: waiting connection...")
}
func (monitor *Monitor) Stop() {
	monitor.LogSpinnerStop()
}
func (monitor *Monitor) Set(param *types.LogData) {
	monitor.LogSpinnerStop()
	monitor.MapLog[param.Name] = param
	monitor.Display()
}
func (monitor *Monitor) Display() {
	// monitor.LogClear()
	for _, item := range monitor.MapLog {
		monitor.LogLn(item)
	}
}
func (monitor *Monitor) Log(d *types.LogData) {
	fmt.Printf("monitor: %d:%d:%d - #%s [%s]", d.Time.Hour(), d.Time.Minute(), d.Time.Second(), d.Name, d.Status)
}
func (monitor *Monitor) LogLn(d *types.LogData) {
	fmt.Printf("monitor: %d:%d:%d - #%s [%s]\n", d.Time.Hour(), d.Time.Minute(), d.Time.Second(), d.Name, d.Status)
}
func (monitor *Monitor) LogSpinner(message string) {
	monitor.stop_spinner = false
	var ci = 0
	var c = `|/-\`
	for {
		fmt.Printf("%s %c \r", message, c[ci])
		ci = (ci + 1) % len(c)
		time.Sleep(120 * time.Millisecond)
		if monitor.stop_spinner {
			break
		}
	}
}
func (monitor *Monitor) LogSpinnerStop() {
	monitor.stop_spinner = true
}
func (monitor *Monitor) LogClear() {
	fmt.Print("\033[H\033[2J")
}
func (monitor *Monitor) LogClearLN() {
	fmt.Print("\033[2K\r")
}
func (monitor *Monitor) LogMove(row int, col int) {
	fmt.Printf("\033[%d;%dH", row, col)
}
func (monitor *Monitor) LogHideCursor() {
	fmt.Print("\033[?25l")
}
