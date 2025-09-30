import{j as r}from"./iframe-8Gn-cQAI.js";import{a as x,u as f,F as j,t as b}from"./Form-Drx3o-9i.js";import{L as t}from"./Label-BKQD2yp-.js";import{B as i}from"./Button-BYLyJZ8T.js";import{S as y}from"./Section-D-_npJws.js";import{A as S}from"./ActionGroup-DeqHAwBL.js";import{s as g}from"./Action-HGXjP-6z.js";import{N as o}from"./NumberField-IaTo6Kln.js";import{F as A}from"./FieldDescription-BfSaLbIT.js";import"./index-Cun1SEai.js";import"./dynamic-rXbOiSCg.js";import"./flowComponent-DkmU8bZi.js";import"./index-AzFL6bUY.js";import"./clsx-B-dksMZM.js";import"./index-UEc6MpK_.js";import"./FieldError-C-zSllwf.js";import"./IconWarning-D4orWaCC.js";import"./FieldError-BP_wpITZ.js";import"./utils-GVjct8zS.js";import"./Text-YtT3E9ZO.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-Bkj0giXD.js";import"./context-BNiVp3am.js";import"./browser-BcQIid3c.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-BTym8jb9.js";import"./Hidden-ClnO7J5u.js";import"./Text-CaltWpnJ.js";import"./EmulatedBoldText-BFjU3iq0.js";import"./LoadingSpinner-DLXLBid4.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-3o-n2ltV.js";import"./ProgressBar-Cd_i9EHd.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-ITUQCIPr.js";import"./useFocus-B0X0Lu9Z.js";import"./useFocusRing-CitWdiPC.js";import"./useFocusable-D0eqHiUC.js";import"./ContextMenuSection-BSmzwpDI.js";import"./Dialog-DaZvxqJC.js";import"./RSPContexts-BLLLZDxH.js";import"./OverlayArrow-t8YkI2AY.js";import"./useControlledState-CowCOuKH.js";import"./Collection-DWEguDCp.js";import"./CollectionBuilder-9Z-fAvba.js";import"./context-OwOTZ-QT.js";import"./Separator-Dm-csSJW.js";import"./SelectionManager-CsYJeMyB.js";import"./useEvent-CbQE1MrG.js";import"./useCollator-DlUVcb0E.js";import"./FocusScope-CFCh8ZEd.js";import"./VisuallyHidden-hAbnP3vK.js";import"./getActionGroupSlot-DshV_Wd3.js";import"./useStatic-D4LCMNvH.js";import"./context-BIaltrhp.js";import"./FormField.module-CqWyJNQI.js";import"./ReactAriaControlledValueFix-CTvHT95w.js";import"./Form-uqEItuxM.js";import"./Group-D6MDioP3.js";import"./Input-D8m2LMBm.js";import"./useFormValidation-CDT2yp15.js";import"./useSpinButton-6EdjtgPs.js";import"./useFormReset-EWszKDPA.js";import"./useTextField-CZZzsHWG.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,_=B("submit"),wr={title:"Integrations/React Hook Form/NumberField",component:x,render:()=>{const e=async F=>{await g(1500),_(F)},p=f({defaultValues:{ageDefaultValue:36}}),m=b();return r.jsx(j,{form:p,onSubmit:e,children:r.jsxs(y,{children:[r.jsx(m,{name:"age",children:r.jsx(o,{children:r.jsx(t,{children:"Age"})})}),r.jsx(m,{name:"ageDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Age"})})}),r.jsx(m,{name:"ageRequired",rules:{required:"Please enter your age"},children:r.jsx(o,{children:r.jsx(t,{children:"Age"})})}),r.jsx(m,{name:"ageMinValue",rules:{required:"Please enter your age"},children:r.jsxs(o,{minValue:18,children:[r.jsx(t,{children:"Age"}),r.jsx(A,{children:"You have to be at least 18 years old"})]})}),r.jsxs(S,{children:[r.jsx(i,{onPress:()=>p.reset(),children:"Reset"}),r.jsx(i,{type:"submit",children:"Submit"})]})]})})}},s={},n={render:()=>{const e=f();return r.jsxs(j,{form:e,onSubmit:async()=>await g(2e3),children:[r.jsx(x,{name:"text",rules:{required:!0},children:r.jsx(o,{children:r.jsx(t,{children:"Age"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(i,{onPress:()=>e.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(i,{onPress:()=>e.setFocus("text"),children:"focus through form"}),r.jsx(i,{type:"submit",children:"Submit"})]})}};var a,u,l;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(l=(u=s.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var c,d,h;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
