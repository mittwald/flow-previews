import{j as e,r as g}from"./iframe-MIgL3t-o.js";import{b as a,u as l,F as c,t as j}from"./Form-xa0y_dIF.js";import{L as i}from"./Label-DND0p0GF.js";import{R as p,S as h}from"./ResetButton-Dar3knML.js";import{B as d}from"./Button-Bm-VICQC.js";import{S as b,s as u}from"./Section-DSxo8JPS.js";import{A as F}from"./ActionGroup-DbS5du-g.js";import{ao as s,ap as r,g as v}from"./TimeField-BFURGqwq.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-T1pzav9P.js";import"./PropsContextProvider-D08VhguK.js";import"./mergeRefs-DFlQ0eaD.js";import"./index-D5QMlcQF.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-D7iWn3FU.js";import"./context-BN8VYe9y.js";import"./browser-ZlggRhGh.js";import"./utils-DBPvjchL.js";import"./ProgressBar-B2x1EXTK.js";import"./Hidden-DewfgLfM.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-CaixpT4r.js";import"./Text-CBtQMAPT.js";import"./EmulatedBoldText-DS7oXEiE.js";import"./LoadingSpinner-B8Zs_K9s.js";import"./Button-BoUtMxCQ.js";import"./useFocusRing-qMh6fvoq.js";import"./useFocusable-LR8FLvJr.js";import"./context-BpnnESCC.js";import"./RSPContexts-ByAL28zK.js";import"./Collection--DnqN1NB.js";import"./CollectionBuilder-49chxnhy.js";import"./SelectionIndicator-BNvv8rtj.js";import"./Separator-BNhZRG5D.js";import"./useStatic-Drcz9tkt.js";import"./Accordion-7dsQrpkO.js";import"./Alert-DsqqMK6J.js";import"./AlertIcon-Cr2UlT4F.js";import"./AlertBadge-C2q-OhWS.js";import"./Align-Bpq8YyVH.js";import"./Popover-CB28VzMp.js";import"./OverlayTrigger-BTgo3ogI.js";import"./TableFooterRow-1wnszgLS.js";import"./SkeletonText-DSGRe1mp.js";import"./Avatar-COceV_It.js";import"./AvatarStack-B6vmc5su.js";import"./Badge-cRRWToon.js";import"./BigNumber-CK9gyGUq.js";import"./Breadcrumb-Z996jVAQ.js";import"./Link-e4nLwp4o.js";import"./Heading-BGfwvjE9.js";import"./Legend-BggJIFX2.js";import"./FileCardList-C-TQ3fUn.js";import"./Image-DAc7VsOT.js";import"./Color-_UsPKinm.js";import"./Content-6iLmORfW.js";import"./ContextualHelpTrigger-D-Yb9hBa.js";import"./CounterBadge-COZTsGXp.js";import"./DonutChart-DdGv6zP9.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DcofpUEQ.js";import"./Header-BMcQReSK.js";import"./Initials-Dgf_eP_2.js";import"./InlineCode-CpcRW1dM.js";import"./PopoverTrigger-bsw-s53Z.js";import"./Separator-B-iBVOSO.js";import"./Message-Chhe13yv.js";import"./MessageSeparator-C88ZuTHj.js";import"./NavigationGroup-tZPVhu6S.js";import"./Notification-Dr7sL_d0.js";import"./NotificationProvider-C92LmpC-.js";import"./ProgressBar-84Q58tlo.js";import"./Rating-1xjU0K14.js";import"./Skeleton-Bn9kW_6b.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,A=E("submit"),Ue={title:"Integrations/React Hook Form/SegmentedControl",component:a,render:()=>{const t=async x=>{await u(5e3),A(x)},S=l({defaultValues:{user:""}}),f=j();return e.jsx(c,{form:S,onSubmit:t,children:e.jsxs(b,{children:[e.jsx(f,{name:"user",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsxs(F,{children:[e.jsx(p,{children:"Reset"}),e.jsx(h,{children:"Submit"})]})]})})}},o={},n={render:()=>{const t=l();return g.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(c,{form:t,onSubmit:async()=>await u(2e3),children:[e.jsx(a,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsxs(s,{isInvalid:!0,children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(v,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const t=l();return e.jsxs(c,{form:t,onSubmit:async()=>await u(2e3),children:[e.jsx(a,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(d,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(d,{onPress:()=>t.setFocus("field"),children:"focus through form"}),e.jsx(p,{children:"Reset"}),e.jsx(h,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
