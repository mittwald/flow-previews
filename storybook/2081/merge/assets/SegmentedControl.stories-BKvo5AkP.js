import{j as r}from"./iframe-Cxe2R7_6.js";import{a as l,u as d,F as h,t as F}from"./Form-J2UUhBWk.js";import{L as x}from"./Label-BvEZKMSr.js";import{B as n}from"./Button-DDreAfBq.js";import{S as A}from"./Section-CTCBpNMs.js";import{A as v}from"./ActionGroup-3nPo4GGD.js";import{s as f}from"./Action-g8e46b99.js";import{S,a as t}from"./Segment-we4pYX7D.js";import"./index-Cun1SEai.js";import"./dynamic-C5ZbgSqQ.js";import"./flowComponent-atuhteL1.js";import"./index-BmulK9zF.js";import"./clsx-B-dksMZM.js";import"./index-C9WdiMZF.js";import"./FieldError-DJ7xx1bf.js";import"./IconWarning-Jidhe8u4.js";import"./FieldError-C0Ib8VCD.js";import"./utils-DyWdIPZh.js";import"./Text-DwJdwITw.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-Iif1rEXq.js";import"./context-C4neI5Xk.js";import"./browser-eQsbTmR1.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-bC6dqEsb.js";import"./Hidden-D2ApJihV.js";import"./Text-BRz7lILS.js";import"./EmulatedBoldText-C6_bi1Ug.js";import"./LoadingSpinner-e3lyxMd6.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-CDVXHq5z.js";import"./ProgressBar-CNBuCKLn.js";import"./useLabel-D72_X68t.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CePQ8dAH.js";import"./useFocus-Cpp7XZsJ.js";import"./useFocusRing-b-PxAWXn.js";import"./useFocusable-D66X7lwl.js";import"./ContextMenuSection-Bi1QxvNY.js";import"./Dialog-Ch6Gf7aG.js";import"./RSPContexts-BTHaIq-S.js";import"./OverlayArrow-BxgQp36F.js";import"./useControlledState-B5CLhXq4.js";import"./Collection-C-iX88s0.js";import"./CollectionBuilder-DY4KGZ6m.js";import"./SelectionIndicator-BZBAluCS.js";import"./Separator-TUkk8FpW.js";import"./SelectionManager-D-Y_L5dA.js";import"./useEvent-C1DB-zaK.js";import"./useCollator-B3EheL1U.js";import"./FocusScope-NPqoHgmt.js";import"./VisuallyHidden-BVfZKHZh.js";import"./getActionGroupSlot-BsGN6_f1.js";import"./useStatic-CcLu1Qpn.js";import"./context-DVixImBB.js";import"./FormField.module-CqWyJNQI.js";import"./useMakeFocusable-DEGrXNpK.js";import"./RadioGroup-CbdsT4Wr.js";import"./Form-xSvri39Q.js";import"./useFormValidation-Bu_33Brb.js";import"./useFormReset-ClXq3Rv0.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,B=y("submit"),Mr={title:"Integrations/React Hook Form/SegmentedControl",component:l,render:()=>{const o=async b=>{await f(5e3),B(b)},j=d({defaultValues:{user:""}}),g=F();return r.jsx(h,{form:j,onSubmit:o,children:r.jsxs(A,{children:[r.jsx(g,{name:"user",children:r.jsxs(S,{children:[r.jsx(x,{children:"Role"}),r.jsx(t,{value:"admin",children:"Admin"}),r.jsx(t,{value:"member",children:"Member"}),r.jsx(t,{value:"accountant",children:"Accountant"})]})}),r.jsx(v,{children:r.jsx(n,{type:"submit",children:"Submit"})})]})})}},e={},m={render:()=>{const o=d();return r.jsxs(h,{form:o,onSubmit:async()=>await f(2e3),children:[r.jsx(l,{name:"text",rules:{required:!0},children:r.jsxs(S,{children:[r.jsx(x,{children:"Role"}),r.jsx(t,{value:"admin",children:"Admin"}),r.jsx(t,{value:"member",children:"Member"}),r.jsx(t,{value:"accountant",children:"Accountant"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(n,{onPress:()=>o.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(n,{onPress:()=>o.setFocus("text"),children:"focus through form"}),r.jsx(n,{type:"submit",children:"Submit"})]})}};var i,s,a;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(a=(s=e.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};var p,u,c;m.parameters={...m.parameters,docs:{...(p=m.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(c=(u=m.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};const Pr=["Default","WithFocusAndError"];export{e as Default,m as WithFocusAndError,Pr as __namedExportsOrder,Mr as default};
