import{j as r}from"./iframe-tskdVQ8N.js";import{a as c,u as d,F as l,t as b}from"./Form-CcGsBZKh.js";import{L as h}from"./Label-CsJ7Xmev.js";import{B as i}from"./Button-Dsg_4rdI.js";import{S as g}from"./Section-O741B4-H.js";import{A as y}from"./ActionGroup-B0eph536.js";import{s as x}from"./Action-CeCtXdjv.js";import{S as f}from"./SearchField-BJmpvPNj.js";import"./index-Cun1SEai.js";import"./dynamic-BrDu037J.js";import"./flowComponent-DXfmr-ai.js";import"./index-D6N0AnTm.js";import"./clsx-B-dksMZM.js";import"./index-C1m14znk.js";import"./FieldError-BdEz1ju8.js";import"./IconWarning-Bd2S-Yd8.js";import"./FieldError-BQtr77Yc.js";import"./utils-B12eWPaZ.js";import"./Text-DKYFQica.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-B-RI6mzv.js";import"./context-DiW1jRMX.js";import"./browser-C459Qnce.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-ZNOxXk3Q.js";import"./Hidden-D_rJ6hGg.js";import"./Text-jVUpGvvP.js";import"./EmulatedBoldText-BMIw02bL.js";import"./LoadingSpinner-DLMtzbRX.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DB-V2NKd.js";import"./ProgressBar-rxfhBUJO.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BvJ9VF5d.js";import"./useFocus-DfZ-8u74.js";import"./useFocusRing-L-u3dQN8.js";import"./useFocusable-DY9nb4Q3.js";import"./ContextMenuSection-DqvIY19i.js";import"./Dialog-D58MUJ_9.js";import"./RSPContexts-w3AEViLT.js";import"./OverlayArrow-CQI9fhos.js";import"./useControlledState-Py7g_hCX.js";import"./Collection-BQ6XNSlA.js";import"./CollectionBuilder-B0ypalQC.js";import"./SelectionIndicator-By4SQJVw.js";import"./Separator-N_51tPRN.js";import"./SelectionManager-6kMjKjHw.js";import"./useEvent-r3YrjOS6.js";import"./useCollator-BdaohURQ.js";import"./FocusScope-D_vsK9iJ.js";import"./VisuallyHidden-BVBeKb2k.js";import"./getActionGroupSlot-CxSNR9ht.js";import"./useStatic-1YPHy18H.js";import"./context-CVZR0KsW.js";import"./FormField.module-CqWyJNQI.js";import"./ReactAriaControlledValueFix-C-rmsYnN.js";import"./Form-r-7bApRf.js";import"./Group-BxNa3NfW.js";import"./Input-D8C7sCTv.js";import"./useTextField-v5hGozoz.js";import"./useFormReset-D7H6HyHT.js";import"./useFormValidation-GdVWjc_V.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,_=B("submit"),Dr={title:"Integrations/React Hook Form/SearchField",component:c,render:()=>{const t=async j=>{await x(5e3),_(j)},F=d({defaultValues:{user:""}}),S=b();return r.jsx(l,{form:F,onSubmit:t,children:r.jsxs(g,{children:[r.jsx(S,{name:"user",children:r.jsx(f,{children:r.jsx(h,{children:"Suche"})})}),r.jsx(y,{children:r.jsx(i,{type:"submit",children:"Submit"})})]})})}},o={},e={render:()=>{const t=d();return r.jsxs(l,{form:t,onSubmit:async()=>await x(2e3),children:[r.jsx(c,{name:"text",rules:{required:!0},children:r.jsx(f,{children:r.jsx(h,{children:"Role"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(i,{onPress:()=>t.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(i,{onPress:()=>t.setFocus("text"),children:"focus through form"}),r.jsx(i,{type:"submit",children:"Submit"})]})}};var m,s,n;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(n=(s=o.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var p,a,u;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"text"} rules={{
        required: true
      }}>
          <SearchField>
            <Label>Role</Label>
          </SearchField>
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
}`,...(u=(a=e.parameters)==null?void 0:a.docs)==null?void 0:u.source}}};const vr=["Default","WithFocusAndError"];export{o as Default,e as WithFocusAndError,vr as __namedExportsOrder,Dr as default};
