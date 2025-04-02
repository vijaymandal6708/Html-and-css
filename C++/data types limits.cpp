#include<iostream>
#include<limits>
//#include<climits>
using namespace std;

int main() {
  int a=10;
  
  cout<<&a<<endl;
  cout<<sizeof(float)<<endl;
  cout<<sizeof(char)<<endl;

  cout<<numeric_limits<int>::max()<<endl;
  cout<<numeric_limits<int>::min()<<endl;
  cout<<numeric_limits<float>::max()<<endl;
  cout<<numeric_limits<float>::min()<<endl;
  cout<<numeric_limits<bool>::max()<<endl;
  cout<<numeric_limits<bool>::min()<<endl;

  //cout<<numeric_limits<char>::max()<<endl;
  //cout<<numeric_limits<char>::min()<<endl;

  //cout<<INT_MAX<<endl;
  //cout<<INT_MIN<<endl;

  //cout<<CHAR_MAX<<endl;
  //cout<<CHAR_MIN<<endl;

  cout<<static_cast<int>(numeric_limits<char>::max())<<endl;
  cout<<static_cast<int>(numeric_limits<char>::min())<<endl;
  //cout<<static_cast<char>(numeric_limits<int>::max())<<endl;
}