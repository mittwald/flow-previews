import{j as r}from"./iframe-C72LIGrp.js";import{a as x,u as f,F as j,t as b}from"./Form-BrAeY_1h.js";import{L as t}from"./Label-BuGN1EiA.js";import{B as i}from"./Button-Dmf_fI6U.js";import{S as y}from"./Section-CMWdy8sM.js";import{A as S}from"./ActionGroup-BgMPlWay.js";import{s as g}from"./Action-BbbbpS8d.js";import{N as o}from"./NumberField-dTEdv4O3.js";import{F as A}from"./FieldDescription-Ch1dZGOn.js";import"./index-Cun1SEai.js";import"./dynamic-M8RwUexW.js";import"./flowComponent-iVWHpCHC.js";import"./index-D0tOGuOJ.js";import"./clsx-B-dksMZM.js";import"./index-D1phmMZw.js";import"./FieldError-D1AwEDR1.js";import"./IconWarning-DoRUMKye.js";import"./FieldError-DSjxrI1_.js";import"./utils-Day1TTYQ.js";import"./Text-_4m1t08i.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-BdEN-g86.js";import"./context-BWimVEWy.js";import"./browser-Bf0-GHuQ.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-CF9BgwC5.js";import"./Hidden-qTQe9qE3.js";import"./Text-CvlnZLd7.js";import"./EmulatedBoldText-CkSYZpi_.js";import"./LoadingSpinner-_EHg-BbH.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-BS54933W.js";import"./ProgressBar-BXSV1RNz.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CqQxVakl.js";import"./useFocus-B4vRNHSZ.js";import"./useFocusRing-DuRh0iim.js";import"./useFocusable-Dej5ci1L.js";import"./ContextMenuSection-DZErrfjN.js";import"./Dialog-DSx4rsSv.js";import"./RSPContexts-CxFI_fU2.js";import"./OverlayArrow-CdAhbmJ_.js";import"./useControlledState-BbMqle0_.js";import"./Collection-CdRuOc0_.js";import"./CollectionBuilder-CIcvBtxV.js";import"./context-yrxx87JI.js";import"./Separator-B7O3kRSm.js";import"./SelectionManager-BcjpThhu.js";import"./useEvent-C77oyAsY.js";import"./useCollator-BOhm7rcx.js";import"./FocusScope-CCmAn32n.js";import"./VisuallyHidden-BStPS_vY.js";import"./getActionGroupSlot-CHOOOagJ.js";import"./useStatic-DPVFgY8A.js";import"./context-BXphONxA.js";import"./FormField.module-CqWyJNQI.js";import"./ReactAriaControlledValueFix-B91Z4yvN.js";import"./Form-BHgRaZ3j.js";import"./Group-BK-2drbg.js";import"./Input-Dda4VuA-.js";import"./useFormValidation-wW6D6XQK.js";import"./useSpinButton-Bk9dYK_C.js";import"./useFormReset-Bg8mSl5k.js";import"./useTextField-BTvozyhw.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,_=B("submit"),wr={title:"Integrations/React Hook Form/NumberField",component:x,render:()=>{const e=async F=>{await g(1500),_(F)},p=f({defaultValues:{ageDefaultValue:36}}),m=b();return r.jsx(j,{form:p,onSubmit:e,children:r.jsxs(y,{children:[r.jsx(m,{name:"age",children:r.jsx(o,{children:r.jsx(t,{children:"Age"})})}),r.jsx(m,{name:"ageDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Age"})})}),r.jsx(m,{name:"ageRequired",rules:{required:"Please enter your age"},children:r.jsx(o,{children:r.jsx(t,{children:"Age"})})}),r.jsx(m,{name:"ageMinValue",rules:{required:"Please enter your age"},children:r.jsxs(o,{minValue:18,children:[r.jsx(t,{children:"Age"}),r.jsx(A,{children:"You have to be at least 18 years old"})]})}),r.jsxs(S,{children:[r.jsx(i,{onPress:()=>p.reset(),children:"Reset"}),r.jsx(i,{type:"submit",children:"Submit"})]})]})})}},s={},n={render:()=>{const e=f();return r.jsxs(j,{form:e,onSubmit:async()=>await g(2e3),children:[r.jsx(x,{name:"text",rules:{required:!0},children:r.jsx(o,{children:r.jsx(t,{children:"Age"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(i,{onPress:()=>e.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(i,{onPress:()=>e.setFocus("text"),children:"focus through form"}),r.jsx(i,{type:"submit",children:"Submit"})]})}};var a,u,l;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(l=(u=s.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var c,d,h;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"text"} rules={{
        required: true
      }}>
          <NumberField>
            <Label>Age</Label>
          </NumberField>
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
}`,...(h=(d=n.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};const Ir=["Default","WithFocusAndError"];export{s as Default,n as WithFocusAndError,Ir as __namedExportsOrder,wr as default};
