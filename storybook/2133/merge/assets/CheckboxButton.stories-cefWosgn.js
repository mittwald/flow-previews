import{j as r,r as C}from"./iframe-C60aMdie.js";import{c as p,u as a,F as c,t as j}from"./Form-B7ahjlLL.js";import{R as h,S as x}from"./ResetButton-1riTIdIi.js";import{B as l}from"./Button-jX--b59C.js";import{S as B,s as u}from"./Section-BTXSJ-5X.js";import{A as b}from"./ActionGroup-pA_bsRMT.js";import{T as i}from"./Text-SUPQTMUT.js";import{w as m,F as E}from"./Modal-BRLjWmcI.js";import{C as d}from"./Content-CEAhgMHe.js";import"./index-nuYtCEEu.js";import"./dynamic-CVq1BkmJ.js";import"./flowComponent-jCG2SJhp.js";import"./index-my9L9zM2.js";import"./clsx-B-dksMZM.js";import"./index-CLR1PkMI.js";import"./useLocalizedStringFormatter-CwhdRj3j.js";import"./context-CbOMBxRf.js";import"./browser-CNA-G9XW.js";import"./utils-BQFwVYY5.js";import"./IconWarning-B5fkZC-l.js";import"./LoadingSpinner-EerxDvmb.js";import"./Button-CvbHAn2i.js";import"./ProgressBar-B_mDm1JC.js";import"./Hidden-BZIUhw-w.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-DC3IjPh5.js";import"./useFocusable-Dew49z7P.js";import"./context-DSrUG3BE.js";import"./RSPContexts-DTGtZjZs.js";import"./Collection-BnGKbvLc.js";import"./CollectionBuilder-CwoEUOyQ.js";import"./SelectionIndicator-DueQdBHH.js";import"./Separator-y5zzyFFC.js";import"./useStatic-vNm-dgAB.js";import"./getActionGroupSlot-CdLyQOZc.js";import"./EmulatedBoldText-gDNBGAzw.js";import"./FileCardList-CCCPEiGj.js";import"./Avatar-B7kisHtJ.js";import"./AlertIcon-C7zTMkoz.js";import"./Image-CXRwncHw.js";import"./Link-lNOdoot_.js";import"./ControlledNotification-DflLvVYg.js";import"./LayoutCard-BHGne7SD.js";import"./Accordion-CKOAUBtf.js";import"./Alert-BJKw0QeS.js";import"./AlertBadge-CnHLq6IR.js";import"./Align-BpStHQnP.js";import"./AvatarStack-TfH6cSvv.js";import"./BigNumber-CCd4dY5q.js";import"./Breadcrumb-DsZIUq31.js";import"./Heading-DAaBZvd2.js";import"./Legend-C-QoQfEn.js";import"./Color-DYvyagNb.js";import"./TableFooterRow-Byf_2RJW.js";import"./SkeletonText-DqQ9EdbR.js";import"./Label-CzVOnNLd.js";import"./CounterBadge-BSi8dS51.js";import"./DonutChart-DE-zhDub.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-BTGMNUbe.js";import"./Header-CACiotaV.js";import"./Initials-CCakY2tg.js";import"./InlineCode-Cct-b4qD.js";import"./Separator-BSnGWgyT.js";import"./MessageSeparator-BdlWKUzt.js";import"./NavigationGroup-Bvrr1zmO.js";import"./Notification-CjMVwQai.js";import"./NotificationProvider-xKOj-JZj.js";import"./ProgressBar-BQfUYYSR.js";import"./Rating-CqYV9FLO.js";import"./Skeleton-CYpMvI04.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,T=S("submit"),Lr={title:"Integrations/React Hook Form/CheckboxButton",component:p,render:()=>{const t=async F=>{await u(1500),T(F)},o=a({defaultValues:{acceptTerms:!1}}),f=j();return r.jsx(c,{form:o,onSubmit:t,children:r.jsxs(B,{children:[r.jsx(f,{name:"acceptTerms",children:r.jsxs(m,{children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"})]})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},e={},n={render:t=>{const o=a();return C.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"})]})}),r.jsxs(m,{...t,isInvalid:!0,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:t=>{const o=a();return r.jsxs(c,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Mr=["Default","WithFieldError","WithFocus"];export{e as Default,n as WithFieldError,s as WithFocus,Mr as __namedExportsOrder,Lr as default};
