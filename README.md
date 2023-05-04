
# Siber Savaş Akademisi Case

Bu proje, MockAPI'den gelen verileri kullanarak bir kullanıcı tablosu oluşturur. Kullanıcılar adına veya e-posta adresine göre aranabilir, tablo içerisinde silme - düzenleme işlemleri yapılabilir ve seçili kullanıcılar toplu olarak silinebilir.

  
## Kullanılan Teknolojiler

**İstemci:** React, MaterialUI

**Araçlar:** MockAPI

  
## Demo

Uygulamanın demo versiyonuna aşağıdaki linkten ulaşabilirsiniz.

https://siber-savas-akademisi-case.vercel.app/


## Ekran Görüntüleri

![Uygulama Ekran Görüntüsü](https://i.hizliresim.com/4ppuvc9.png)
![Uygulama Ekran Görüntüsü](https://i.hizliresim.com/den7b6g.png)
![Uygulama Ekran Görüntüsü](https://i.hizliresim.com/h5raxy2.png)
![Uygulama Ekran Görüntüsü](https://i.hizliresim.com/nlblx98.png)
![Uygulama Ekran Görüntüsü](https://i.hizliresim.com/i7u3r8l.png)
![Uygulama Ekran Görüntüsü](https://i.hizliresim.com/sv1k8b3.png)
![Uygulama Ekran Görüntüsü](https://i.hizliresim.com/7k34qua.png)

  
  
## Rozetler

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
  

## Kullanım

- Kullanıcıları silmek için tabloda kullanıcının yanındaki silme ikonuna tıklayın.
- Kullanıcıları düzenlemek için tabloda kullanıcının yanındaki düzenleme ikonuna tıklayın.
- Kullanıcıları toplu bir şekilde silmek için ilgili kullanıcıları seçip tablonun üstündeki silme butonuna tıklayın.
- Kullanıcıları aramak için arama kutusuna ilgili kişinin kullanıcı adını veya e-posta adresini girin.


## API Kullanımı

#### Tüm Kullanıcıları Getir

```http
  GET /api/v1/users
```

#### Bir Kullanıcıyı Getir

```http
  GET /api/v1/users/${id}
```

| Parametre | Tip     | Açıklama                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `object` | **Gerekli**. Çağrılacak kullanıcın anahtar değeri |

#### Bir Kullanıcıyıyı Sil

```http
  DELETE /api/v1/users/${id}
```

| Parametre | Tip     | Açıklama                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `object` | **Gerekli**. Silinecek kullanıcın anahtar değeri |

#### Bir Kullanıcıyı Güncelle

```http
  PUT /api/v1/users/${id}
```

| Parametre | Tip     | Açıklama                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `object` | **Gerekli**. Güncellenecek kullanıcın anahtar değeri |

#### Bir Kullanıcı Ekle

```http
  POST /api/v1/users
```

| Tip     | 
| :------- | 
| `object` | 



## Bilgisayarınızda Çalıştırın

Projeyi klonlayın

```bash
  git clone https://link-to-project
```

Proje dizinine gidin

```bash
  cd my-project
```

Gerekli paketleri yükleyin

```bash
  npm install
```

Sunucuyu çalıştırın

```bash
  npm run dev
```





