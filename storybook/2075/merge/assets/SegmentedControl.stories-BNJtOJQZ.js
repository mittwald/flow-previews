import{j as r}from"./iframe-D3XbVUAE.js";import{a as l,u as d,F as h,t as F}from"./Form-C5MCGQf3.js";import{L as x}from"./Label-BTIrFf4y.js";import{B as n}from"./Button-DI43yX0M.js";import{S as A}from"./Section-BUZrj2S6.js";import{A as v}from"./ActionGroup-F8VITapX.js";import{s as f}from"./Action-CZBfRLDN.js";import{S,a as t}from"./Segment-D4HNAYeW.js";import"./index-Cun1SEai.js";import"./dynamic-GIq4BKTG.js";import"./flowComponent-EDib50S8.js";import"./index-CK8n9fzK.js";import"./clsx-B-dksMZM.js";import"./index-BE_iNncf.js";import"./FieldError-DuGPuZu9.js";import"./IconWarning-DpoKEiS2.js";import"./FieldError-NLw4NqNk.js";import"./utils-BWY6h_sn.js";import"./Text-D1dMR7Bg.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-CjS_r_W_.js";import"./context-DmwBBPOa.js";import"./browser-DZQtGRWw.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-DVxhCXlj.js";import"./Hidden-Cd6SNVLk.js";import"./Text-D8iCnd0a.js";import"./EmulatedBoldText-C38wPnte.js";import"./LoadingSpinner-LCrs4rVN.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-BiJGxu5-.js";import"./ProgressBar-BpanmrTJ.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DzXxx4G-.js";import"./useFocus-DS8-NOtK.js";import"./useFocusRing-C2luJKmh.js";import"./useFocusable-ZL6151jY.js";import"./ContextMenuSection-CLGzRvVY.js";import"./Dialog-D6YV7AqF.js";import"./RSPContexts-BakoLx3C.js";import"./OverlayArrow-9doXs0eI.js";import"./useControlledState-Dbx7ZwrT.js";import"./Collection-C3nUBF4h.js";import"./CollectionBuilder-B_u7Wa0Q.js";import"./SelectionIndicator-Cq3hNpeI.js";import"./Separator-BCuxzefv.js";import"./SelectionManager-CUwtbCt4.js";import"./useEvent-nRU769M-.js";import"./useCollator-zmWlXBku.js";import"./FocusScope-Bgf4u7XC.js";import"./VisuallyHidden-ChWvOP_M.js";import"./getActionGroupSlot-CXPM0c0n.js";import"./useStatic-B8Xkh7jF.js";import"./context-Do4klyfP.js";import"./FormField.module-CqWyJNQI.js";import"./useMakeFocusable-C7JQv0_C.js";import"./RadioGroup-kiANVexC.js";import"./Form-CcsDzmFP.js";import"./useFormValidation-Co07oj9m.js";import"./useFormReset-BLKvBmEx.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,B=y("submit"),qr={title:"Integrations/React Hook Form/SegmentedControl",component:l,render:()=>{const e=async b=>{await f(5e3),B(b)},j=d({defaultValues:{user:""}}),g=F();return r.jsx(h,{form:j,onSubmit:e,children:r.jsxs(A,{children:[r.jsx(g,{name:"user",children:r.jsxs(S,{children:[r.jsx(x,{children:"Role"}),r.jsx(t,{value:"admin",children:"Admin"}),r.jsx(t,{value:"member",children:"Member"}),r.jsx(t,{value:"accountant",children:"Accountant"})]})}),r.jsx(v,{children:r.jsx(n,{type:"submit",children:"Submit"})})]})})}},o={},m={render:()=>{const e=d();return r.jsxs(h,{form:e,onSubmit:async()=>await f(2e3),children:[r.jsx(l,{name:"text",rules:{required:!0},children:r.jsxs(S,{children:[r.jsx(x,{children:"Role"}),r.jsx(t,{value:"admin",children:"Admin"}),r.jsx(t,{value:"member",children:"Member"}),r.jsx(t,{value:"accountant",children:"Accountant"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(n,{onPress:()=>e.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(n,{onPress:()=>e.setFocus("text"),children:"focus through form"}),r.jsx(n,{type:"submit",children:"Submit"})]})}};var i,s,a;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(a=(s=o.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};var p,u,c;m.parameters={...m.parameters,docs:{...(p=m.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
