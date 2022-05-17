import base64
import unittest

from src.models.services.folsService import getOpenedFolFile


class FOLTest(unittest.TestCase):

    def test_assertFolExists(self):
        fol = getOpenedFolFile("MUS-003/19")  # IN EFFECT
        fol_data = fol["data"]
        self.assertTrue(fol_data != "")

    def test_assertFOLFileNotExists(self):
        fol = getOpenedFolFile("MRC-002/10")  # FILE DOESN'T EXISTS
        fol_data = fol["data"]
        self.assertTrue(fol_data == "")


if __name__ == '__main__':
    unittest.main()