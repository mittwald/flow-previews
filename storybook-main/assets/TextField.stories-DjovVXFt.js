import{j as e,r as S}from"./iframe-DALqHAyB.js";import{A as F}from"./ActionGroup-BmRr98fb.js";import{B as m}from"./Button-BbfkfOCO.js";import{L as n}from"./Label-DyIG2v27.js";import{S as f}from"./Section-DauTDmMy.js";import{T as t}from"./TextField-BHwoiWcr.js";import{a as h,u,F as p,t as j}from"./Form-DWtgofJo.js";import{s as x}from"./Action-yEvGmIpX.js";import{F as g}from"./useFieldComponent-CuLkv2Wr.js";import"./index-nuYtCEEu.js";import"./dynamic-aVFvjRkA.js";import"./flowComponent-CvsgRxlP.js";import"./index-B4rQ27h-.js";import"./clsx-B-dksMZM.js";import"./index-CPatoSxs.js";import"./getActionGroupSlot-BwSd42Bi.js";import"./useStatic-WJbJZsQS.js";import"./IconWarning-CcDUp5xj.js";import"./Text-BxJmp77a.js";import"./browser-pVqjrops.js";import"./EmulatedBoldText-Dxvms5Wy.js";import"./Text-vTixOjUz.js";import"./utils-C0MA_VWy.js";import"./LoadingSpinner-K4oR_LJz.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-CC_Z0iQM.js";import"./context-aw0dYPtu.js";import"./Button-B6bWdLOu.js";import"./ProgressBar-udFHgrmU.js";import"./Label-D28Pduqa.js";import"./Hidden-SLgE1qP8.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-85XHUWXZ.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-RYFgUS1k.js";import"./useFocus-CR3niFsF.js";import"./useFocusRing-BpmoLA66.js";import"./useFocusable-UlymAToY.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-BiaSnVoU.js";import"./Dialog-bs1AaCOv.js";import"./RSPContexts-CoCveTu3.js";import"./OverlayArrow-CD30hPjT.js";import"./useControlledState-BAMCZ0BN.js";import"./Collection-BvojxhPL.js";import"./CollectionBuilder-l42sx1Ra.js";import"./SelectionIndicator-D4RzQj7G.js";import"./Separator-BdsMzjh6.js";import"./SelectionManager-DM5ASuX4.js";import"./useEvent-D9fHmb7e.js";import"./useCollator-Do-67ZwH.js";import"./FocusScope-7BxeDCH7.js";import"./VisuallyHidden-BkwE9NAp.js";import"./TextFieldBase-oGqtL2rG.js";import"./FieldDescription-DA7yQQcX.js";import"./TextField-CjKAtJ6I.js";import"./Form-DuNFHANS.js";import"./Group-Co0gZnxS.js";import"./Input-D7GaT3Mp.js";import"./useTextField-Di0sHcGC.js";import"./useFormReset-C8DxwuW7.js";import"./useFormValidation-C14rVgab.js";import"./ReactAriaControlledValueFix-BUPP8sB2.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./context-CWEo3fLe.js";import"./react-children-utilities-C1NF1MDP.js";import"./ClearPropsContext-frWmeUQW.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,b=y("submit"),Me={title:"Integrations/React Hook Form/TextField",component:h,render:()=>{const o=async s=>{await x(1500),b(s)},r=u({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:"",nameMinLength:""}}),i=j();return e.jsx(p,{form:r,onSubmit:o,children:e.jsxs(f,{children:[e.jsx(i,{name:"name",children:e.jsx(t,{children:e.jsx(n,{children:"Name"})})}),e.jsx(i,{name:"nameDefaultValue",children:e.jsx(t,{children:e.jsx(n,{children:"Name"})})}),e.jsx(i,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(t,{children:e.jsx(n,{children:"Name"})})}),e.jsx(i,{name:"nameMaxLength",children:e.jsx(t,{maxLength:10,showCharacterCount:!0,children:e.jsx(n,{children:"Name"})})}),e.jsx(i,{name:"controlledName",children:e.jsx(t,{value:r.watch("controlledName").toUpperCase(),children:e.jsx(n,{children:"Name"})})}),e.jsx(i,{name:"nameMinLength",rules:{required:"Please enter your name",minLength:2},children:e.jsx(t,{children:e.jsx(n,{children:"Name"})})}),e.jsxs(F,{children:[e.jsx(m,{type:"reset",children:"Reset"}),e.jsx(m,{type:"submit",children:"Submit"})]})]})})}},a={},l={render:()=>{const o=s=>{b(s)},r=u({defaultValues:{name:""}}),i=j();return e.jsx(p,{form:r,onSubmit:o,children:e.jsxs(f,{children:[e.jsx(i,{name:"name",children:e.jsx(t,{value:r.watch("name"),onChange:s=>{r.setValue("name",s.toUpperCase())},children:e.jsx(n,{children:"Name"})})}),e.jsx(F,{children:e.jsx(m,{type:"submit",children:"Submit"})})]})})}},d={render:()=>{const o=u();return S.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(p,{form:o,onSubmit:async()=>await x(2e3),children:[e.jsx(h,{name:"field",children:e.jsx(t,{children:e.jsx(n,{children:"Field"})})}),e.jsxs(t,{isInvalid:!0,children:[e.jsx(n,{children:"Field"}),e.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},c={render:o=>{const r=u();return e.jsxs(p,{form:r,onSubmit:async()=>await x(2e3),children:[e.jsx(h,{name:"field",children:e.jsx(t,{...o,type:"email",inputMode:"email",children:e.jsx(n,{children:"Field"})})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(m,{onPress:()=>r.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(m,{onPress:()=>r.setFocus("field"),children:"focus through form"}),e.jsx(m,{type:"submit",children:"Submit"})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
