

# Ecommerce Vue App

### Follow these steps to try out Zipy

1. Clone this repository
2. Navigate to the app's directory and run the command 
```bash
yarn install
```
3. Add the following in the <head> tag of index.html file in public folder with your Project SDK key found in project settings of your **Zipy** account.
  
  ```bash
  <script src="https://cdn.zipy.ai/sdk/v1.0/zipy.min.umd.js" crossorigin="anonymous"></script> <script> window.zipy && window.zipy.init('PROJECT_SDK_KEY');</script>
  ```
  
4. Run the command
```bash
yarn run serve
```
5. Clone and run [Error Thrower](https://github.com/sandeshmurdia/Error-thrower)(which will throw random network errors for your app) and run it. 

6. Perform some actions in the App and start seeing your session on your **Zipy Dashboard**.


### To generate errors try 
1. Filtering brands.
2. Filtering price.
3. Pagination.
4. Check Products.
5. Add to Cart feature.
