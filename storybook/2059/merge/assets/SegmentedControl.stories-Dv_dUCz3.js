import{j as r}from"./iframe-LeKLDkYY.js";import{a as l,u as d,F as h,t as F}from"./Form-BYfGufMQ.js";import{L as x}from"./Label-_IGpUYiB.js";import{B as n}from"./Button-BbTRgfHO.js";import{S as A}from"./Section-BZBM6YrE.js";import{A as v}from"./ActionGroup-oo50HUzg.js";import{s as f}from"./Action-BR3Us8L0.js";import{S,a as t}from"./Segment-DgreTnUr.js";import"./index-Cun1SEai.js";import"./dynamic-BVwjsZ-m.js";import"./flowComponent-B87WjEVi.js";import"./index-Bs8MTrz8.js";import"./clsx-B-dksMZM.js";import"./index-uQv72qiR.js";import"./FieldError-TZ4s3Na9.js";import"./IconWarning-DddVt0_L.js";import"./FieldError-BDYKP3YZ.js";import"./utils-1n9saaJJ.js";import"./Text--oZ7LG8m.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-_ZYyHG1p.js";import"./context-wUV3k3U5.js";import"./browser-Cy-I7M8E.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-C1dMHZA4.js";import"./Hidden-CLJBhJup.js";import"./Text-tNO3jzOI.js";import"./EmulatedBoldText-CCtxrL0Y.js";import"./LoadingSpinner-DNtKok85.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-CwiWPZWS.js";import"./ProgressBar-QdK-gkty.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-kmLZVcf4.js";import"./useFocus-DpQgRw3u.js";import"./useFocusRing-AniuyIk6.js";import"./useFocusable-BqRn9RY3.js";import"./ContextMenuSection-Dax-JE0X.js";import"./Dialog-Dqx_Qz1i.js";import"./RSPContexts-CUA3wiFH.js";import"./OverlayArrow-CWSdcIAn.js";import"./useControlledState-82f8Q_fD.js";import"./Collection-CO40bpB2.js";import"./CollectionBuilder-lBJI-o9S.js";import"./context-BPwzWA_h.js";import"./Separator-BBybTRPh.js";import"./SelectionManager-RiHQO5ol.js";import"./useEvent-CeBaYdiI.js";import"./useCollator-Bk1IX2EM.js";import"./FocusScope-tqJ5v6CU.js";import"./VisuallyHidden-25_VPX5X.js";import"./getActionGroupSlot-5hfWvZu9.js";import"./useStatic-BEy_HvO3.js";import"./context-DpN-jprx.js";import"./FormField.module-CqWyJNQI.js";import"./useMakeFocusable-a9qPG6ZB.js";import"./RadioGroup-CTJDvMgy.js";import"./Form-CCM4YJxo.js";import"./useFormValidation-B7bn9a_3.js";import"./useFormReset-CXz6fjib.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,B=y("submit"),qr={title:"Integrations/React Hook Form/SegmentedControl",component:l,render:()=>{const e=async b=>{await f(5e3),B(b)},j=d({defaultValues:{user:""}}),g=F();return r.jsx(h,{form:j,onSubmit:e,children:r.jsxs(A,{children:[r.jsx(g,{name:"user",children:r.jsxs(S,{children:[r.jsx(x,{children:"Role"}),r.jsx(t,{value:"admin",children:"Admin"}),r.jsx(t,{value:"member",children:"Member"}),r.jsx(t,{value:"accountant",children:"Accountant"})]})}),r.jsx(v,{children:r.jsx(n,{type:"submit",children:"Submit"})})]})})}},o={},m={render:()=>{const e=d();return r.jsxs(h,{form:e,onSubmit:async()=>await f(2e3),children:[r.jsx(l,{name:"text",rules:{required:!0},children:r.jsxs(S,{children:[r.jsx(x,{children:"Role"}),r.jsx(t,{value:"admin",children:"Admin"}),r.jsx(t,{value:"member",children:"Member"}),r.jsx(t,{value:"accountant",children:"Accountant"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(n,{onPress:()=>e.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(n,{onPress:()=>e.setFocus("text"),children:"focus through form"}),r.jsx(n,{type:"submit",children:"Submit"})]})}};var i,s,a;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(a=(s=o.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};var p,u,c;m.parameters={...m.parameters,docs:{...(p=m.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
