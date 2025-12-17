import{j as e,r as g}from"./iframe-BrERPjH0.js";import{u as a,F as l}from"./Form-Ac1Oeg88.js";import{L as i}from"./Label-CrwXzsx_.js";import{F as c,t as j}from"./Field-BqYTgjZG.js";import{B as d}from"./Button-BwrtrMsn.js";import{S as F}from"./Section-B3CMEqO8.js";import{A as b}from"./ActionGroup-1iai0086.js";import{s as u}from"./Action-ChQTmQoz.js";import{F as v}from"./FieldError-H2u6oDij.js";import{S as s,a as r}from"./Segment-B0ItxwB0.js";import{R as p}from"./ResetButton-A6e9JqB9.js";import{S as h}from"./SubmitButton-CrVj9caF.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-YFSmfPOL.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-B5K74hVz.js";import"./index-AmygQZwT.js";import"./index-DzMVKTvo.js";import"./useLocalizedStringFormatter-CF-Xe2GT.js";import"./context-DvwVEH9h.js";import"./Label-D4vlL-gU.js";import"./utils-DSRl4UW4.js";import"./Hidden-BAsL4qfb.js";import"./dynamic-D7aVmIf6.js";import"./IconChevronDown-BEw7wgap.js";import"./remote-Fny-y5bx.js";import"./IconX-w5i2HL6_.js";import"./IconCheck-CYohvaRX.js";import"./Text-Bge3UWaD.js";import"./EmulatedBoldText-ihVL4TkF.js";import"./Text-CFQd4N__.js";import"./LoadingSpinner-BnJ91rtd.js";import"./ariaLive-B0H2MtNq.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DaDxLfby.js";import"./ProgressBar-DcK7zEgl.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CWOKZ_16.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CXQYTWPh.js";import"./useFocus-BqH6bZyL.js";import"./useFocusRing-KYw8u7bF.js";import"./useFocusable-_eZhQVeM.js";import"./ContextMenuSection-J2h9Z88g.js";import"./lib-90ocxLs-.js";import"./Dialog-ByWgeyFx.js";import"./RSPContexts-BfqcGdFg.js";import"./OverlayArrow-gzfZyYcK.js";import"./useControlledState-C9HQthZh.js";import"./Collection-DiqnNJRv.js";import"./CollectionBuilder-DEDtg1Nu.js";import"./SelectionIndicator-Dsdfq8iX.js";import"./Separator-CjZ5Wt-Y.js";import"./SelectionManager-BZAXigYb.js";import"./useEvent-CWpAuNO7.js";import"./useCollator-oX0awY0e.js";import"./FocusScope-BjIKDCVD.js";import"./VisuallyHidden-BT85nAIH.js";import"./getActionGroupSlot-BcecKfQ6.js";import"./useStatic-DyRcj1Uc.js";import"./context-kHaIXrog.js";import"./FieldError-DI8l-yzx.js";import"./IconDanger-CeY6S6MU.js";import"./useFieldComponent-WOZCxk1N.js";import"./useMakeFocusable-D20de9J-.js";import"./RadioGroup-CIDDtS4G.js";import"./Form-CRLN4oBl.js";import"./useFormValidation-sc5NnAzh.js";import"./useFormReset-Bw5L0YJo.js";import"./IconCheck-BtLSXmVl.js";import"./useRef-ohG7iErY.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,A=E("submit"),Ne={title:"Integrations/React Hook Form/SegmentedControl",component:c,render:()=>{const t=async x=>{await u(5e3),A(x)},f=a({defaultValues:{user:""}}),S=j();return e.jsx(l,{form:f,onSubmit:t,children:e.jsxs(F,{children:[e.jsx(S,{name:"user",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsxs(b,{children:[e.jsx(p,{children:"Reset"}),e.jsx(h,{children:"Submit"})]})]})})}},o={},n={render:()=>{const t=a();return g.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(l,{form:t,onSubmit:async()=>await u(2e3),children:[e.jsx(c,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsxs(s,{isInvalid:!0,children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(v,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const t=a();return e.jsxs(l,{form:t,onSubmit:async()=>await u(2e3),children:[e.jsx(c,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(d,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(d,{onPress:()=>t.setFocus("field"),children:"focus through form"}),e.jsx(p,{children:"Reset"}),e.jsx(h,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const Ue=["Default","WithFieldError","WithFocus"];export{o as Default,n as WithFieldError,m as WithFocus,Ue as __namedExportsOrder,Ne as default};
