import{j as r}from"./iframe-4Q3VdU3W.js";import{a as l,u as d,F as h,t as F}from"./Form-D0cPrVSZ.js";import{L as x}from"./Label-UJpqKaML.js";import{B as n}from"./Button-DtfrCWpg.js";import{S as A}from"./Section-BCaeDUwn.js";import{A as v}from"./ActionGroup-CDfjIgIF.js";import{s as f}from"./Action-BPLFS_xS.js";import{S,a as t}from"./Segment-DAgX__u4.js";import"./index-Cun1SEai.js";import"./dynamic-D7Z9JYdX.js";import"./flowComponent-CWhymxNW.js";import"./index-D-slKUrQ.js";import"./clsx-B-dksMZM.js";import"./index-PS7XpSls.js";import"./FieldError-BQ2VN50e.js";import"./IconWarning-C7969b2c.js";import"./FieldError-Bmwt53NP.js";import"./utils-BDqSegOF.js";import"./Text-CbQs5VbJ.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-BfINV5Nx.js";import"./context-Ctn7vzaA.js";import"./browser-BefUj7Q1.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-BPYRgbkp.js";import"./Hidden-B-Sfeo6e.js";import"./Text-Dj8BftP4.js";import"./EmulatedBoldText-VlnzXvNR.js";import"./LoadingSpinner-DB05D1_y.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-CVw6sY0j.js";import"./ProgressBar-DDVhQ4Au.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-gN-0t-oA.js";import"./useFocus-B23mYmqe.js";import"./useFocusRing-JPznIV6A.js";import"./useFocusable-xMViE0rI.js";import"./ContextMenuSection-DHdrwNVp.js";import"./Dialog-eTJli1DK.js";import"./RSPContexts-BraqArs8.js";import"./OverlayArrow-C0bCojbN.js";import"./useControlledState-DDubLIo_.js";import"./Collection-BcdTAldV.js";import"./CollectionBuilder-Djb2_WqG.js";import"./context-Crr8Yx7q.js";import"./Separator-V229l451.js";import"./SelectionManager-DSIHg9Rl.js";import"./useEvent-X_MmbY8S.js";import"./useCollator-DKF-AEK0.js";import"./FocusScope-CdBaHhXi.js";import"./VisuallyHidden-Bs3ruDlE.js";import"./getActionGroupSlot-DbevwPeS.js";import"./useStatic-J4yhNwyX.js";import"./context-HST9WQNh.js";import"./FormField.module-CqWyJNQI.js";import"./useMakeFocusable-yVzA5tdL.js";import"./RadioGroup-b3IHoRaC.js";import"./Form-CQ3IrCNT.js";import"./useFormValidation-QKBec53c.js";import"./useFormReset-DJaP_Vl0.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,B=y("submit"),qr={title:"Integrations/React Hook Form/SegmentedControl",component:l,render:()=>{const e=async b=>{await f(5e3),B(b)},j=d({defaultValues:{user:""}}),g=F();return r.jsx(h,{form:j,onSubmit:e,children:r.jsxs(A,{children:[r.jsx(g,{name:"user",children:r.jsxs(S,{children:[r.jsx(x,{children:"Role"}),r.jsx(t,{value:"admin",children:"Admin"}),r.jsx(t,{value:"member",children:"Member"}),r.jsx(t,{value:"accountant",children:"Accountant"})]})}),r.jsx(v,{children:r.jsx(n,{type:"submit",children:"Submit"})})]})})}},o={},m={render:()=>{const e=d();return r.jsxs(h,{form:e,onSubmit:async()=>await f(2e3),children:[r.jsx(l,{name:"text",rules:{required:!0},children:r.jsxs(S,{children:[r.jsx(x,{children:"Role"}),r.jsx(t,{value:"admin",children:"Admin"}),r.jsx(t,{value:"member",children:"Member"}),r.jsx(t,{value:"accountant",children:"Accountant"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(n,{onPress:()=>e.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(n,{onPress:()=>e.setFocus("text"),children:"focus through form"}),r.jsx(n,{type:"submit",children:"Submit"})]})}};var i,s,a;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(a=(s=o.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};var p,u,c;m.parameters={...m.parameters,docs:{...(p=m.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
