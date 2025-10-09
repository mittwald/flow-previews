import{j as r}from"./iframe-woTOwd7_.js";import{a as c,u as l,F as d,t as b}from"./Form-CDnbIgYI.js";import{L as h}from"./Label-BMPYi4BS.js";import{B as t}from"./Button-CqXZY3YI.js";import{S as y}from"./Section-Dn3mIjYv.js";import{A as B}from"./ActionGroup-DeD5Q09s.js";import{s as x}from"./Action-BlHQAv7W.js";import{F as f}from"./FileField-MNtDn7rX.js";import"./index-Cun1SEai.js";import"./dynamic-C-nO0pE1.js";import"./flowComponent-B-uEZ_V3.js";import"./index-qiybc8_t.js";import"./clsx-B-dksMZM.js";import"./index-C7RKIbtQ.js";import"./FieldError-cqKK9eum.js";import"./IconWarning-DjIAWUJ_.js";import"./FieldError-DhBue0La.js";import"./utils-D3yPsyL0.js";import"./Text-CI6uvf20.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-D-GXZJS3.js";import"./context-FI-dTyul.js";import"./browser-B4P6bty3.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-Cing85ZS.js";import"./Hidden-BDYhUzcR.js";import"./Text-BJYnGCYe.js";import"./EmulatedBoldText-BDnx0pnN.js";import"./LoadingSpinner-CNqJtC-J.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-BJ7HgVKa.js";import"./ProgressBar-utMpytcX.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DGvsG6co.js";import"./useFocus-BFXKtnCR.js";import"./useFocusRing-CTuyXOeV.js";import"./useFocusable-BkuBS6Cc.js";import"./ContextMenuSection-C3ToUB4_.js";import"./Dialog-BSqtdg0s.js";import"./RSPContexts-BwXj6WuG.js";import"./OverlayArrow-CJHhfWFg.js";import"./useControlledState-BiOxSYVP.js";import"./Collection-hCvzUTfz.js";import"./CollectionBuilder-Dn4dC_2r.js";import"./context-bBTqONPe.js";import"./Separator-CLneeuje.js";import"./SelectionManager-DNqlxfyL.js";import"./useEvent-DFvoPCa0.js";import"./useCollator-DvLXcCH3.js";import"./FocusScope-CzW3cjLK.js";import"./VisuallyHidden-C2zuidlV.js";import"./getActionGroupSlot-Bh4vYXcV.js";import"./useStatic-DuP9qB1q.js";import"./context-BxwyR-58.js";import"./FormField.module-CqWyJNQI.js";import"./useFormValidation-BteaOxt3.js";import"./Input-BBLm8t4P.js";import"./useMakeFocusable-CoPGrv-w.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,_=g("submit"),Lr={title:"Integrations/React Hook Form/FileField",component:c,render:()=>{const o=async S=>{await x(5e3),_(S)},F=l({defaultValues:{user:""}}),j=b();return r.jsx(d,{form:F,onSubmit:o,children:r.jsxs(y,{children:[r.jsx(j,{name:"user",children:r.jsxs(f,{children:[r.jsx(h,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsx(B,{children:r.jsx(t,{type:"submit",children:"Submit"})})]})})}},e={},i={render:()=>{const o=l();return r.jsxs(d,{form:o,onSubmit:async()=>await x(2e3),children:[r.jsx(c,{name:"text",rules:{required:!0},children:r.jsxs(f,{multiple:!0,children:[r.jsx(h,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>o.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>o.setFocus("text"),children:"focus through form"}),r.jsx(t,{type:"submit",children:"Submit"})]})}};var m,n,s;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var p,a,u;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
