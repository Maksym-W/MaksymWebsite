class nigeria():

    def __init__(self):
        self.population = "200 Million"
        self.religion = "Half Muslim, Half Christian"
        # look into def printname

test = nigeria()

print(test.population)

test.population += "GAY!"

print(test.population)


gpa = 10
req_gpa = 8
major = "hi"
req_major = "hi"

print(gpa >= req_gpa and major == req_major )


def parta(gpa, major, req_gpa, req_major):
    return gpa >= req_gpa and major == req_major


def partb(applicants, req_gpa, req_major):
    """
    dick
    >>> partb([(3.6, 'jc', 'cs'),(31.6, 'jdc', 'cds')] , 3.2, 'cs')
    (3.6, 'jc')
    """
    answer = []

    for i in applicants:
        current = parta(i[0], i[2], req_gpa, req_major)
        if current is True:
            answer.append(i[0:2])

    return answer

print(partb([(3.6, 'jc', 'cs'),(31.6, 'jdc', 'cs')] , 3.2, 'cs'))

x = "i am gay! {}"

print(x.format(gpa))