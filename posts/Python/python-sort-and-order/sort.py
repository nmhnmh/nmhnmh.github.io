def sbv0(adict,reverse=False):
    ''' proposed at Digital Sanitation Engineering
    http://blog.modp.com/2007/11/sorting-python-dict-by-value.html '''
    return sorted(adict.iteritems(), key=lambda (k,v): (v,k), reverse=reverse)
 
def sbv1(d,reverse=False):
    '''  explicit list expansion '''
    L = [(k,v) for (k,v) in d.iteritems()]
    return sorted(L, key=lambda x: x[1] , reverse=reverse)
 
def sbv2(d,reverse=False):
    '''  generator '''
    L = ((k,v) for (k,v) in d.iteritems())
    return sorted(L, key=lambda x: x[1] , reverse=reverse)
 
def sbv3(d,reverse=False):
    ''' using a lambda to get the key, rather than "double-assignment" '''
 
    return sorted(d.iteritems(), key=lambda x: x[1] , reverse=reverse)
 
def sbv4(d,reverse=False):
    ''' using a formal function to get the sorting key, rather than a lambda'''
    def sk(x):  return x[1]
    return sorted(d.iteritems(), key=sk , reverse=reverse)
 
def sk(x):  return x[1]
 
def sbv5(d,reverse=False):
    ''' using a formal function, defined in outer scope
    to get the sorting key, rather than a lambda
    '''
    return sorted(d.iteritems(), key=sk , reverse=reverse)
 
from operator import itemgetter
def sbv6(d,reverse=False):
    ''' proposed in PEP 265, using  the itemgetter '''
    return sorted(d.iteritems(), key=itemgetter(1), reverse=True)
 
D = dict(zip(range(100),range(100)))
 
from profile import run
 
run("for ii in xrange(10000):  sbv0(D, reverse=True)")
run("for ii in xrange(10000):  sbv1(D, reverse=True)")
run("for ii in xrange(10000):  sbv2(D, reverse=True)")
run("for ii in xrange(10000):  sbv3(D, reverse=True)")
run("for ii in xrange(10000):  sbv4(D, reverse=True)")
run("for ii in xrange(10000):  sbv5(D, reverse=True)")
run("for ii in xrange(10000):  sbv6(D, reverse=True)")
