import{j as e}from"./iframe-C72LIGrp.js";import{a as x,u as j,F as f,t as O}from"./Form-BrAeY_1h.js";import{L as n}from"./Label-BuGN1EiA.js";import{B as s}from"./Button-Dmf_fI6U.js";import{S as b}from"./Section-CMWdy8sM.js";import{A as g}from"./ActionGroup-BgMPlWay.js";import{s as S}from"./Action-BbbbpS8d.js";import{R as m,b as r}from"./RadioButton-CJKkc6OB.js";import"./index-Cun1SEai.js";import"./dynamic-M8RwUexW.js";import"./flowComponent-iVWHpCHC.js";import"./index-D0tOGuOJ.js";import"./clsx-B-dksMZM.js";import"./index-D1phmMZw.js";import"./FieldError-D1AwEDR1.js";import"./IconWarning-DoRUMKye.js";import"./FieldError-DSjxrI1_.js";import"./utils-Day1TTYQ.js";import"./Text-_4m1t08i.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-BdEN-g86.js";import"./context-BWimVEWy.js";import"./browser-Bf0-GHuQ.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-CF9BgwC5.js";import"./Hidden-qTQe9qE3.js";import"./Text-CvlnZLd7.js";import"./EmulatedBoldText-CkSYZpi_.js";import"./LoadingSpinner-_EHg-BbH.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-BS54933W.js";import"./ProgressBar-BXSV1RNz.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CqQxVakl.js";import"./useFocus-B4vRNHSZ.js";import"./useFocusRing-DuRh0iim.js";import"./useFocusable-Dej5ci1L.js";import"./ContextMenuSection-DZErrfjN.js";import"./Dialog-DSx4rsSv.js";import"./RSPContexts-CxFI_fU2.js";import"./OverlayArrow-CdAhbmJ_.js";import"./useControlledState-BbMqle0_.js";import"./Collection-CdRuOc0_.js";import"./CollectionBuilder-CIcvBtxV.js";import"./context-yrxx87JI.js";import"./Separator-B7O3kRSm.js";import"./SelectionManager-BcjpThhu.js";import"./useEvent-C77oyAsY.js";import"./useCollator-BOhm7rcx.js";import"./FocusScope-CCmAn32n.js";import"./VisuallyHidden-BStPS_vY.js";import"./getActionGroupSlot-CHOOOagJ.js";import"./useStatic-DPVFgY8A.js";import"./context-BXphONxA.js";import"./ColumnLayout-CJcwC2YA.js";import"./FormField.module-CqWyJNQI.js";import"./useMakeFocusable-cMpHNIXZ.js";import"./RadioGroup-D4GL3jWT.js";import"./Form-BHgRaZ3j.js";import"./useFormValidation-wW6D6XQK.js";import"./useFormReset-Bg8mSl5k.js";const{action:v}=__STORYBOOK_MODULE_ACTIONS__,B=v("submit"),Le={title:"Integrations/React Hook Form/RadioGroup",component:x,render:()=>{const o=async F=>{await S(1500),B(F)},R=j({defaultValues:{gender:"",genderDefaultValue:"diverse",genderRequired:""}}),a=O();return e.jsx(f,{form:R,onSubmit:o,children:e.jsxs(b,{children:[e.jsx(a,{name:"gender",children:e.jsxs(m,{children:[e.jsx(n,{children:"Gender"}),e.jsx(r,{value:"male",children:"Male"}),e.jsx(r,{value:"female",children:"Female"}),e.jsx(r,{value:"diverse",children:"Diverse"})]})}),e.jsx(a,{name:"genderDefaultValue",children:e.jsxs(m,{children:[e.jsx(n,{children:"Gender"}),e.jsx(r,{value:"male",children:"Male"}),e.jsx(r,{value:"female",children:"Female"}),e.jsx(r,{value:"diverse",children:"Diverse"})]})}),e.jsx(a,{name:"genderRequired",rules:{required:"Please select your gender"},children:e.jsxs(m,{children:[e.jsx(n,{children:"Gender"}),e.jsx(r,{value:"male",children:"Male"}),e.jsx(r,{value:"female",children:"Female"}),e.jsx(r,{value:"diverse",children:"Diverse"})]})}),e.jsx(g,{children:e.jsx(s,{type:"submit",children:"Submit"})})]})})}},t={},i={render:()=>{const o=j();return e.jsxs(f,{form:o,onSubmit:()=>v("submitted"),children:[e.jsx(x,{name:"text",rules:{required:!0},children:e.jsxs(m,{m:[1,1],l:[1,1,1],children:[e.jsx(n,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(s,{onPress:()=>o.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(s,{onPress:()=>o.setFocus("text"),children:"focus through form"}),e.jsx(s,{type:"submit",children:"Submit"})]})}};var d,l,p;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(p=(l=t.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var u,c,h;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={() => action("submitted")}>
        <Field name={"text"} rules={{
        required: true
      }}>
          <RadioGroup m={[1, 1]} l={[1, 1, 1]}>
            <Label>Options</Label>
            <Radio value="1">Option 1</Radio>
            <Radio value="2">Option 2</Radio>
            <Radio value="3">Option 3</Radio>
            <Radio value="4">Option 4</Radio>
            <Radio value="5">Option 5</Radio>
            <Radio value="6">Option 6</Radio>
          </RadioGroup>
        </Field>
        <div style={{
        marginBottom: "2200px"
      }} />
        <Button onPress={() => form.setError("text", {
        type: "required",
        message: "oh no"
      }, {
        shouldFocus: true
      })}>
          err through form
        </Button>
        <Button onPress={() => form.setFocus("text")}>
          focus through form
        </Button>
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...(h=(c=i.parameters)==null?void 0:c.docs)==null?void 0:h.source}}};const Pe=["Default","WithFocusAndError"];export{t as Default,i as WithFocusAndError,Pe as __namedExportsOrder,Le as default};
