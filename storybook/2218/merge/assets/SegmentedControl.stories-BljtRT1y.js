import{j as e,r as g}from"./iframe-VTkEMv55.js";import{b as a,u as l,F as c,t as j}from"./Form-DYABidCX.js";import{L as i}from"./Label-DwQEy05E.js";import{R as p,S as h}from"./ResetButton-BQFORTG2.js";import{B as d}from"./Button-B9lvy9yg.js";import{S as F}from"./Section-DjOUR5LH.js";import{A as b}from"./ActionGroup-C1fdFreL.js";import{s as u}from"./Action-DV-QBt8x.js";import{S as s,a as r}from"./Segment-N2hRdw5z.js";import{F as v}from"./FieldError-B1IV40_q.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BSd9oB0r.js";import"./flowComponent-D-PEtegy.js";import"./index-DtZzACyH.js";import"./clsx-B-dksMZM.js";import"./index-D_xlAiD1.js";import"./useLocalizedStringFormatter-CUJ-Z77y.js";import"./context-BVezW8pN.js";import"./browser-_Qir5MkB.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-BRaJlgoE.js";import"./utils-DPKXOmt2.js";import"./Hidden-d-f11Ccs.js";import"./useRef-Da-vd52Y.js";import"./IconWarning-D408DR62.js";import"./remote-pRnbNSGs.js";import"./Text-DlbRcSah.js";import"./EmulatedBoldText-BYZc_oy6.js";import"./Text-DB2BTtqM.js";import"./LoadingSpinner-BWeGH-7c.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BKfoJr1S.js";import"./ProgressBar-6h4xV7_x.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-C-geoXZs.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Cb2XrqKT.js";import"./useFocus-JgmAf8eL.js";import"./useFocusRing-BeV8_2Yg.js";import"./useFocusable-CzgiUJAu.js";import"./ContextMenuSection-CWe96eWW.js";import"./Dialog-Qb8RaXBy.js";import"./RSPContexts-wdKGWz4J.js";import"./OverlayArrow-CyTNZBgT.js";import"./useControlledState-CxodNXny.js";import"./Collection-xr8-TVrR.js";import"./CollectionBuilder-DhJAnH_i.js";import"./SelectionIndicator-CYSMLMH7.js";import"./Separator-BE0n3_oB.js";import"./SelectionManager-G-GDhrqF.js";import"./useEvent-Cgy893y9.js";import"./useCollator-BSc2XrT4.js";import"./FocusScope-CTtHroqL.js";import"./VisuallyHidden-DjbItwE4.js";import"./getActionGroupSlot-Bve5nwK1.js";import"./useStatic-OVy-y77u.js";import"./context-CeKSAP77.js";import"./useFieldComponent-CicShoBh.js";import"./useMakeFocusable-Rx2vAtv6.js";import"./RadioGroup-DYyNpQ_n.js";import"./FieldError-CFdAmcbB.js";import"./Form-BAg9n-JE.js";import"./useFormValidation-CNiU2G-p.js";import"./useFormReset-DRm0nHwN.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,A=E("submit"),Pe={title:"Integrations/React Hook Form/SegmentedControl",component:a,render:()=>{const t=async x=>{await u(5e3),A(x)},S=l({defaultValues:{user:""}}),f=j();return e.jsx(c,{form:S,onSubmit:t,children:e.jsxs(F,{children:[e.jsx(f,{name:"user",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsxs(b,{children:[e.jsx(p,{children:"Reset"}),e.jsx(h,{children:"Submit"})]})]})})}},o={},n={render:()=>{const t=l();return g.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(c,{form:t,onSubmit:async()=>await u(2e3),children:[e.jsx(a,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsxs(s,{isInvalid:!0,children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(v,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const t=l();return e.jsxs(c,{form:t,onSubmit:async()=>await u(2e3),children:[e.jsx(a,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(d,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(d,{onPress:()=>t.setFocus("field"),children:"focus through form"}),e.jsx(p,{children:"Reset"}),e.jsx(h,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
        <ResetButton>Reset</ResetButton>
        <SubmitButton>Submit</SubmitButton>
      </Form>;
  }
}`,...m.parameters?.docs?.source}}};const We=["Default","WithFieldError","WithFocus"];export{o as Default,n as WithFieldError,m as WithFocus,We as __namedExportsOrder,Pe as default};
