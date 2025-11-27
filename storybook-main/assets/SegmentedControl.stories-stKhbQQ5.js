import{j as e,r as g}from"./iframe-B_xU1nn7.js";import{b as a,u as l,F as c,t as j}from"./Form-DAeUcz-J.js";import{L as i}from"./Label-z6gInSF0.js";import{R as p,S as h}from"./ResetButton-BujJeb6f.js";import{B as d}from"./Button-CJjTOiYK.js";import{S as b,s as u}from"./Section-aN2a1IPE.js";import{A as F}from"./ActionGroup-BIwOZff1.js";import{ao as s,ap as r,g as v}from"./TimeField-DAIEB6Mx.js";import"./index-nuYtCEEu.js";import"./dynamic-DkcCZ1Pm.js";import"./PropsContextProvider-Cqc_GEqv.js";import"./mergeRefs-DDgKR_H-.js";import"./index-BJJzNH44.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-BxIEt52a.js";import"./context-DGbiAMEx.js";import"./browser-B5ILUykA.js";import"./utils-DWRw1wg7.js";import"./ProgressBar-1v-zrZjX.js";import"./Hidden-AstmD5FI.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-BbWnQxtz.js";import"./Text-IdcKzQUN.js";import"./EmulatedBoldText-BzzsilYU.js";import"./LoadingSpinner-D6qMiqks.js";import"./Button-C_B3ah-f.js";import"./useFocusRing-B-eR60lx.js";import"./useFocusable-Ddd5SUsS.js";import"./context-CNJB9XcB.js";import"./RSPContexts-CkMxE85k.js";import"./Collection-SdZ6Sup7.js";import"./CollectionBuilder-CL7Y9BKh.js";import"./SelectionIndicator-DZ8T-aZ-.js";import"./Separator-D6B_DVDR.js";import"./useStatic-DEsZhXHA.js";import"./Accordion-B-nnSuLg.js";import"./Alert-XE653P4e.js";import"./AlertIcon-DBKF5K6s.js";import"./AlertBadge-DBA4NYlx.js";import"./Align-CR6J15sP.js";import"./Popover-f3I7stco.js";import"./OverlayTrigger-DCVkiacf.js";import"./TableFooterRow-C5siyAmN.js";import"./SkeletonText-Cetdbyan.js";import"./Avatar-BzK22LxN.js";import"./AvatarStack-BnAvP6O1.js";import"./Badge-Tnmd4leD.js";import"./BigNumber-D-zAlzRm.js";import"./Breadcrumb-C6H4OLtJ.js";import"./Link-hOwnT9DM.js";import"./Heading-B_4jd62B.js";import"./Legend-Kau7Ns-4.js";import"./FileCardList-Bbwcsc6X.js";import"./Image-DAesSSML.js";import"./Color-CdDRB0UO.js";import"./Content-BAHraf_V.js";import"./ContextualHelpTrigger-CYt3J7rd.js";import"./CounterBadge-CSSR6Q3s.js";import"./DonutChart-YSL2XDiM.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-D98EXX3l.js";import"./Header-CnyOwhZl.js";import"./Initials-6ZzTyiuj.js";import"./InlineCode-aXE1rdVe.js";import"./PopoverTrigger-DGqbki2P.js";import"./Separator--zbsA2fy.js";import"./Message-DSf1Tyid.js";import"./MessageSeparator-C5oRnvo_.js";import"./NavigationGroup-DpAuqwQ9.js";import"./Notification-CbEe_kr1.js";import"./NotificationProvider-B2l9Eoa8.js";import"./ProgressBar-CFs3xVsw.js";import"./Rating-hR635hxg.js";import"./Skeleton-DsuDYoQm.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,A=E("submit"),Ue={title:"Integrations/React Hook Form/SegmentedControl",component:a,render:()=>{const t=async x=>{await u(5e3),A(x)},S=l({defaultValues:{user:""}}),f=j();return e.jsx(c,{form:S,onSubmit:t,children:e.jsxs(b,{children:[e.jsx(f,{name:"user",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsxs(F,{children:[e.jsx(p,{children:"Reset"}),e.jsx(h,{children:"Submit"})]})]})})}},o={},n={render:()=>{const t=l();return g.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(c,{form:t,onSubmit:async()=>await u(2e3),children:[e.jsx(a,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsxs(s,{isInvalid:!0,children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(v,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const t=l();return e.jsxs(c,{form:t,onSubmit:async()=>await u(2e3),children:[e.jsx(a,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(d,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(d,{onPress:()=>t.setFocus("field"),children:"focus through form"}),e.jsx(p,{children:"Reset"}),e.jsx(h,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
