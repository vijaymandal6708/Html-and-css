#include<iostream>
using namespace std;
int main()
{
  int salary;
  cout<<"Enter salary:";
  cin>>salary;

  (salary>0 && salary<50000)? cout<<salary*1.05:cout<<(salary*110)/100;


return 0;
}