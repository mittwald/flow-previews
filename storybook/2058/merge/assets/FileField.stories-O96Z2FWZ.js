import{j as r}from"./iframe-D2Anwmct.js";import{a as c,u as l,F as d,t as b}from"./Form-NvgoK1At.js";import{L as h}from"./Label-CqHNa78s.js";import{B as t}from"./Button-DzBCXdJ8.js";import{S as y}from"./Section-D-XgJ8U5.js";import{A as B}from"./ActionGroup-DwbiqJMg.js";import{s as x}from"./Action-TQJO2mvI.js";import{F as f}from"./FileField-DPkUIcvz.js";import"./index-Cun1SEai.js";import"./dynamic-Cfahilqg.js";import"./flowComponent-DKluqIHM.js";import"./index-f9td_37l.js";import"./clsx-B-dksMZM.js";import"./index-Ch7RQrKi.js";import"./FieldError-BoPnTUuW.js";import"./IconWarning-DnpABaws.js";import"./FieldError-BxxGUPOn.js";import"./utils-BpjcCBEz.js";import"./Text-lRP8kqf1.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-BekYTjw8.js";import"./context--yho_VB2.js";import"./browser-CPuaporN.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-CyDLPDuC.js";import"./Hidden-C6VQoCGL.js";import"./Text-DtdPLjLU.js";import"./EmulatedBoldText-C4J0xt-K.js";import"./LoadingSpinner-Dn83SSS7.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DXQ0LQy1.js";import"./ProgressBar-B5M0YtFC.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DkH4CmpU.js";import"./useFocus-CPbnM8zc.js";import"./useFocusRing-BsT1m1qa.js";import"./useFocusable-BPmxfIwz.js";import"./ContextMenuSection-DEYSZK6N.js";import"./Dialog-CzAn2oqc.js";import"./RSPContexts-W5re5w0Z.js";import"./OverlayArrow-nozbf4eZ.js";import"./useControlledState-CmSk5MJT.js";import"./Collection-C6c4IzCm.js";import"./CollectionBuilder-BN9-opMn.js";import"./context-X2EiAF6-.js";import"./Separator-XkOJaGaU.js";import"./SelectionManager-BVJUtLYE.js";import"./useEvent-eZ8bSyVx.js";import"./useCollator-DzTf225U.js";import"./FocusScope-B3f0Mp00.js";import"./VisuallyHidden-Cz7LPiXA.js";import"./getActionGroupSlot-CMiTVAum.js";import"./useStatic-CHoU06Vl.js";import"./context-BRmDUAMd.js";import"./FormField.module-CqWyJNQI.js";import"./useFormValidation-s-r8BMkB.js";import"./Input-B4tXXK1a.js";import"./useMakeFocusable-DLbAZGSO.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,_=g("submit"),Lr={title:"Integrations/React Hook Form/FileField",component:c,render:()=>{const o=async S=>{await x(5e3),_(S)},F=l({defaultValues:{user:""}}),j=b();return r.jsx(d,{form:F,onSubmit:o,children:r.jsxs(y,{children:[r.jsx(j,{name:"user",children:r.jsxs(f,{children:[r.jsx(h,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsx(B,{children:r.jsx(t,{type:"submit",children:"Submit"})})]})})}},e={},i={render:()=>{const o=l();return r.jsxs(d,{form:o,onSubmit:async()=>await x(2e3),children:[r.jsx(c,{name:"text",rules:{required:!0},children:r.jsxs(f,{multiple:!0,children:[r.jsx(h,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>o.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>o.setFocus("text"),children:"focus through form"}),r.jsx(t,{type:"submit",children:"Submit"})]})}};var m,n,s;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var p,a,u;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"text"} rules={{
        required: true
      }}>
          <FileField multiple>
            <Label>Certificate</Label>
            <Button variant="outline" color="secondary">
              Select
            </Button>
          </FileField>
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
}`,...(u=(a=i.parameters)==null?void 0:a.docs)==null?void 0:u.source}}};const qr=["Default","WithFocusAndError"];export{e as Default,i as WithFocusAndError,qr as __namedExportsOrder,Lr as default};
