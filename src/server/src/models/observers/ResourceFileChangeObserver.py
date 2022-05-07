import os

from watchdog.events import FileSystemEventHandler
from watchdog.observers import Observer


class ResourceFileChangeObserver(FileSystemEventHandler):
    def __init__(self, path, file, onChangeCallback):
        self.file = file
        self.onChangeCallback = onChangeCallback
        self.lastModification = 0

        self.observer = Observer()

        self.observer.schedule(self, "../resources" + path, recursive=False)
        self.observer.start()

    def on_modified(self, event):
        if event.src_path.endswith(self.file):
            modificationTime = os.stat(event.src_path).st_mtime

            if (modificationTime - self.lastModification) > 1:
                self.lastModification = modificationTime

                self.onChangeCallback()
