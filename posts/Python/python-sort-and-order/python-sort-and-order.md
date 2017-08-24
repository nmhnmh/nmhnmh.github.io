---
id: python-sort-and-order
title: Python Sort and Order
date:
tags:
  - Sorting
  - Todo
---

The semantic of "sorting" only applies to an sequence of values of same type, primitive or object, like an array of numbers, strings, or Contact objects.

About sorting
================================================================================

Items need to be Comparable
--------------------------------------------------------------------------------
```python
class ComparableClass:
    def __gt__(self, other)
        pass
    def __ge__(self, other):
        pass
    def __lt__(self, other):
        pass
    def __le__(self, other):
        pass
    def __eq__(self, other):
        pass
    def __ne__(self, other):
        pass
```

Stability
--------------------------------------------------------------------------------
`sorted()` is stable sorting.

Sort a List
================================================================================

Return new sorted list
--------------------------------------------------------------------------------
```python
sorted([1, 3, 2, 9, 5])
sorted([1, 3, 2, 9, 5], reverse=True)
```

In-Place sort with `list.sort()`
--------------------------------------------------------------------------------

"Sort" a Dict
================================================================================
In fact, `dict` itself as orderless because of its hash implementation, it can't be sorted, when we are talking about "sorting" a dict here, we are talking about returning an ordered view of all `key, value` pairs in the dict, this is where `sorted()` comes in handy.
```python
import operator
d={"adam": 100, "jack": 300, "lisa": 120, "mary": 300, "tom": 500}
# return a list of k,v tuples, sort with v
sd2=sorted(d.items(), key=lambda x: x[1]) # faster
sd3=sorted(d.items(), key=operator.itemgetter(1) # fatest
# return a list of k,v tuples, sort with k
sd2=sorted(d.items(), key=lambda x: x[0]) # faster
sd3=sorted(d.items(), key=operator.itemgetter(0) # fatest
# return a list of k, sorted with v
sd1=sorted(d, key=d.get)
sd1=sorted(d.keys(), key=d.get)
# return a list of k, sorted with k
sd1=sorted(d.keys()))
# return a list of v, sorted with v
sd1=sorted(d.values())
# return a list ot k,v tuples, not sorted
sd1=sorted(d.items()))
```

Why use `operator.itemgetter()` than `dict.get()` as `key` function? More efficient?

collections.OrderedDict
--------------------------------------------------------------------------------
