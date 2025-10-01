import{j as r}from"./iframe-8Gn-cQAI.js";import{a as l,u as d,F as h,t as F}from"./Form-Drx3o-9i.js";import{L as x}from"./Label-BKQD2yp-.js";import{B as n}from"./Button-BYLyJZ8T.js";import{S as A}from"./Section-D-_npJws.js";import{A as v}from"./ActionGroup-DeqHAwBL.js";import{s as f}from"./Action-HGXjP-6z.js";import{S,a as t}from"./Segment-lqGM9cn3.js";import"./index-Cun1SEai.js";import"./dynamic-rXbOiSCg.js";import"./flowComponent-DkmU8bZi.js";import"./index-AzFL6bUY.js";import"./clsx-B-dksMZM.js";import"./index-UEc6MpK_.js";import"./FieldError-C-zSllwf.js";import"./IconWarning-D4orWaCC.js";import"./FieldError-BP_wpITZ.js";import"./utils-GVjct8zS.js";import"./Text-YtT3E9ZO.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-Bkj0giXD.js";import"./context-BNiVp3am.js";import"./browser-BcQIid3c.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-BTym8jb9.js";import"./Hidden-ClnO7J5u.js";import"./Text-CaltWpnJ.js";import"./EmulatedBoldText-BFjU3iq0.js";import"./LoadingSpinner-DLXLBid4.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-3o-n2ltV.js";import"./ProgressBar-Cd_i9EHd.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-ITUQCIPr.js";import"./useFocus-B0X0Lu9Z.js";import"./useFocusRing-CitWdiPC.js";import"./useFocusable-D0eqHiUC.js";import"./ContextMenuSection-BSmzwpDI.js";import"./Dialog-DaZvxqJC.js";import"./RSPContexts-BLLLZDxH.js";import"./OverlayArrow-t8YkI2AY.js";import"./useControlledState-CowCOuKH.js";import"./Collection-DWEguDCp.js";import"./CollectionBuilder-9Z-fAvba.js";import"./context-OwOTZ-QT.js";import"./Separator-Dm-csSJW.js";import"./SelectionManager-CsYJeMyB.js";import"./useEvent-CbQE1MrG.js";import"./useCollator-DlUVcb0E.js";import"./FocusScope-CFCh8ZEd.js";import"./VisuallyHidden-hAbnP3vK.js";import"./getActionGroupSlot-DshV_Wd3.js";import"./useStatic-D4LCMNvH.js";import"./context-BIaltrhp.js";import"./FormField.module-CqWyJNQI.js";import"./useMakeFocusable-DzdpYT79.js";import"./RadioGroup-BuVGIRWp.js";import"./Form-uqEItuxM.js";import"./useFormValidation-CDT2yp15.js";import"./useFormReset-EWszKDPA.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,B=y("submit"),qr={title:"Integrations/React Hook Form/SegmentedControl",component:l,render:()=>{const e=async b=>{await f(5e3),B(b)},j=d({defaultValues:{user:""}}),g=F();return r.jsx(h,{form:j,onSubmit:e,children:r.jsxs(A,{children:[r.jsx(g,{name:"user",children:r.jsxs(S,{children:[r.jsx(x,{children:"Role"}),r.jsx(t,{value:"admin",children:"Admin"}),r.jsx(t,{value:"member",children:"Member"}),r.jsx(t,{value:"accountant",children:"Accountant"})]})}),r.jsx(v,{children:r.jsx(n,{type:"submit",children:"Submit"})})]})})}},o={},m={render:()=>{const e=d();return r.jsxs(h,{form:e,onSubmit:async()=>await f(2e3),children:[r.jsx(l,{name:"text",rules:{required:!0},children:r.jsxs(S,{children:[r.jsx(x,{children:"Role"}),r.jsx(t,{value:"admin",children:"Admin"}),r.jsx(t,{value:"member",children:"Member"}),r.jsx(t,{value:"accountant",children:"Accountant"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(n,{onPress:()=>e.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(n,{onPress:()=>e.setFocus("text"),children:"focus through form"}),r.jsx(n,{type:"submit",children:"Submit"})]})}};var i,s,a;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(a=(s=o.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};var p,u,c;m.parameters={...m.parameters,docs:{...(p=m.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"text"} rules={{
        required: true
      }}>
          <SegmentedControl>
            <Label>Role</Label>
            <Segment value="admin">Admin</Segment>
            <Segment value="member">Member</Segment>
            <Segment value="accountant">Accountant</Segment>
          </SegmentedControl>
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
}`,...(c=(u=m.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};const Mr=["Default","WithFocusAndError"];export{o as Default,m as WithFocusAndError,Mr as __namedExportsOrder,qr as default};
