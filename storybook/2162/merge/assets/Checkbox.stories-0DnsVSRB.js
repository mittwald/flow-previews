import{j as r,r as x}from"./iframe-BfrlpeCk.js";import{b as p,u as c,F as a,t as F}from"./Form-25bQeL9s.js";import{R as l,S as h}from"./ResetButton-B7MAmNJ4.js";import{B as d}from"./Button-E46WDd4_.js";import{S as j,s as u}from"./Section-Bb4j7C6a.js";import{A as b}from"./ActionGroup-dgAOdJZ4.js";import{s as t,g as E}from"./TimeField-BhoCwCxW.js";import"./index-nuYtCEEu.js";import"./dynamic-BUKqVZ1H.js";import"./PropsContextProvider-CPtIc9N-.js";import"./mergeRefs-B-vbhGNR.js";import"./index-r6rvd85P.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-C5Ltlkui.js";import"./context-jvNFAhRM.js";import"./browser-C0N36_KR.js";import"./utils-CZEyphdB.js";import"./IconWarning-DOKEq-WK.js";import"./Text-DdebjF6X.js";import"./EmulatedBoldText-eBeMz5kz.js";import"./LoadingSpinner-BwJAEpX5.js";import"./Button-Cjbcx8Zu.js";import"./ProgressBar-DuqIuA6U.js";import"./Hidden-C6jP4SMJ.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-CWlqAuzY.js";import"./useFocusable-DfB_R8F9.js";import"./context-DUvcrLtv.js";import"./RSPContexts-Bw86vYvh.js";import"./Collection-BR-xLlJG.js";import"./CollectionBuilder-CmkBKKl-.js";import"./SelectionIndicator-jSUkmTlU.js";import"./Separator-D1Ouw6Ca.js";import"./useStatic-Bz7IWGfO.js";import"./Accordion-BFQx9JCl.js";import"./Alert-CRvY5VYZ.js";import"./AlertIcon-CfJrkVpH.js";import"./AlertBadge-Dxv4P94g.js";import"./Align-YsnAwz9T.js";import"./Popover-C3qPsHTW.js";import"./OverlayTrigger-DKKj1P2l.js";import"./TableFooterRow-DwOitp-g.js";import"./SkeletonText-B-NyxpC1.js";import"./Avatar-B8_C9MNe.js";import"./AvatarStack-DWIfq5vn.js";import"./Badge-MeQ_8EOt.js";import"./BigNumber-BcZHvOWT.js";import"./Breadcrumb-D1tMkTMn.js";import"./Link-h05bzThL.js";import"./Heading-BzrDriRC.js";import"./Legend-CKP3pUkG.js";import"./FileCardList-BHWA4e_z.js";import"./Image-DmrVA4vT.js";import"./Color-CWKr_WHZ.js";import"./Content-BsqW8diX.js";import"./Label-wUl7laod.js";import"./ContextualHelpTrigger-DO42vOyq.js";import"./CounterBadge-kCoMDryj.js";import"./DonutChart-Ddn2-NTo.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DBVcyvdC.js";import"./Header-3cW2glxq.js";import"./Initials-C8m56NNk.js";import"./InlineCode-C2U9lI57.js";import"./PopoverTrigger-BauBuR_D.js";import"./Separator-DPowy5kr.js";import"./Message-Cb-yd-qn.js";import"./MessageSeparator-tn0XlbcW.js";import"./NavigationGroup-Bdh44MUn.js";import"./Notification-C8AOzGHV.js";import"./NotificationProvider-Bv1lRKSn.js";import"./ProgressBar-BrBPhSDZ.js";import"./Rating-DroWCOnR.js";import"./Skeleton-BV_rDckR.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,g=S("submit"),Lr={title:"Integrations/React Hook Form/Checkbox",component:p,render:()=>{const o=async f=>{await u(1500),g(f)},e=c({defaultValues:{acceptTerms:!1,acceptTermsDefaultValue:!0,acceptTermsRequired:!1}}),n=F();return r.jsx(a,{form:e,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(n,{name:"acceptTerms",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsDefaultValue",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsRequired",rules:{required:!0},children:r.jsx(t,{children:"Accept terms"})}),r.jsxs(b,{children:[r.jsx(l,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})]})})}},i={},m={render:o=>{const e=c();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsxs(t,{isInvalid:!0,children:["Accept terms",r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:o=>{const e=c();return r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(l,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Mr=["Default","WithFieldError","WithFocus"];export{i as Default,m as WithFieldError,s as WithFocus,Mr as __namedExportsOrder,Lr as default};
