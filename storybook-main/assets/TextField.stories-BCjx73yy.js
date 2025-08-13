import{j as e}from"./iframe-BsKdyUUo.js";import{A as j}from"./ActionGroup-deMRafWY.js";import{B as p}from"./Button-QyPw2-70.js";import{L as o}from"./Label-DJsBJ_92.js";import{S as f}from"./Section-CWbH4Id2.js";import{T as n}from"./TextField-BpX8Ehw-.js";import{a as N,u as b,F,t as S}from"./Form-DOZIRcRr.js";import{s as O}from"./Action-BpogoZfV.js";import"./PropsContextProvider-BPLOAGWE.js";import"./mergeRefs-CQ-EiqC6.js";import"./index-E2r8vySZ.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-B4-8kfZ1.js";import"./useStatic-BdSd4Y0O.js";import"./IconWarning-BNNa1TWi.js";import"./Text-DM7V5ibr.js";import"./browser-kgZUWjhe.js";import"./EmulatedBoldText-VybBTGHf.js";import"./Text-BeFIQxaH.js";import"./utils-DeHCGthq.js";import"./LoadingSpinner-pItv9nzE.js";import"./useLocalizedStringFormatter-DE5fT8Pw.js";import"./context-NhbPwiu7.js";import"./Button-DLwd4SNh.js";import"./ProgressBar-C4DAHdKI.js";import"./Label-E4B9ly-I.js";import"./Hidden-DrjQVD0p.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BowSekYU.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-BPobG-50.js";import"./useFocus-BvYTyo5a.js";import"./useFocusRing-B-gSRSGq.js";import"./useFocusable-CIlrQQDJ.js";import"./ContextMenuSection-DQsun80c.js";import"./Dialog-CR91adc_.js";import"./RSPContexts-DxWJbArM.js";import"./OverlayArrow-CO3Q51Tz.js";import"./useControlledState-BMR5C57X.js";import"./Collection-CnS4S-Fi.js";import"./CollectionBuilder-DjDB1Psg.js";import"./Separator-DkeUCbX0.js";import"./Group-Dk0IJ4vM.js";import"./SearchField-DHm90Ej9.js";import"./FieldError-CHLtNaA2.js";import"./Form-DEii-ghQ.js";import"./useTextField-BDfBPM-X.js";import"./useFormReset-BCcZ866S.js";import"./TextField-DVuykaoA.js";import"./useEvent-Bb929JbC.js";import"./SelectionManager-bkmIMDCG.js";import"./useCollator-vsGgvR80.js";import"./FocusScope-r24VL_U3.js";import"./VisuallyHidden-Cn_ktU6z.js";import"./TextFieldBase-DBagE_NE.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-IFpwvXo1.js";import"./FieldDescription-B2_iTS1r.js";import"./ReactAriaControlledValueFix-DncQW-lX.js";import"./context-LgmDjMSt.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,V=g("submit"),we={title:"Integrations/React Hook Form/TextField",component:N,render:()=>{const s=async m=>{await O(1500),V(m)},t=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"controlledName",children:e.jsx(n,{value:t.watch("controlledName").toUpperCase(),children:e.jsx(o,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(p,{type:"reset",children:"Reset"}),e.jsx(p,{type:"submit",children:"Submit"})]})]})})}},i={},a={render:()=>{const s=m=>{V(m)},t=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{value:t.watch("name"),onChange:m=>{t.setValue("name",m.toUpperCase())},children:e.jsx(o,{children:"Name"})})}),e.jsx(j,{children:e.jsx(p,{type:"submit",children:"Submit"})})]})})}};var l,c,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(x=(h=a.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const Be=["Default","WithTransformedValue"];export{i as Default,a as WithTransformedValue,Be as __namedExportsOrder,we as default};
