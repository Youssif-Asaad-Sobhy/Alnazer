import 'bootstrap/dist/css/bootstrap.css';  // استيراد أنماط Bootstrap
import React from 'react';  // استيراد React
import ReactDOM from 'react-dom/client';  // استيراد ReactDOM
import './index.css';  // استيراد الأنماط الخاصة بك
import App from './App';  // استيراد المكون الرئيسي
import reportWebVitals from './reportWebVitals';  // استيراد تقرير الأداء

// استيراد الحزمة هنا
import axios from 'axios';

const root = ReactDOM.createRoot(document.getElementById('root'));  // تحديد العنصر الجذر لعرض React فيه
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// استخدام الحزمة
axios.get('https://api.example.com/data')  // إجراء طلب GET إلى API
  .then(response => {
    console.log(response.data);  // طباعة البيانات المستلمة إلى وحدة التحكم
  })
  .catch(error => {
    console.error(error);  // طباعة الخطأ إذا حدث خطأ
});

reportWebVitals();  // تشغيل تقرير الأداء
