import{j as e,r as y}from"./iframe-DTheBFqg.js";import{a as l,u as c,F as d,t as B}from"./Form-Bb0OZPQ3.js";import{L as s}from"./Label-DS5MocSE.js";import{B as i}from"./Button-Bmq0qjWo.js";import{S as R}from"./Section-BDBFYB_1.js";import{A as C}from"./ActionGroup-Cjs4nxWu.js";import{s as u}from"./Action-XVrtYdEu.js";import{S as a,a as r}from"./Segment-Bb2HMEzr.js";import{F as L}from"./useFieldComponent-mBN-j8SF.js";import"./index-Cun1SEai.js";import"./flowComponent-gCUS5Qd-.js";import"./index-ulNAr9WE.js";import"./clsx-B-dksMZM.js";import"./index-C24gQbls.js";import"./useLocalizedStringFormatter-CvDaoHpN.js";import"./context-BBJsvWP1.js";import"./browser-BqPz5wcV.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-DaxiHPCi.js";import"./utils-CIVb4-pA.js";import"./Hidden-BUnkE8VR.js";import"./IconWarning-CXTS1Zmo.js";import"./Text-DVaBUvZL.js";import"./EmulatedBoldText-P0d28SeQ.js";import"./Text-C48huDBb.js";import"./LoadingSpinner-CLX8R9JK.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-B9sfb4m-.js";import"./ProgressBar-Dr6zks-A.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DE7AINdt.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DWQVem_V.js";import"./useFocus-gFMm1SVx.js";import"./useFocusRing-Bw6jYcrF.js";import"./useFocusable-CIkWBa0n.js";import"./ContextMenuSection-DVfZqLHJ.js";import"./Dialog-DwHrBIEx.js";import"./RSPContexts-DdYP_yiK.js";import"./OverlayArrow-Bio3H0xn.js";import"./useControlledState-CxM5G25q.js";import"./Collection-BJPKgIab.js";import"./CollectionBuilder-CQSVhr8L.js";import"./SelectionIndicator-CjHN0yDY.js";import"./Separator-D87Ko5QM.js";import"./SelectionManager-uhDgeTSM.js";import"./useEvent-BjpDtAMc.js";import"./useCollator-2o_2J_me.js";import"./FocusScope-CHz78Q3h.js";import"./VisuallyHidden-D3PBi60E.js";import"./dynamic-DYsVCHyX.js";import"./getActionGroupSlot-BTW6ZZ6S.js";import"./useStatic-KScOH6sT.js";import"./context-D5Eh6Kjh.js";import"./useMakeFocusable-DG-Ql63t.js";import"./RadioGroup-pPj_xytR.js";import"./Form-B9EEIYmx.js";import"./useFormValidation-Bp-At_qz.js";import"./useFormReset-C6eFdCIy.js";import"./react-children-utilities-g2QZgYrG.js";import"./ClearPropsContext-NW1-nYLP.js";const{action:O}=__STORYBOOK_MODULE_ACTIONS__,M=O("submit"),ke={title:"Integrations/React Hook Form/SegmentedControl",component:l,render:()=>{const t=async A=>{await u(5e3),M(A)},v=c({defaultValues:{user:""}}),E=B();return e.jsx(d,{form:v,onSubmit:t,children:e.jsxs(R,{children:[e.jsx(E,{name:"user",children:e.jsxs(a,{children:[e.jsx(s,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsx(C,{children:e.jsx(i,{type:"submit",children:"Submit"})})]})})}},o={},n={render:()=>{const t=c();return y.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(d,{form:t,onSubmit:async()=>await u(2e3),children:[e.jsx(l,{name:"field",children:e.jsxs(a,{children:[e.jsx(s,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsxs(a,{isInvalid:!0,children:[e.jsx(s,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(L,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const t=c();return e.jsxs(d,{form:t,onSubmit:async()=>await u(2e3),children:[e.jsx(l,{name:"field",children:e.jsxs(a,{children:[e.jsx(s,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(i,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(i,{onPress:()=>t.setFocus("field"),children:"focus through form"}),e.jsx(i,{type:"submit",children:"Submit"})]})}};var p,h,f;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(f=(h=o.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var S,g,x;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <SegmentedControl>
            <Label>Role</Label>
            <Segment value="admin">Admin</Segment>
            <Segment value="member">Member</Segment>
            <Segment value="accountant">Accountant</Segment>
          </SegmentedControl>
        </Field>
        <SegmentedControl isInvalid>
          <Label>Role</Label>
          <Segment value="admin">Admin</Segment>
          <Segment value="member">Member</Segment>
          <Segment value="accountant">Accountant</Segment>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </SegmentedControl>
      </Form>;
  }
}`,...(x=(g=n.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var F,j,b;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
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
        <Button onPress={() => form.setError("field", {
        type: "required",
        message: "oh no"
      }, {
        shouldFocus: true
      })}>
          err through form
        </Button>
        <Button onPress={() => form.setFocus("field")}>
          focus through form
        </Button>
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...(b=(j=m.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};const Ge=["Default","WithFieldError","WithFocus"];export{o as Default,n as WithFieldError,m as WithFocus,Ge as __namedExportsOrder,ke as default};
