import{j as e,r as g}from"./iframe-BULoVSu-.js";import{b as a,u as l,F as c,t as j}from"./Form-BHs9YWf-.js";import{L as i}from"./Label-DWCkXaJt.js";import{R as p,S as h}from"./ResetButton-DLtgrkVV.js";import{B as d}from"./Button-DvOPlqIW.js";import{S as b,s as u}from"./Section-dZ6T0Qjb.js";import{A as F}from"./ActionGroup-CdzBskC5.js";import{ao as s,ap as r,g as v}from"./TimeField-1hPaxYRS.js";import"./index-nuYtCEEu.js";import"./dynamic-D5pGRiRC.js";import"./PropsContextProvider-BPIZn01x.js";import"./mergeRefs-CEsjPslJ.js";import"./index-DQ_hsp85.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-CNoz61n8.js";import"./context-BQ6yD6Hs.js";import"./browser-CQOPH7Oy.js";import"./utils-BZ7EFgdg.js";import"./ProgressBar-CiVynXjH.js";import"./Hidden-C5LzDjRJ.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-DrICVJv-.js";import"./Text-Bg3HcGTD.js";import"./EmulatedBoldText-CVrOLZNg.js";import"./LoadingSpinner-BfUy7fQr.js";import"./Button-DWJqXgIw.js";import"./useFocusRing-qHICYkG6.js";import"./useFocusable-BJ4RiU3A.js";import"./context-DrExWdfs.js";import"./RSPContexts-DiGug6wA.js";import"./Collection-BGk_QoAN.js";import"./CollectionBuilder-CYT9SihX.js";import"./SelectionIndicator-DElX2Ml7.js";import"./Separator-CFtgJiRb.js";import"./useStatic-Dyq_KzQP.js";import"./Accordion-8FTg--rA.js";import"./Alert-DYZY0TL2.js";import"./AlertIcon-BlR5z9QA.js";import"./AlertBadge-DH8Oxe-N.js";import"./Align-B4QMXwt_.js";import"./Popover-CjClCujz.js";import"./OverlayTrigger-vU2Qjf7N.js";import"./TableFooterRow-BPCO49YC.js";import"./SkeletonText-BTeejoSt.js";import"./Avatar-BfIiybJY.js";import"./AvatarStack-BxKBxtVU.js";import"./Badge-CAMn07m4.js";import"./BigNumber-rg1cxAc2.js";import"./Breadcrumb-CYVN-SjU.js";import"./Link-KCtn6aUA.js";import"./Heading-Ds4iBrHb.js";import"./Legend-DReYAr9-.js";import"./FileCardList-CKSx-0eT.js";import"./Image-DNEKXGy_.js";import"./Color-DizN4J9h.js";import"./Content-DA44jWO0.js";import"./ContextualHelpTrigger-Cq74vnwF.js";import"./CounterBadge-DqN2lUJ6.js";import"./DonutChart-ByHy_tf4.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-BPxmEpFw.js";import"./Header-C-kaAsvR.js";import"./Initials-DzoATSJF.js";import"./InlineCode-CLVrphJo.js";import"./PopoverTrigger-CK-Br2ii.js";import"./Separator-D_J1GVIS.js";import"./Message-Cj4eSaLV.js";import"./MessageSeparator-BKcuFd8P.js";import"./NavigationGroup-BLC2he0l.js";import"./Notification-CPfWjlNe.js";import"./NotificationProvider-CF_1VnvW.js";import"./ProgressBar-C-I_U1Y0.js";import"./Rating-dHI8nJ9_.js";import"./Skeleton-ZxO1W6TI.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,A=E("submit"),Ue={title:"Integrations/React Hook Form/SegmentedControl",component:a,render:()=>{const t=async x=>{await u(5e3),A(x)},S=l({defaultValues:{user:""}}),f=j();return e.jsx(c,{form:S,onSubmit:t,children:e.jsxs(b,{children:[e.jsx(f,{name:"user",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsxs(F,{children:[e.jsx(p,{children:"Reset"}),e.jsx(h,{children:"Submit"})]})]})})}},o={},n={render:()=>{const t=l();return g.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(c,{form:t,onSubmit:async()=>await u(2e3),children:[e.jsx(a,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsxs(s,{isInvalid:!0,children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(v,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const t=l();return e.jsxs(c,{form:t,onSubmit:async()=>await u(2e3),children:[e.jsx(a,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(d,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(d,{onPress:()=>t.setFocus("field"),children:"focus through form"}),e.jsx(p,{children:"Reset"}),e.jsx(h,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const Ve=["Default","WithFieldError","WithFocus"];export{o as Default,n as WithFieldError,m as WithFocus,Ve as __namedExportsOrder,Ue as default};
