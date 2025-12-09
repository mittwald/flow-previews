import{j as r,r as x}from"./iframe-BIOR2-hs.js";import{b as p,u as c,F as a,t as F}from"./Form-DmAReG0K.js";import{R as l,S as h}from"./ResetButton-DZ7gY5XE.js";import{B as d}from"./Button-CfZ-AQyp.js";import{S as j,s as u}from"./Section-BqNRxlPT.js";import{A as b}from"./ActionGroup-CY4j-L1M.js";import{s as t,g as E}from"./TimeField-DsDqWsQ-.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BVxG6scv.js";import"./PropsContextProvider-RMvdN3RZ.js";import"./mergeRefs-U5WlywcK.js";import"./index-k9AOzptS.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-BKbYN9ME.js";import"./context-BLOg-x3I.js";import"./browser-D0ITs1ti.js";import"./utils-DsOUUUiG.js";import"./IconWarning-DZ71cvXF.js";import"./remote-CjhnXpnY.js";import"./Text-DusIDTsD.js";import"./EmulatedBoldText-Wg5Zh9Cq.js";import"./LoadingSpinner-CKTuHmBU.js";import"./Button-Vr3ctEdr.js";import"./ProgressBar-_rI0OtV6.js";import"./Hidden-CVR9fNcA.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-1hKsP8MW.js";import"./useFocusable-B_nx0oid.js";import"./context-CUEzUKrh.js";import"./RSPContexts-DcPCJIF5.js";import"./Collection-Cvuk07Q7.js";import"./CollectionBuilder-Dgt7X-YC.js";import"./SelectionIndicator-DG9tWISV.js";import"./Separator-DTwWIU6f.js";import"./useStatic-CRF1h1Jc.js";import"./Accordion-NoXfJmUE.js";import"./Alert-CoZzyuQ9.js";import"./AlertIcon-BvUo9Etu.js";import"./AlertBadge-DCY0z1jh.js";import"./Align-C8XIH-7n.js";import"./Popover-BGEckYFs.js";import"./OverlayTrigger-4gUv_Eql.js";import"./TableFooterRow-BUV2_OgU.js";import"./SkeletonText-DYOjw4oF.js";import"./Avatar-BUQx2CI1.js";import"./AvatarStack-Xz4hqYuD.js";import"./Badge-Cr-ClmAO.js";import"./BigNumber-L7ZWV3y6.js";import"./Breadcrumb-qAQdTaCx.js";import"./Link-DoJ4IPEN.js";import"./Heading-Cv__lUFC.js";import"./Legend-ZeqB-YKM.js";import"./FileCardList-C94A5o8Z.js";import"./Image-DwW9X8dg.js";import"./Color-CnqARC2o.js";import"./Content-BrpitEoE.js";import"./Label-BLkwK3Kt.js";import"./ContextualHelpTrigger-BXnzR8Ux.js";import"./CounterBadge-BfId8Yot.js";import"./DonutChart-C8wwiAZA.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-8GDMUcKQ.js";import"./Header-CRVpFWgA.js";import"./Initials-D4NqoMu-.js";import"./InlineCode-DaFFs495.js";import"./PopoverTrigger-BXV6g6Jr.js";import"./Separator-BAa6viOO.js";import"./Message-DKDXC3NB.js";import"./MessageSeparator-CGyHmQ4m.js";import"./NavigationGroup-D7bLGYP0.js";import"./Notification-D2xjz265.js";import"./NotificationProvider-XOHGZ29Q.js";import"./ProgressBar-B6DJTl7K.js";import"./Rating-UOf7auGu.js";import"./Skeleton-BNldNKri.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,g=S("submit"),Mr={title:"Integrations/React Hook Form/Checkbox",component:p,render:()=>{const o=async f=>{await u(1500),g(f)},e=c({defaultValues:{acceptTerms:!1,acceptTermsDefaultValue:!0,acceptTermsRequired:!1}}),n=F();return r.jsx(a,{form:e,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(n,{name:"acceptTerms",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsDefaultValue",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsRequired",rules:{required:!0},children:r.jsx(t,{children:"Accept terms"})}),r.jsxs(b,{children:[r.jsx(l,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})]})})}},i={},m={render:o=>{const e=c();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsxs(t,{isInvalid:!0,children:["Accept terms",r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:o=>{const e=c();return r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(l,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
          <Checkbox {...props}>Accept terms</Checkbox>
        </Field>
        <Checkbox isInvalid>
          Accept terms
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </Checkbox>
      </Form>;
  }
}`,...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Checkbox {...props}>Accept terms</Checkbox>
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
}`,...s.parameters?.docs?.source}}};const Nr=["Default","WithFieldError","WithFocus"];export{i as Default,m as WithFieldError,s as WithFocus,Nr as __namedExportsOrder,Mr as default};
