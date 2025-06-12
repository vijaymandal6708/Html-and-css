#include<iostream>
using namespace std;

int main(){
  int a=20,b=70;
  a=a+b;
  cout<<a;

  a+=b;
  cout<<endl<<a;

  a-=b;
  cout<<endl<<a;

  a*=b;
  cout<<endl<<a;

  b/=a;
  cout<<endl<<a;

  b%=a;
  cout<<endl<<a;

  return 0;
}