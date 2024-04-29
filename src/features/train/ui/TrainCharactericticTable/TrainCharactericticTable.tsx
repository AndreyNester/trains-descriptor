import cn from 'classnames';
import styles from './TrainCharactericticTable.module.css';
import { ITrainCharactericticTable } from './types';
import { Field, Form, Formik } from 'formik';


const TrainCharactericticTable = ({className, train,  ...rest}: ITrainCharactericticTable) : JSX.Element=> {
  console.log(train);

  const classes = cn(className, {
    [styles.table] : true
  })

  //______________
  function validateEngineAmperage(value: string): string | undefined {
    let error;
    if (!value) {
      error = 'Required';
      console.log(value, 'err');
      
    }
    return error;
  }
  //________________
  
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
      {({ values }) => (
      <Form>
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
                  <td>
                    <Field name={`trainCharacterictics[${index}].engineAmperage`} validate={validateEngineAmperage}/>
                  </td>
                  <td>
                    <Field name={`trainCharacterictics[${index}].force`} validate={validateEngineAmperage}/>
                  </td>
                  <td>
                    <Field name={`trainCharacterictics[${index}].speed`} validate={validateEngineAmperage}/> 
                  </td>
                </tr>
                ))}
          </tbody>

        </table>
    
        <button type="submit">Submit</button>
      </Form>
      )}
    </Formik>
  )
}
export default TrainCharactericticTable;