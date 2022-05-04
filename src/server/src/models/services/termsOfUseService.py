def getTermsOfUseText():
    with open('../resources/startUpFiles/terms_of_use.txt', encoding='utf8') as file:
        text = file.read()

    return text
