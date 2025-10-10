import{j as r}from"./iframe-BsWE3_7o.js";import{a as c,u as l,F as d,t as b}from"./Form-CmXyG-QV.js";import{L as h}from"./Label-D6AcunKl.js";import{B as t}from"./Button-B8k4PzHL.js";import{S as y}from"./Section-BBfFuT6N.js";import{A as B}from"./ActionGroup-B8fCt23K.js";import{s as x}from"./Action-BuGRjvOM.js";import{F as f}from"./FileField-C7fnk0EA.js";import"./index-Cun1SEai.js";import"./dynamic-CuzBn_WV.js";import"./flowComponent-Cm7zYSgo.js";import"./index-Bx4whYyJ.js";import"./clsx-B-dksMZM.js";import"./index-Dl-28hpS.js";import"./FieldError-Dyno9e6-.js";import"./IconWarning-DP87PzzZ.js";import"./FieldError-B9NI0uR6.js";import"./utils-CDS5H-7_.js";import"./Text-TQ7kewRG.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-Cam9elWn.js";import"./context-JgUU7ob0.js";import"./browser-LwAPTQ-2.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-CRuRdSc0.js";import"./Hidden-BJN4u45n.js";import"./Text-BX8imB2t.js";import"./EmulatedBoldText-BTQlJ2rY.js";import"./LoadingSpinner-BHbUYlFD.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-Dk5kDV0G.js";import"./ProgressBar-B-b_Vg6x.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BAk4CpA9.js";import"./useFocus-D0VElTMN.js";import"./useFocusRing-VBFwaSrL.js";import"./useFocusable-CddXNiQZ.js";import"./ContextMenuSection-B-erxgIm.js";import"./Dialog-BSaAMEbK.js";import"./RSPContexts-BZ8FUmDB.js";import"./OverlayArrow-IIw_dauQ.js";import"./useControlledState-ejVvWz-k.js";import"./Collection-DojlZZtj.js";import"./CollectionBuilder-B76ZLXz4.js";import"./context-lpkCHAFg.js";import"./Separator-Dpoi8-ef.js";import"./SelectionManager-01TNEB4e.js";import"./useEvent-iSMBndhq.js";import"./useCollator-Dfjx7kh0.js";import"./FocusScope-BU2EHzP0.js";import"./VisuallyHidden-CnzfSQ3j.js";import"./getActionGroupSlot-C6PA21cd.js";import"./useStatic-BvSdYqAU.js";import"./context-CUTz3ChQ.js";import"./FormField.module-CqWyJNQI.js";import"./useFormValidation-5Qvk76gI.js";import"./Input-ChLUKEAu.js";import"./useMakeFocusable-r7PJwVhH.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,_=g("submit"),Lr={title:"Integrations/React Hook Form/FileField",component:c,render:()=>{const o=async S=>{await x(5e3),_(S)},F=l({defaultValues:{user:""}}),j=b();return r.jsx(d,{form:F,onSubmit:o,children:r.jsxs(y,{children:[r.jsx(j,{name:"user",children:r.jsxs(f,{children:[r.jsx(h,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsx(B,{children:r.jsx(t,{type:"submit",children:"Submit"})})]})})}},e={},i={render:()=>{const o=l();return r.jsxs(d,{form:o,onSubmit:async()=>await x(2e3),children:[r.jsx(c,{name:"text",rules:{required:!0},children:r.jsxs(f,{multiple:!0,children:[r.jsx(h,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>o.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>o.setFocus("text"),children:"focus through form"}),r.jsx(t,{type:"submit",children:"Submit"})]})}};var m,n,s;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var p,a,u;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
