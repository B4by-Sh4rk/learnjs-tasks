promise.then(f1).catch(f2); //передаст ошибку в .catch

promise.then(f1, f2); // не передаёт ошибку
