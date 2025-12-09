import{j as r,r as C}from"./iframe-GdgkclWs.js";import{b as d,u as a,F as c,t as j}from"./Form-CAPGQYFw.js";import{R as h,S as x}from"./ResetButton-CSKvvOZv.js";import{B as l}from"./Button-B0JEmBNK.js";import{S as b,s as u}from"./Section-VLscJ2rL.js";import{A as B}from"./ActionGroup-C82CNpK6.js";import{T as s}from"./Text-Cto25n51.js";import{t as m,g as E}from"./TimeField-CVigSgag.js";import{C as p}from"./Content-JCMb0S3J.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-PnYMfd4f.js";import"./PropsContextProvider-CVn6a-Br.js";import"./mergeRefs-CirupE_e.js";import"./index-BpewjHzz.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-BYse3rRW.js";import"./context-G4rNg2r5.js";import"./browser-CClwHdx_.js";import"./utils-DoU55v00.js";import"./IconWarning-CGOSGhfQ.js";import"./LoadingSpinner-ChMWC-CB.js";import"./Button-9ssRHwLo.js";import"./ProgressBar-BByvzxb3.js";import"./Hidden-DfAtz4Rp.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-FWhz3ffE.js";import"./useFocusable-CGBhab3M.js";import"./context-C_Ye8hEJ.js";import"./RSPContexts-Ih3Q_XqN.js";import"./Collection-DiuPOFRO.js";import"./CollectionBuilder-D0v6CoH5.js";import"./SelectionIndicator-CLOzYwLf.js";import"./Separator-DBBWSXz5.js";import"./useStatic-CV3hAC_1.js";import"./EmulatedBoldText-Ddlneh35.js";import"./Accordion-CIHbFerH.js";import"./Alert-Ghfdqzqq.js";import"./AlertIcon-BHK-Daud.js";import"./AlertBadge-B0j6vp5K.js";import"./Align-D7FVyJEv.js";import"./Popover-DCEEmw0P.js";import"./OverlayTrigger-FDfyad1h.js";import"./TableFooterRow-DkhcovOF.js";import"./SkeletonText-BC3QvNYs.js";import"./Avatar-BdEExudS.js";import"./AvatarStack-D83q2IaA.js";import"./Badge-CULYHS4O.js";import"./BigNumber-CQ1o5YVg.js";import"./Breadcrumb-Bmgceg6h.js";import"./Link-D6Y7USyN.js";import"./Heading-C8_gRcPp.js";import"./Legend-814CjWqc.js";import"./FileCardList-u01e7SGm.js";import"./Image-DvuZYehV.js";import"./Color-C5h7DqqR.js";import"./Label-ChEMpQPE.js";import"./ContextualHelpTrigger-xDG4yDFQ.js";import"./CounterBadge-gaV0X7ON.js";import"./DonutChart-DGD5BRbv.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-Dt1P96u5.js";import"./Header-Dg8MvpqU.js";import"./Initials-5h9DQSHl.js";import"./InlineCode-B9Q3OiFc.js";import"./PopoverTrigger-BDzk5u7s.js";import"./Separator-i6qBYsms.js";import"./Message-CeGAy6Zn.js";import"./MessageSeparator-CRScGEmn.js";import"./NavigationGroup-CdsshAOA.js";import"./Notification-B5P2NapB.js";import"./NotificationProvider-DTKoqy3M.js";import"./ProgressBar-8ZDZDqcE.js";import"./Rating-BSkiv03r.js";import"./Skeleton-CcRzeFAV.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,T=S("submit"),Ur={title:"Integrations/React Hook Form/CheckboxButton",component:d,render:()=>{const t=async F=>{await u(1500),T(F)},o=a({defaultValues:{acceptTerms:!1}}),f=j();return r.jsx(c,{form:o,onSubmit:t,children:r.jsxs(b,{children:[r.jsx(f,{name:"acceptTerms",children:r.jsxs(m,{children:[r.jsx(s,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"})]})}),r.jsxs(B,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},e={},n={render:t=>{const o=a();return C.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(d,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(s,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"})]})}),r.jsxs(m,{...t,isInvalid:!0,children:[r.jsx(s,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:t=>{const o=a();return r.jsxs(c,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(d,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(s,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
