import{j as e,r as g}from"./iframe-BDeBfZSP.js";import{b as a,u as l,F as c,t as j}from"./Form-D-Maj7Xx.js";import{L as i}from"./Label-B1LspQ1T.js";import{R as p,S as h}from"./ResetButton-CS1V5Fjr.js";import{B as d}from"./Button-Dbhe5AA0.js";import{S as b,s as u}from"./Section-D09FbpBR.js";import{A as F}from"./ActionGroup-BjwLyGgZ.js";import{aq as s,ar as r,g as v}from"./TimeField-Ne-c5KEy.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BIVuw2Q_.js";import"./PropsContextProvider-CInYH9Sb.js";import"./mergeRefs-Dw41Nq7Z.js";import"./index-CAU0MqbG.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-QrEcyOeW.js";import"./context-CmX5Cpay.js";import"./browser--C_mCO56.js";import"./utils-Byz_563U.js";import"./ProgressBar-W0aWvyTc.js";import"./Hidden-D2v2aeTK.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-CWBVghBS.js";import"./Text-DwrK8QpO.js";import"./EmulatedBoldText-3F_0W9mf.js";import"./LoadingSpinner-BWJul6BV.js";import"./Button-Cfa7dut0.js";import"./useFocusRing-508WtmVR.js";import"./useFocusable-DTnDWSdy.js";import"./context-DWFXzaDB.js";import"./RSPContexts-BBQghKHL.js";import"./Collection-l4IMJ13J.js";import"./CollectionBuilder-CCh6UYnS.js";import"./SelectionIndicator-uDzrcrA1.js";import"./Separator-mHu8Ln7W.js";import"./useStatic-CE8Y1Vmb.js";import"./Accordion-CKUe20wM.js";import"./Alert-CPr2bDJb.js";import"./AlertIcon-CVet0SZ9.js";import"./AlertBadge-rZGJwZqq.js";import"./Align-Bqyqg49a.js";import"./Popover-DNzPOg2i.js";import"./OverlayTrigger-C0iwpCUS.js";import"./TableFooterRow-2U0_8Mem.js";import"./SkeletonText-BtXDjmAi.js";import"./Avatar-D2htOkNN.js";import"./AvatarStack-1PEAciH2.js";import"./Badge-KSMEjVCc.js";import"./BigNumber-BBSlAdO3.js";import"./Breadcrumb-B8GN1fPd.js";import"./Link-Bw9pb0v5.js";import"./Heading-iyX9InFB.js";import"./Legend-BNJwDcp9.js";import"./FileCardList-BChVNWmo.js";import"./Image-3Q6tO5T-.js";import"./Color-C5PdvckB.js";import"./Content-BA1XxLMk.js";import"./ContextualHelpTrigger-BB5lI167.js";import"./CounterBadge-ClD-eDBX.js";import"./DonutChart-irBs7pBN.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-JTtbrcXh.js";import"./Header-CGMIJvRh.js";import"./Initials-CKWxINwR.js";import"./InlineCode-D_o1vB8f.js";import"./PopoverTrigger-GXKodTVP.js";import"./Separator-B12pwKUV.js";import"./Message-Ct2DG7ID.js";import"./MessageSeparator-xtwtWMZH.js";import"./NavigationGroup-D4eFLegf.js";import"./Notification-lKPeWo9E.js";import"./NotificationProvider-sogPUx6w.js";import"./ProgressBar-CSjgGiiD.js";import"./Rating-FVo5ZswU.js";import"./Skeleton-CCjm6q3C.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,A=E("submit"),Ue={title:"Integrations/React Hook Form/SegmentedControl",component:a,render:()=>{const t=async x=>{await u(5e3),A(x)},S=l({defaultValues:{user:""}}),f=j();return e.jsx(c,{form:S,onSubmit:t,children:e.jsxs(b,{children:[e.jsx(f,{name:"user",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsxs(F,{children:[e.jsx(p,{children:"Reset"}),e.jsx(h,{children:"Submit"})]})]})})}},o={},n={render:()=>{const t=l();return g.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(c,{form:t,onSubmit:async()=>await u(2e3),children:[e.jsx(a,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsxs(s,{isInvalid:!0,children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(v,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const t=l();return e.jsxs(c,{form:t,onSubmit:async()=>await u(2e3),children:[e.jsx(a,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(d,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(d,{onPress:()=>t.setFocus("field"),children:"focus through form"}),e.jsx(p,{children:"Reset"}),e.jsx(h,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
