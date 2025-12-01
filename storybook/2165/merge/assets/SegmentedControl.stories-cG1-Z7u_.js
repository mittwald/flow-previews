import{j as e,r as g}from"./iframe-B7t5ja2b.js";import{b as a,u as l,F as c,t as j}from"./Form-C3pD7NJq.js";import{L as i}from"./Label-Db92ClKs.js";import{R as p,S as h}from"./ResetButton-Dw3e6HTx.js";import{B as d}from"./Button-BoOZwgfJ.js";import{S as b,s as u}from"./Section-oj7pNCYW.js";import{A as F}from"./ActionGroup-X0GeQX8f.js";import{ao as s,ap as r,g as v}from"./TimeField-DU2gwGxd.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DFqFR_25.js";import"./PropsContextProvider-DYQFvX9W.js";import"./mergeRefs-CZ0PXAOw.js";import"./index-0JV4jXfB.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-BbtlMh8_.js";import"./context-DT7PsWv1.js";import"./browser-Dz7UytJe.js";import"./utils-DDfw_94E.js";import"./ProgressBar-CHM1Xifb.js";import"./Hidden-BQUVCBE1.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-DPxPg2Ca.js";import"./Text-CDnJtWF_.js";import"./EmulatedBoldText-56hmy21w.js";import"./LoadingSpinner-CmbUgNIV.js";import"./Button-B-5trTj2.js";import"./useFocusRing-6FEqbhUJ.js";import"./useFocusable-CX5magUq.js";import"./context-XJw--O2B.js";import"./RSPContexts-BRH8-qft.js";import"./Collection-DAazmHys.js";import"./CollectionBuilder-CJZxBA1k.js";import"./SelectionIndicator-BZI_ZwZN.js";import"./Separator-BYhTCqx2.js";import"./useStatic-BJbQzT7g.js";import"./Accordion-CTUgpZ-B.js";import"./Alert-BcLBdkq5.js";import"./AlertIcon-Ccz2YQls.js";import"./AlertBadge-DzfN4yVX.js";import"./Align-CqoAJI6M.js";import"./Popover-BzzsvlUu.js";import"./OverlayTrigger-CQXiz3lB.js";import"./TableFooterRow-BlQ2sKAu.js";import"./SkeletonText-EnN-tyvd.js";import"./Avatar-BoT--Swq.js";import"./AvatarStack-D7dF8Abq.js";import"./Badge-BODqGCzs.js";import"./BigNumber-CaOlSiXS.js";import"./Breadcrumb-kRVQ0P47.js";import"./Link-Cz7JnS5t.js";import"./Heading-DEtNPCJN.js";import"./Legend-Cg9gjTEr.js";import"./FileCardList-CvtUHugH.js";import"./Image-C1Z_Jrqw.js";import"./Color-QRfHlKIC.js";import"./Content-B7myGA-g.js";import"./ContextualHelpTrigger-DvoCzQUP.js";import"./CounterBadge-i2riKAFy.js";import"./DonutChart-B74BzGpv.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-_D41FmY-.js";import"./Header-DRQSlscy.js";import"./Initials-BLqXYT9A.js";import"./InlineCode-DpgdCcoV.js";import"./PopoverTrigger-BZs4Q1Hp.js";import"./Separator-Yorp4CJm.js";import"./Message-DM93Jn4g.js";import"./MessageSeparator--4DDPHgg.js";import"./NavigationGroup-k0vE3zib.js";import"./Notification-DFIYUGUC.js";import"./NotificationProvider-BYTR-0ZM.js";import"./ProgressBar-BO_vS1l4.js";import"./Rating-CikA--0V.js";import"./Skeleton-CRxBQiHe.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,A=E("submit"),Ue={title:"Integrations/React Hook Form/SegmentedControl",component:a,render:()=>{const t=async x=>{await u(5e3),A(x)},S=l({defaultValues:{user:""}}),f=j();return e.jsx(c,{form:S,onSubmit:t,children:e.jsxs(b,{children:[e.jsx(f,{name:"user",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsxs(F,{children:[e.jsx(p,{children:"Reset"}),e.jsx(h,{children:"Submit"})]})]})})}},o={},n={render:()=>{const t=l();return g.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(c,{form:t,onSubmit:async()=>await u(2e3),children:[e.jsx(a,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsxs(s,{isInvalid:!0,children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(v,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const t=l();return e.jsxs(c,{form:t,onSubmit:async()=>await u(2e3),children:[e.jsx(a,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(d,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(d,{onPress:()=>t.setFocus("field"),children:"focus through form"}),e.jsx(p,{children:"Reset"}),e.jsx(h,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
