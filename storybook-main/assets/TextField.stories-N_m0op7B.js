import{j as e,r as S}from"./iframe-BziZnbbf.js";import{A as F}from"./ActionGroup-B1HE_ON6.js";import{B as m}from"./Button-BsOsKcj7.js";import{L as n}from"./Label-7ab3WcOE.js";import{S as f}from"./Section-Bis1QFtl.js";import{T as t}from"./TextField-SG4-fWXw.js";import{a as h,u,F as p,t as j}from"./Form-Zt6xDFWh.js";import{s as x}from"./Action-CnCRBxQU.js";import{F as g}from"./useFieldComponent-yHiwdZcU.js";import"./index-nuYtCEEu.js";import"./dynamic-BFzO3wyN.js";import"./flowComponent-JHIQPa02.js";import"./index-DKHZz9bz.js";import"./clsx-B-dksMZM.js";import"./index-_EM7mgZk.js";import"./getActionGroupSlot-CSQVqoba.js";import"./useStatic-D6NPOV-R.js";import"./IconWarning-CJvxfsrj.js";import"./Text-C2tTVpcM.js";import"./browser-BTvp61GS.js";import"./EmulatedBoldText-BRsPLuIL.js";import"./Text-fJHWLREE.js";import"./utils-C0RTyIHD.js";import"./LoadingSpinner-DE7xOG4e.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-Bzp87kLk.js";import"./context-BDhuSyDo.js";import"./Button-Czn71cHm.js";import"./ProgressBar-BJFeHLpH.js";import"./Label-SVpetMhq.js";import"./Hidden-Bnko_h1D.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-fjbW-LOk.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-D5emiALM.js";import"./useFocus-ycXwMZE-.js";import"./useFocusRing-CNOPmzHu.js";import"./useFocusable-KPf6K6gw.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-DQ1qfDRr.js";import"./Dialog-DGrVuAqN.js";import"./RSPContexts-CRnpb7uM.js";import"./OverlayArrow-CA6KUquN.js";import"./useControlledState-DwOoiAv5.js";import"./Collection-BOZKLSmZ.js";import"./CollectionBuilder-9i2XwoUY.js";import"./SelectionIndicator-8CTToPIL.js";import"./Separator-CEtV88kO.js";import"./SelectionManager-D4K7ysz9.js";import"./useEvent-D5k1dgJL.js";import"./useCollator-DChPehJd.js";import"./FocusScope-BuPYUVVd.js";import"./VisuallyHidden-zje2lKRT.js";import"./TextFieldBase-D4H3xkAL.js";import"./FieldDescription-mqFf-H3a.js";import"./TextField-DQ99mzfo.js";import"./Form-lya1P3V3.js";import"./Group-aJmZoBky.js";import"./Input-Diy1RLsK.js";import"./useTextField-QUd2KG_L.js";import"./useFormReset-CzU-0SyG.js";import"./useFormValidation-CTvaA84d.js";import"./ReactAriaControlledValueFix-ufU0tNg8.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./context-OFPqHilR.js";import"./react-children-utilities-gpYjsLoV.js";import"./ClearPropsContext-DUOPbXiH.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,b=y("submit"),Me={title:"Integrations/React Hook Form/TextField",component:h,render:()=>{const o=async s=>{await x(1500),b(s)},r=u({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:"",nameMinLength:""}}),i=j();return e.jsx(p,{form:r,onSubmit:o,children:e.jsxs(f,{children:[e.jsx(i,{name:"name",children:e.jsx(t,{children:e.jsx(n,{children:"Name"})})}),e.jsx(i,{name:"nameDefaultValue",children:e.jsx(t,{children:e.jsx(n,{children:"Name"})})}),e.jsx(i,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(t,{children:e.jsx(n,{children:"Name"})})}),e.jsx(i,{name:"nameMaxLength",children:e.jsx(t,{maxLength:10,showCharacterCount:!0,children:e.jsx(n,{children:"Name"})})}),e.jsx(i,{name:"controlledName",children:e.jsx(t,{value:r.watch("controlledName").toUpperCase(),children:e.jsx(n,{children:"Name"})})}),e.jsx(i,{name:"nameMinLength",rules:{required:"Please enter your name",minLength:2},children:e.jsx(t,{children:e.jsx(n,{children:"Name"})})}),e.jsxs(F,{children:[e.jsx(m,{type:"reset",children:"Reset"}),e.jsx(m,{type:"submit",children:"Submit"})]})]})})}},a={},l={render:()=>{const o=s=>{b(s)},r=u({defaultValues:{name:""}}),i=j();return e.jsx(p,{form:r,onSubmit:o,children:e.jsxs(f,{children:[e.jsx(i,{name:"name",children:e.jsx(t,{value:r.watch("name"),onChange:s=>{r.setValue("name",s.toUpperCase())},children:e.jsx(n,{children:"Name"})})}),e.jsx(F,{children:e.jsx(m,{type:"submit",children:"Submit"})})]})})}},d={render:()=>{const o=u();return S.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(p,{form:o,onSubmit:async()=>await x(2e3),children:[e.jsx(h,{name:"field",children:e.jsx(t,{children:e.jsx(n,{children:"Field"})})}),e.jsxs(t,{isInvalid:!0,children:[e.jsx(n,{children:"Field"}),e.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},c={render:o=>{const r=u();return e.jsxs(p,{form:r,onSubmit:async()=>await x(2e3),children:[e.jsx(h,{name:"field",children:e.jsx(t,{...o,type:"email",inputMode:"email",children:e.jsx(n,{children:"Field"})})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(m,{onPress:()=>r.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(m,{onPress:()=>r.setFocus("field"),children:"focus through form"}),e.jsx(m,{type:"submit",children:"Submit"})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    interface Values {
      name: string;
    }
    const handleOnSubmit = (values: Values) => {
      submitAction(values);
    };
    const form = useForm<Values>({
      defaultValues: {
        name: ""
      }
    });
    const Field = typedField(form);
    return <Form form={form} onSubmit={handleOnSubmit}>
        <Section>
          <Field name="name">
            <TextField value={form.watch("name")} onChange={val => {
            form.setValue("name", val.toUpperCase());
          }}>
              <Label>Name</Label>
            </TextField>
          </Field>
          <ActionGroup>
            <Button type="submit">Submit</Button>
          </ActionGroup>
        </Section>
      </Form>;
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <TextField>
            <Label>Field</Label>
          </TextField>
        </Field>
        <TextField isInvalid>
          <Label>Field</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </TextField>
      </Form>;
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <TextField {...props} type="email" inputMode="email">
            <Label>Field</Label>
          </TextField>
        </Field>
        <div style={{
        marginBottom: "2200px"
      }} />
        <Button onPress={() => form.setError("field", {
        type: "required",
        message: "oh no"
      }, {
        shouldFocus: true
      })}>
          err through form
        </Button>
        <Button onPress={() => form.setFocus("field")}>
          focus through form
        </Button>
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...c.parameters?.docs?.source}}};const Pe=["Default","WithTransformedValue","WithFieldError","WithFocus"];export{a as Default,d as WithFieldError,c as WithFocus,l as WithTransformedValue,Pe as __namedExportsOrder,Me as default};
