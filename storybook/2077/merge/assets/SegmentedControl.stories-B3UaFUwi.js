import{j as r}from"./iframe-CTxtjXon.js";import{a as l,u as d,F as h,t as F}from"./Form-B0b-E516.js";import{L as x}from"./Label-DtGgIyZp.js";import{B as n}from"./Button-CTR-HA58.js";import{S as A}from"./Section-BY4zi19G.js";import{A as v}from"./ActionGroup-CzROJviL.js";import{s as f}from"./Action-DoHauz19.js";import{S,a as t}from"./Segment-DwBpj01M.js";import"./index-Cun1SEai.js";import"./dynamic-BqhEVzNx.js";import"./flowComponent-Cceoz8ap.js";import"./index-BzGnAInb.js";import"./clsx-B-dksMZM.js";import"./index-BCkzqzEU.js";import"./FieldError-yMhB6vk6.js";import"./IconWarning-BCagwmXL.js";import"./FieldError-DPTagllN.js";import"./utils-Dyxd3-sq.js";import"./Text-DVSB2R1T.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-B51ecTCL.js";import"./context-OuuPOLWB.js";import"./browser-B97evyF-.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-JOCFYh16.js";import"./Hidden-B6GGwvwy.js";import"./Text-DQcec0AG.js";import"./EmulatedBoldText-Da4iAST0.js";import"./LoadingSpinner-ju42Rriq.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-BdISzqDC.js";import"./ProgressBar-CwnBBaoA.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-7iMHywUA.js";import"./useFocus-DHjekZqL.js";import"./useFocusRing-w77Sy5gu.js";import"./useFocusable-C9nsuFPZ.js";import"./ContextMenuSection-BZN_5wKO.js";import"./Dialog-D2IuAywV.js";import"./RSPContexts-C8qhDI2w.js";import"./OverlayArrow-DQGSQRaj.js";import"./useControlledState-CwLLr83F.js";import"./Collection-Bj68a-ij.js";import"./CollectionBuilder-1DpsfIN0.js";import"./SelectionIndicator-DjYZoC83.js";import"./Separator-7MWrsQei.js";import"./SelectionManager-CnAC5LUd.js";import"./useEvent-VfxjGHfX.js";import"./useCollator-W6_B_X8C.js";import"./FocusScope-BV_8rP7c.js";import"./VisuallyHidden-CZsUJsM2.js";import"./getActionGroupSlot-CRH0bVBh.js";import"./useStatic-FLOcJlac.js";import"./context-C6LdJJW6.js";import"./FormField.module-CqWyJNQI.js";import"./useMakeFocusable-CHy9hJsR.js";import"./RadioGroup-BoOSe6SJ.js";import"./Form-aYocGFK9.js";import"./useFormValidation-PRBMAw7o.js";import"./useFormReset-dEYYJoAx.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,B=y("submit"),qr={title:"Integrations/React Hook Form/SegmentedControl",component:l,render:()=>{const e=async b=>{await f(5e3),B(b)},j=d({defaultValues:{user:""}}),g=F();return r.jsx(h,{form:j,onSubmit:e,children:r.jsxs(A,{children:[r.jsx(g,{name:"user",children:r.jsxs(S,{children:[r.jsx(x,{children:"Role"}),r.jsx(t,{value:"admin",children:"Admin"}),r.jsx(t,{value:"member",children:"Member"}),r.jsx(t,{value:"accountant",children:"Accountant"})]})}),r.jsx(v,{children:r.jsx(n,{type:"submit",children:"Submit"})})]})})}},o={},m={render:()=>{const e=d();return r.jsxs(h,{form:e,onSubmit:async()=>await f(2e3),children:[r.jsx(l,{name:"text",rules:{required:!0},children:r.jsxs(S,{children:[r.jsx(x,{children:"Role"}),r.jsx(t,{value:"admin",children:"Admin"}),r.jsx(t,{value:"member",children:"Member"}),r.jsx(t,{value:"accountant",children:"Accountant"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(n,{onPress:()=>e.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(n,{onPress:()=>e.setFocus("text"),children:"focus through form"}),r.jsx(n,{type:"submit",children:"Submit"})]})}};var i,s,a;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(a=(s=o.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};var p,u,c;m.parameters={...m.parameters,docs:{...(p=m.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
