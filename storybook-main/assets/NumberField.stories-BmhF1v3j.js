import{j as r}from"./iframe-FESji9AM.js";import{a as x,u as f,F as j,t as b}from"./Form-_7yjhTRr.js";import{L as t}from"./Label-pNVGz1sw.js";import{B as i}from"./Button-BAxmgeRc.js";import{S as y}from"./Section-BpWwEjxG.js";import{A as S}from"./ActionGroup-BwhCzZFA.js";import{s as g}from"./Action-CrJdyVja.js";import{N as o}from"./NumberField-Wp0FjnlA.js";import{F as A}from"./FieldDescription-CA-9B81B.js";import"./index-Cun1SEai.js";import"./dynamic-CUTbtcza.js";import"./flowComponent-DFQAJ_2B.js";import"./index-BqyXU5kt.js";import"./clsx-B-dksMZM.js";import"./index-ChCUOHR4.js";import"./FieldError-zF1s5-sf.js";import"./IconWarning-BN848dMt.js";import"./FieldError-DlYIOKPN.js";import"./utils-C8mGBIgx.js";import"./Text-CpJktiaj.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-CqB2I62z.js";import"./context-ChjkYhaK.js";import"./browser-CzqLgnVu.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-DTEJhL1C.js";import"./Hidden-EsiqW7jM.js";import"./Text-BCUZ6o5_.js";import"./EmulatedBoldText-DW2sem56.js";import"./LoadingSpinner-BczKcQ8x.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-BW1fAfFv.js";import"./ProgressBar-BtYyhcda.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CLpB9Wju.js";import"./useFocus-Bhqj5rOY.js";import"./useFocusRing-zSoWzuoi.js";import"./useFocusable-C4O-U4lE.js";import"./ContextMenuSection-B7y0wjj1.js";import"./Dialog-CXSXfPFc.js";import"./RSPContexts-DiZSnWK-.js";import"./OverlayArrow-8xtTBq8b.js";import"./useControlledState-GWuXrIJ_.js";import"./Collection-5dsgZq8H.js";import"./CollectionBuilder-CIsMqzLE.js";import"./context-BElELkmV.js";import"./Separator-C3QdnVt7.js";import"./SelectionManager-CZcnEcDm.js";import"./useEvent-CA4CrZH2.js";import"./useCollator-B71GfqqY.js";import"./FocusScope-DVksIqcF.js";import"./VisuallyHidden-CxIvQbp6.js";import"./getActionGroupSlot-yK4DsrgL.js";import"./useStatic-JqJXV1dT.js";import"./context-igvBEEcT.js";import"./FormField.module-CqWyJNQI.js";import"./ReactAriaControlledValueFix-S5j312LI.js";import"./Form-BtmTLzrx.js";import"./Group-CLv-XZL2.js";import"./Input-BlcEEaiS.js";import"./useFormValidation-B9n8pxvz.js";import"./useSpinButton-C94OVlSq.js";import"./useFormReset-B3Fww5Tk.js";import"./useTextField-DfDR-6Y5.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,_=B("submit"),wr={title:"Integrations/React Hook Form/NumberField",component:x,render:()=>{const e=async F=>{await g(1500),_(F)},p=f({defaultValues:{ageDefaultValue:36}}),m=b();return r.jsx(j,{form:p,onSubmit:e,children:r.jsxs(y,{children:[r.jsx(m,{name:"age",children:r.jsx(o,{children:r.jsx(t,{children:"Age"})})}),r.jsx(m,{name:"ageDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Age"})})}),r.jsx(m,{name:"ageRequired",rules:{required:"Please enter your age"},children:r.jsx(o,{children:r.jsx(t,{children:"Age"})})}),r.jsx(m,{name:"ageMinValue",rules:{required:"Please enter your age"},children:r.jsxs(o,{minValue:18,children:[r.jsx(t,{children:"Age"}),r.jsx(A,{children:"You have to be at least 18 years old"})]})}),r.jsxs(S,{children:[r.jsx(i,{onPress:()=>p.reset(),children:"Reset"}),r.jsx(i,{type:"submit",children:"Submit"})]})]})})}},s={},n={render:()=>{const e=f();return r.jsxs(j,{form:e,onSubmit:async()=>await g(2e3),children:[r.jsx(x,{name:"text",rules:{required:!0},children:r.jsx(o,{children:r.jsx(t,{children:"Age"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(i,{onPress:()=>e.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(i,{onPress:()=>e.setFocus("text"),children:"focus through form"}),r.jsx(i,{type:"submit",children:"Submit"})]})}};var a,u,l;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(l=(u=s.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var c,d,h;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
