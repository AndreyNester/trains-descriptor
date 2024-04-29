import cn from 'classnames';
import styles from './TrainCharactericticTable.module.css';
import { ITrainCharactericticTable } from './types';
import { Field, Form, Formik } from 'formik';
import Button from '../../../../shared/Button/Button';
import validateEngineAmperage from '../config/validationFunctions/validateEngineAmperage';
import validateSpeed from '../config/validationFunctions/validateSpeed';
import validateForce from '../config/validationFunctions/validateForce';


const TrainCharactericticTable = ({className, train,  ...rest}: ITrainCharactericticTable) : JSX.Element=> {
  console.log(train);

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
            
        console.log(values);
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
            {values.trainCharacterictics.map((item, index)=>(
                <tr className={styles.trow} key={index}>
                  <td className={Array.isArray(errors.trainCharacterictics) ? typeof errors.trainCharacterictics[index]==='object'? errors.trainCharacterictics[index].engineAmperage ? styles.err : '' : errors.trainCharacterictics[index] : '' }>
                    <Field type='number' name={`trainCharacterictics[${index}].engineAmperage`} validate={validateEngineAmperage} className={styles.field}/>
                  </td>
                  <td className={Array.isArray(errors.trainCharacterictics) ? typeof errors.trainCharacterictics[index]==='object'? errors.trainCharacterictics[index].force ? styles.err : '' : errors.trainCharacterictics[index] : '' }>
                    <Field type='number' name={`trainCharacterictics[${index}].force`} validate={validateForce} className={styles.field}/>
                  </td>
                  <td className={Array.isArray(errors.trainCharacterictics) ? typeof errors.trainCharacterictics[index]==='object'? errors.trainCharacterictics[index].speed ? styles.err : '' : errors.trainCharacterictics[index] : '' }>
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