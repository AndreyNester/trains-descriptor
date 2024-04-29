import cn from 'classnames';
import styles from './TrainCharactericticTable.module.css';
import { ITrainCharactericticTable } from './types';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Button } from '../../../../shared/Button';
import {validateEngineAmperage, validateSpeed, validateForce} from '../config/';

const TrainCharactericticTable = ({className, train,  ...rest}: ITrainCharactericticTable) : JSX.Element=> {

  const classes = cn(className, {
    [styles.table] : true
  })
  
  return (
      <Formik
          
      initialValues={{
        trainCharacterictics : train.characteristics
      }}

      enableReinitialize={true}
      onSubmit={values => {
        const res = [...values.trainCharacterictics].sort((a,b)=>a.speed - b.speed).map((item)=>item.speed);
        console.log(res);
      }}
      >
      {({ values , errors}) => (
      <Form className={styles.form}>
        <table className={classes} {...rest}>
      
          <caption className={styles.caption}>Характеристики <br />{train.name}</caption>

          <thead className={styles.thead}>
            <tr>
              <th>Ток двигателя</th>
              <th>Сила тяги</th>
              <th>Скорость</th>
            </tr>
          </thead>

          <tbody>
            {values.trainCharacterictics.map((_item, index)=>(
                <tr className={styles.trow} key={index}>
                  
                  <td>
                    <ErrorMessage name={`trainCharacterictics[${index}].engineAmperage`} component="div" className={styles.errMark}/>
                    <Field type='number' name={`trainCharacterictics[${index}].engineAmperage`} validate={validateEngineAmperage} className={styles.field}/>
                  </td>
                  <td >
                    <ErrorMessage name={`trainCharacterictics[${index}].force`} component="div" className={styles.errMark}/>
                    <Field type='number' name={`trainCharacterictics[${index}].force`} validate={validateForce} className={styles.field}/>
                  </td>
                  <td>
                    <ErrorMessage name={`trainCharacterictics[${index}].speed`} component="div" className={styles.errMark}/>
                    <Field type='number' name={`trainCharacterictics[${index}].speed`} validate={validateSpeed} className={styles.field}/> 
                  </td>

                </tr>
              ))}
          </tbody>

        </table>
    
        <Button disabled={Array.isArray(errors.trainCharacterictics) && errors.trainCharacterictics.length > 0  } type='submit' className={styles.submitBtn}>Отправить данные</Button>
      </Form>
      )}
    </Formik>
  )
}
export default TrainCharactericticTable;