import{j as r,r as C}from"./iframe-BfrlpeCk.js";import{b as d,u as a,F as c,t as j}from"./Form-25bQeL9s.js";import{R as h,S as x}from"./ResetButton-B7MAmNJ4.js";import{B as l}from"./Button-E46WDd4_.js";import{S as b,s as u}from"./Section-Bb4j7C6a.js";import{A as B}from"./ActionGroup-dgAOdJZ4.js";import{T as s}from"./Text-DdebjF6X.js";import{t as m,g as E}from"./TimeField-BhoCwCxW.js";import{C as p}from"./Content-BsqW8diX.js";import"./index-nuYtCEEu.js";import"./dynamic-BUKqVZ1H.js";import"./PropsContextProvider-CPtIc9N-.js";import"./mergeRefs-B-vbhGNR.js";import"./index-r6rvd85P.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-C5Ltlkui.js";import"./context-jvNFAhRM.js";import"./browser-C0N36_KR.js";import"./utils-CZEyphdB.js";import"./IconWarning-DOKEq-WK.js";import"./LoadingSpinner-BwJAEpX5.js";import"./Button-Cjbcx8Zu.js";import"./ProgressBar-DuqIuA6U.js";import"./Hidden-C6jP4SMJ.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-CWlqAuzY.js";import"./useFocusable-DfB_R8F9.js";import"./context-DUvcrLtv.js";import"./RSPContexts-Bw86vYvh.js";import"./Collection-BR-xLlJG.js";import"./CollectionBuilder-CmkBKKl-.js";import"./SelectionIndicator-jSUkmTlU.js";import"./Separator-D1Ouw6Ca.js";import"./useStatic-Bz7IWGfO.js";import"./EmulatedBoldText-eBeMz5kz.js";import"./Accordion-BFQx9JCl.js";import"./Alert-CRvY5VYZ.js";import"./AlertIcon-CfJrkVpH.js";import"./AlertBadge-Dxv4P94g.js";import"./Align-YsnAwz9T.js";import"./Popover-C3qPsHTW.js";import"./OverlayTrigger-DKKj1P2l.js";import"./TableFooterRow-DwOitp-g.js";import"./SkeletonText-B-NyxpC1.js";import"./Avatar-B8_C9MNe.js";import"./AvatarStack-DWIfq5vn.js";import"./Badge-MeQ_8EOt.js";import"./BigNumber-BcZHvOWT.js";import"./Breadcrumb-D1tMkTMn.js";import"./Link-h05bzThL.js";import"./Heading-BzrDriRC.js";import"./Legend-CKP3pUkG.js";import"./FileCardList-BHWA4e_z.js";import"./Image-DmrVA4vT.js";import"./Color-CWKr_WHZ.js";import"./Label-wUl7laod.js";import"./ContextualHelpTrigger-DO42vOyq.js";import"./CounterBadge-kCoMDryj.js";import"./DonutChart-Ddn2-NTo.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DBVcyvdC.js";import"./Header-3cW2glxq.js";import"./Initials-C8m56NNk.js";import"./InlineCode-C2U9lI57.js";import"./PopoverTrigger-BauBuR_D.js";import"./Separator-DPowy5kr.js";import"./Message-Cb-yd-qn.js";import"./MessageSeparator-tn0XlbcW.js";import"./NavigationGroup-Bdh44MUn.js";import"./Notification-C8AOzGHV.js";import"./NotificationProvider-Bv1lRKSn.js";import"./ProgressBar-BrBPhSDZ.js";import"./Rating-DroWCOnR.js";import"./Skeleton-BV_rDckR.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,T=S("submit"),Ur={title:"Integrations/React Hook Form/CheckboxButton",component:d,render:()=>{const t=async F=>{await u(1500),T(F)},o=a({defaultValues:{acceptTerms:!1}}),f=j();return r.jsx(c,{form:o,onSubmit:t,children:r.jsxs(b,{children:[r.jsx(f,{name:"acceptTerms",children:r.jsxs(m,{children:[r.jsx(s,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"})]})}),r.jsxs(B,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},e={},n={render:t=>{const o=a();return C.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(d,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(s,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"})]})}),r.jsxs(m,{...t,isInvalid:!0,children:[r.jsx(s,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:t=>{const o=a();return r.jsxs(c,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(d,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(s,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
          <CheckboxButton {...props}>
            <Text>Terms and Conditions</Text>
            <Content>Consent to terms and conditions</Content>
          </CheckboxButton>
        </Field>
        <CheckboxButton {...props} isInvalid>
          <Text>Terms and Conditions</Text>
          <Content>Consent to terms and conditions</Content>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </CheckboxButton>
      </Form>;
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <CheckboxButton {...props}>
            <Text>Terms and Conditions</Text>
            <Content>Consent to terms and conditions</Content>
          </CheckboxButton>
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
}`,...i.parameters?.docs?.source}}};const Vr=["Default","WithFieldError","WithFocus"];export{e as Default,n as WithFieldError,i as WithFocus,Vr as __namedExportsOrder,Ur as default};
