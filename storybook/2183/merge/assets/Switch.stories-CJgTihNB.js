import{j as r,r as F}from"./iframe-b3Ga2wpf.js";import{b as n,u as p,F as a,t as S}from"./Form-DtrXwySn.js";import{R as u,S as l}from"./ResetButton-Db35grC4.js";import{B as d}from"./Button-B9AKUFf2.js";import{S as x,s as c}from"./Section-DpTqM0_J.js";import{A as E}from"./ActionGroup-C8Oe2XUd.js";import{S as s,g as j}from"./TimeField-CtNImo6o.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-D7f7XAFP.js";import"./PropsContextProvider-D77bvxtu.js";import"./mergeRefs-Bi5mFM62.js";import"./index-EgQfkxQH.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-Dw2puoxj.js";import"./context-D39ROL5s.js";import"./browser-C0SY9BaM.js";import"./utils-DpwAoq2B.js";import"./IconWarning-C84U4k_5.js";import"./remote-DrytLFaS.js";import"./Text-DIbSGP69.js";import"./EmulatedBoldText-BWSYK2_K.js";import"./LoadingSpinner-C8TYwtnu.js";import"./Button-Dn9RG0lS.js";import"./ProgressBar-CqHSuyvS.js";import"./Hidden-D7Ffx1fO.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-DyTaHyNc.js";import"./useFocusable-CNSeA0E2.js";import"./context-DvKCdNAh.js";import"./RSPContexts-CzK-yBpk.js";import"./Collection-staaIP_8.js";import"./CollectionBuilder-DkVC1udd.js";import"./SelectionIndicator-H6x9m8Fd.js";import"./Separator-CC7MupLF.js";import"./useStatic-DjEoLORA.js";import"./Accordion-DJRFgKSV.js";import"./Alert-BFE5O_K9.js";import"./AlertIcon-BoIjIGQk.js";import"./AlertBadge-Dc59NCSn.js";import"./Align-DkScujGZ.js";import"./Popover-C3t-XhdJ.js";import"./OverlayTrigger-9eU9gIuc.js";import"./TableFooterRow-CtVIdWAI.js";import"./SkeletonText-6MyMR-o8.js";import"./Avatar-DRdoqq5g.js";import"./AvatarStack-Bm59_WJp.js";import"./Badge-CmiaY70P.js";import"./BigNumber-jt1NPm7F.js";import"./Breadcrumb-BZ7G-TEM.js";import"./Link-fVLJAih1.js";import"./Heading-BGN7eCNA.js";import"./Legend-BeSc5K-M.js";import"./FileCardList-Cu-7JGuA.js";import"./Image-pfb7qnpC.js";import"./Color-q6pWurkX.js";import"./Content-CZqLB91a.js";import"./Label-BM4rj9TZ.js";import"./ContextualHelpTrigger-B4h5NCtb.js";import"./CounterBadge-Dnci99L1.js";import"./DonutChart-D0dIo1ZK.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-Dp1INIeU.js";import"./Header-HXXe6hHp.js";import"./Initials-BTQbHA9Y.js";import"./InlineCode-BynVVMmO.js";import"./PopoverTrigger-aR-yTA7m.js";import"./Separator-C1t0NjGv.js";import"./Message-CJlFlLd8.js";import"./MessageSeparator-Dfvdn_tJ.js";import"./NavigationGroup-gO8yiDJt.js";import"./Notification-Biyx_ImO.js";import"./NotificationProvider-CZZ8UITu.js";import"./ProgressBar-DU1jY53e.js";import"./Rating-C6_n-TNa.js";import"./Skeleton-DwbvfRV4.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,g=b("submit"),Nr={title:"Integrations/React Hook Form/Switch",component:n,render:()=>{const t=async h=>{await c(5e3),g(h)},o=p({defaultValues:{isEnabled:!1}}),f=S();return r.jsx(a,{form:o,onSubmit:t,children:r.jsxs(x,{children:[r.jsx(f,{name:"isEnabled",children:r.jsx(s,{children:"Text"})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},e={},i={render:t=>{const o=p();return F.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{...t,children:"Field1"})}),r.jsxs(s,{children:["Field2",r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:t=>{const o=p();return r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{...t,children:"Field"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Switch {...props}>Field1</Switch>
        </Field>
        <Switch>
          Field2
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </Switch>
      </Form>;
  }
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Switch {...props}>Field</Switch>
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
}`,...m.parameters?.docs?.source}}};const Ur=["Default","WithFieldError","WithFocus"];export{e as Default,i as WithFieldError,m as WithFocus,Ur as __namedExportsOrder,Nr as default};
