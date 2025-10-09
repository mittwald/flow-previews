import{j as r}from"./iframe-Dyev7uqQ.js";import{a as l,u as d,F as h,t as F}from"./Form-Gu8_mx9R.js";import{L as x}from"./Label-DTUVPi2K.js";import{B as n}from"./Button-M1gfFqsi.js";import{S as A}from"./Section-BfDLZAnd.js";import{A as v}from"./ActionGroup-Cif2aV44.js";import{s as f}from"./Action-B4ax4ap7.js";import{S,a as t}from"./Segment-BcWOfInm.js";import"./index-Cun1SEai.js";import"./dynamic-BE-yoA5C.js";import"./flowComponent-CYF9F6TT.js";import"./index-Du7KBi6Z.js";import"./clsx-B-dksMZM.js";import"./index-CvZL7rFv.js";import"./FieldError-BvGSOrPS.js";import"./IconWarning-Bsmw3ttA.js";import"./FieldError-Nbp5sqjA.js";import"./utils-xAJ0Toj9.js";import"./Text-s2lACfdw.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-BxSCNYWk.js";import"./context-z-HIZVd9.js";import"./browser-ChaPEiup.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-DEHEOlON.js";import"./Hidden-D-qqENuK.js";import"./Text-DCNvFKD8.js";import"./EmulatedBoldText-DLRRZTZj.js";import"./LoadingSpinner-B-dR1bVB.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-bK5LqQIE.js";import"./ProgressBar-DcFpY2St.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DabLIItt.js";import"./useFocus-D9hOsqQc.js";import"./useFocusRing-Bh9Ki2YC.js";import"./useFocusable-uBBnOUX9.js";import"./ContextMenuSection-8BAKg1zJ.js";import"./Dialog-BJ5ZUOL1.js";import"./RSPContexts-CLj3WTCR.js";import"./OverlayArrow-BiwtfbnF.js";import"./useControlledState-Cwb3iJ3d.js";import"./Collection-BT_5iu3o.js";import"./CollectionBuilder-Dc0EH4jX.js";import"./context-xoyjw4Qx.js";import"./Separator-Cv2eEaeb.js";import"./SelectionManager-DOzQyaMw.js";import"./useEvent-CtspRZPb.js";import"./useCollator-BcWYCPX5.js";import"./FocusScope-BBXHLeS0.js";import"./VisuallyHidden-BtDNzz4I.js";import"./getActionGroupSlot-BeoHjYlq.js";import"./useStatic-Bud3ojrW.js";import"./context-C27PnH24.js";import"./FormField.module-CqWyJNQI.js";import"./useMakeFocusable-C9hlV0WZ.js";import"./RadioGroup-CgoRXZRl.js";import"./Form-DM5JENEN.js";import"./useFormValidation-BpwVeG4s.js";import"./useFormReset-CiUCuSgO.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,B=y("submit"),qr={title:"Integrations/React Hook Form/SegmentedControl",component:l,render:()=>{const e=async b=>{await f(5e3),B(b)},j=d({defaultValues:{user:""}}),g=F();return r.jsx(h,{form:j,onSubmit:e,children:r.jsxs(A,{children:[r.jsx(g,{name:"user",children:r.jsxs(S,{children:[r.jsx(x,{children:"Role"}),r.jsx(t,{value:"admin",children:"Admin"}),r.jsx(t,{value:"member",children:"Member"}),r.jsx(t,{value:"accountant",children:"Accountant"})]})}),r.jsx(v,{children:r.jsx(n,{type:"submit",children:"Submit"})})]})})}},o={},m={render:()=>{const e=d();return r.jsxs(h,{form:e,onSubmit:async()=>await f(2e3),children:[r.jsx(l,{name:"text",rules:{required:!0},children:r.jsxs(S,{children:[r.jsx(x,{children:"Role"}),r.jsx(t,{value:"admin",children:"Admin"}),r.jsx(t,{value:"member",children:"Member"}),r.jsx(t,{value:"accountant",children:"Accountant"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(n,{onPress:()=>e.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(n,{onPress:()=>e.setFocus("text"),children:"focus through form"}),r.jsx(n,{type:"submit",children:"Submit"})]})}};var i,s,a;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(a=(s=o.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};var p,u,c;m.parameters={...m.parameters,docs:{...(p=m.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
