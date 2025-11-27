import{j as e,r as g}from"./iframe-CW_1kzn8.js";import{b as a,u as l,F as c,t as j}from"./Form-D25i7OyI.js";import{L as i}from"./Label-C6A80iGS.js";import{R as p,S as h}from"./ResetButton-BSjIWx2p.js";import{B as d}from"./Button-DG8ItREn.js";import{S as b,s as u}from"./Section-BtQd622a.js";import{A as F}from"./ActionGroup-CMigRbOL.js";import{ao as s,ap as r,g as v}from"./TimeField-O8dBCN92.js";import"./index-nuYtCEEu.js";import"./dynamic-CvIdWWig.js";import"./PropsContextProvider-BDCYw1pg.js";import"./mergeRefs-Y3najUVW.js";import"./index-Bd-98hnG.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-EKrbiiaf.js";import"./context-g9M5CTWm.js";import"./browser-DYjBW3Mh.js";import"./utils-DECz7q9i.js";import"./ProgressBar-BTbyCbiz.js";import"./Hidden-CnRTwBiV.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-CwkyBxVN.js";import"./Text-Bt12Aiuy.js";import"./EmulatedBoldText-CjYCMvu1.js";import"./LoadingSpinner-DDEfeVZt.js";import"./Button-CKDlZl9E.js";import"./useFocusRing-DZCmxJCl.js";import"./useFocusable-f0CtUOQy.js";import"./context-FK80ZNI-.js";import"./RSPContexts-jLoiaaIz.js";import"./Collection-FH8-xfMl.js";import"./CollectionBuilder-NWtLcMXl.js";import"./SelectionIndicator-CiCiu2c2.js";import"./Separator-DjsPzP3_.js";import"./useStatic-CyHKbDme.js";import"./Accordion-C2JQB3aN.js";import"./Alert-wmQE4eTZ.js";import"./AlertIcon-C9ZLFLyq.js";import"./AlertBadge-DK8CoaVP.js";import"./Align-BVXc73zR.js";import"./Popover-CZewF29V.js";import"./OverlayTrigger-DXi_dQZe.js";import"./TableFooterRow-Dz133oSH.js";import"./SkeletonText-bNjOl8Lj.js";import"./Avatar-nxK6ayEs.js";import"./AvatarStack-C5K3zfKN.js";import"./Badge-B4vhdI6d.js";import"./BigNumber-BCtOXUOq.js";import"./Breadcrumb-UN90IgbC.js";import"./Link-BjJvsD30.js";import"./Heading-BDPW60Tv.js";import"./Legend-Dv9medtK.js";import"./FileCardList-BzJWWuzT.js";import"./Image-B8909EtY.js";import"./Color-yZsfwNHB.js";import"./Content-NVky5ofe.js";import"./ContextualHelpTrigger-NzhCC0hh.js";import"./CounterBadge-DRnfRmyT.js";import"./DonutChart-DfWQ2yNh.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-D_-uwk5j.js";import"./Header-CIgs80Lw.js";import"./Initials-CtZJGVAE.js";import"./InlineCode-BUUGDwVl.js";import"./PopoverTrigger-C7J2NazX.js";import"./Separator-CSUhftqZ.js";import"./Message-gD0LEZWb.js";import"./MessageSeparator-f8F7ZaUG.js";import"./NavigationGroup-kj_r2PG6.js";import"./Notification-Fp2frcIZ.js";import"./NotificationProvider-Cm0Lnyko.js";import"./ProgressBar-CKvf8kaJ.js";import"./Rating-BH2oI4ZI.js";import"./Skeleton-BlS-zqmu.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,A=E("submit"),Ue={title:"Integrations/React Hook Form/SegmentedControl",component:a,render:()=>{const t=async x=>{await u(5e3),A(x)},S=l({defaultValues:{user:""}}),f=j();return e.jsx(c,{form:S,onSubmit:t,children:e.jsxs(b,{children:[e.jsx(f,{name:"user",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsxs(F,{children:[e.jsx(p,{children:"Reset"}),e.jsx(h,{children:"Submit"})]})]})})}},o={},n={render:()=>{const t=l();return g.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(c,{form:t,onSubmit:async()=>await u(2e3),children:[e.jsx(a,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsxs(s,{isInvalid:!0,children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(v,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const t=l();return e.jsxs(c,{form:t,onSubmit:async()=>await u(2e3),children:[e.jsx(a,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(d,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(d,{onPress:()=>t.setFocus("field"),children:"focus through form"}),e.jsx(p,{children:"Reset"}),e.jsx(h,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
