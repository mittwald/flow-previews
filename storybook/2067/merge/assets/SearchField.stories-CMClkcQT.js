import{j as r}from"./iframe-woTOwd7_.js";import{a as c,u as d,F as l,t as b}from"./Form-CDnbIgYI.js";import{L as h}from"./Label-BMPYi4BS.js";import{B as i}from"./Button-CqXZY3YI.js";import{S as g}from"./Section-Dn3mIjYv.js";import{A as y}from"./ActionGroup-DeD5Q09s.js";import{s as x}from"./Action-BlHQAv7W.js";import{S as f}from"./SearchField-DMs_tHBM.js";import"./index-Cun1SEai.js";import"./dynamic-C-nO0pE1.js";import"./flowComponent-B-uEZ_V3.js";import"./index-qiybc8_t.js";import"./clsx-B-dksMZM.js";import"./index-C7RKIbtQ.js";import"./FieldError-cqKK9eum.js";import"./IconWarning-DjIAWUJ_.js";import"./FieldError-DhBue0La.js";import"./utils-D3yPsyL0.js";import"./Text-CI6uvf20.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-D-GXZJS3.js";import"./context-FI-dTyul.js";import"./browser-B4P6bty3.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-Cing85ZS.js";import"./Hidden-BDYhUzcR.js";import"./Text-BJYnGCYe.js";import"./EmulatedBoldText-BDnx0pnN.js";import"./LoadingSpinner-CNqJtC-J.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-BJ7HgVKa.js";import"./ProgressBar-utMpytcX.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DGvsG6co.js";import"./useFocus-BFXKtnCR.js";import"./useFocusRing-CTuyXOeV.js";import"./useFocusable-BkuBS6Cc.js";import"./ContextMenuSection-C3ToUB4_.js";import"./Dialog-BSqtdg0s.js";import"./RSPContexts-BwXj6WuG.js";import"./OverlayArrow-CJHhfWFg.js";import"./useControlledState-BiOxSYVP.js";import"./Collection-hCvzUTfz.js";import"./CollectionBuilder-Dn4dC_2r.js";import"./context-bBTqONPe.js";import"./Separator-CLneeuje.js";import"./SelectionManager-DNqlxfyL.js";import"./useEvent-DFvoPCa0.js";import"./useCollator-DvLXcCH3.js";import"./FocusScope-CzW3cjLK.js";import"./VisuallyHidden-C2zuidlV.js";import"./getActionGroupSlot-Bh4vYXcV.js";import"./useStatic-DuP9qB1q.js";import"./context-BxwyR-58.js";import"./FormField.module-CqWyJNQI.js";import"./ReactAriaControlledValueFix-Dqc8mqip.js";import"./Form-B8f020lP.js";import"./Group-BsSeV8DT.js";import"./Input-BBLm8t4P.js";import"./useTextField-ruai01e5.js";import"./useFormReset-DJCienz-.js";import"./useFormValidation-BteaOxt3.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,_=B("submit"),Dr={title:"Integrations/React Hook Form/SearchField",component:c,render:()=>{const t=async j=>{await x(5e3),_(j)},F=d({defaultValues:{user:""}}),S=b();return r.jsx(l,{form:F,onSubmit:t,children:r.jsxs(g,{children:[r.jsx(S,{name:"user",children:r.jsx(f,{children:r.jsx(h,{children:"Suche"})})}),r.jsx(y,{children:r.jsx(i,{type:"submit",children:"Submit"})})]})})}},o={},e={render:()=>{const t=d();return r.jsxs(l,{form:t,onSubmit:async()=>await x(2e3),children:[r.jsx(c,{name:"text",rules:{required:!0},children:r.jsx(f,{children:r.jsx(h,{children:"Role"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(i,{onPress:()=>t.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(i,{onPress:()=>t.setFocus("text"),children:"focus through form"}),r.jsx(i,{type:"submit",children:"Submit"})]})}};var m,s,n;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(n=(s=o.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var p,a,u;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
