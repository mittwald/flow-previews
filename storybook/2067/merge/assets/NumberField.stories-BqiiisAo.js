import{j as r}from"./iframe-woTOwd7_.js";import{a as x,u as f,F as j,t as b}from"./Form-CDnbIgYI.js";import{L as t}from"./Label-BMPYi4BS.js";import{B as i}from"./Button-CqXZY3YI.js";import{S as y}from"./Section-Dn3mIjYv.js";import{A as S}from"./ActionGroup-DeD5Q09s.js";import{s as g}from"./Action-BlHQAv7W.js";import{N as o}from"./NumberField-dGMQ-Un4.js";import{F as A}from"./FieldDescription-BHmj1dCI.js";import"./index-Cun1SEai.js";import"./dynamic-C-nO0pE1.js";import"./flowComponent-B-uEZ_V3.js";import"./index-qiybc8_t.js";import"./clsx-B-dksMZM.js";import"./index-C7RKIbtQ.js";import"./FieldError-cqKK9eum.js";import"./IconWarning-DjIAWUJ_.js";import"./FieldError-DhBue0La.js";import"./utils-D3yPsyL0.js";import"./Text-CI6uvf20.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-D-GXZJS3.js";import"./context-FI-dTyul.js";import"./browser-B4P6bty3.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-Cing85ZS.js";import"./Hidden-BDYhUzcR.js";import"./Text-BJYnGCYe.js";import"./EmulatedBoldText-BDnx0pnN.js";import"./LoadingSpinner-CNqJtC-J.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-BJ7HgVKa.js";import"./ProgressBar-utMpytcX.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DGvsG6co.js";import"./useFocus-BFXKtnCR.js";import"./useFocusRing-CTuyXOeV.js";import"./useFocusable-BkuBS6Cc.js";import"./ContextMenuSection-C3ToUB4_.js";import"./Dialog-BSqtdg0s.js";import"./RSPContexts-BwXj6WuG.js";import"./OverlayArrow-CJHhfWFg.js";import"./useControlledState-BiOxSYVP.js";import"./Collection-hCvzUTfz.js";import"./CollectionBuilder-Dn4dC_2r.js";import"./context-bBTqONPe.js";import"./Separator-CLneeuje.js";import"./SelectionManager-DNqlxfyL.js";import"./useEvent-DFvoPCa0.js";import"./useCollator-DvLXcCH3.js";import"./FocusScope-CzW3cjLK.js";import"./VisuallyHidden-C2zuidlV.js";import"./getActionGroupSlot-Bh4vYXcV.js";import"./useStatic-DuP9qB1q.js";import"./context-BxwyR-58.js";import"./FormField.module-CqWyJNQI.js";import"./ReactAriaControlledValueFix-Dqc8mqip.js";import"./Form-B8f020lP.js";import"./Group-BsSeV8DT.js";import"./Input-BBLm8t4P.js";import"./useFormValidation-BteaOxt3.js";import"./useSpinButton-Z0l0HMwQ.js";import"./useFormReset-DJCienz-.js";import"./useTextField-ruai01e5.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,_=B("submit"),wr={title:"Integrations/React Hook Form/NumberField",component:x,render:()=>{const e=async F=>{await g(1500),_(F)},p=f({defaultValues:{ageDefaultValue:36}}),m=b();return r.jsx(j,{form:p,onSubmit:e,children:r.jsxs(y,{children:[r.jsx(m,{name:"age",children:r.jsx(o,{children:r.jsx(t,{children:"Age"})})}),r.jsx(m,{name:"ageDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Age"})})}),r.jsx(m,{name:"ageRequired",rules:{required:"Please enter your age"},children:r.jsx(o,{children:r.jsx(t,{children:"Age"})})}),r.jsx(m,{name:"ageMinValue",rules:{required:"Please enter your age"},children:r.jsxs(o,{minValue:18,children:[r.jsx(t,{children:"Age"}),r.jsx(A,{children:"You have to be at least 18 years old"})]})}),r.jsxs(S,{children:[r.jsx(i,{onPress:()=>p.reset(),children:"Reset"}),r.jsx(i,{type:"submit",children:"Submit"})]})]})})}},s={},n={render:()=>{const e=f();return r.jsxs(j,{form:e,onSubmit:async()=>await g(2e3),children:[r.jsx(x,{name:"text",rules:{required:!0},children:r.jsx(o,{children:r.jsx(t,{children:"Age"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(i,{onPress:()=>e.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(i,{onPress:()=>e.setFocus("text"),children:"focus through form"}),r.jsx(i,{type:"submit",children:"Submit"})]})}};var a,u,l;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(l=(u=s.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var c,d,h;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
