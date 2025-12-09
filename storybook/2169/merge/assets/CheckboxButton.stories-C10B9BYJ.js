import{j as r,r as C}from"./iframe-D29QVi29.js";import{b as d,u as a,F as c,t as j}from"./Form-NpVZHmv0.js";import{R as h,S as x}from"./ResetButton-4cumsBRi.js";import{B as l}from"./Button-BqO8ZFSe.js";import{S as b,s as u}from"./Section-N6-W-jGX.js";import{A as B}from"./ActionGroup-DBGYrkNa.js";import{T as s}from"./Text-BTGWwOlA.js";import{t as m,g as E}from"./TimeField-lp3G4cvL.js";import{C as p}from"./Content-4wsi0omc.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BIIctUHv.js";import"./PropsContextProvider-Di3M49gZ.js";import"./mergeRefs-Dxk1BzaE.js";import"./index-CR8Graxx.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-Bqmt488r.js";import"./context-qGV7OOPv.js";import"./browser-CsgOcZeL.js";import"./utils-V6v5WZV5.js";import"./IconWarning-qRr2EWc4.js";import"./LoadingSpinner-BK6n1zCV.js";import"./Button-x1GyynEX.js";import"./ProgressBar-1j73270Z.js";import"./Hidden-DYWDaDdl.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-BTna3mEs.js";import"./useFocusable-DTRRpH6w.js";import"./context-i3-N7LSR.js";import"./RSPContexts-7wLun1z_.js";import"./Collection-BnP1T9jt.js";import"./CollectionBuilder-DjTeQogG.js";import"./SelectionIndicator-T7jZrYkx.js";import"./Separator-CwRYG8QD.js";import"./useStatic-lipZmjhB.js";import"./EmulatedBoldText-C5bjRzZR.js";import"./Accordion-pcyhtlWY.js";import"./Alert-ktnaCpLp.js";import"./AlertIcon-kk-UzcPM.js";import"./AlertBadge-BD8zfIUZ.js";import"./Align-BtSVJIfv.js";import"./Popover-0dSAyS70.js";import"./OverlayTrigger-BRRbGelm.js";import"./TableFooterRow-CA8NF4Dq.js";import"./SkeletonText-DmNXdtlf.js";import"./Avatar-DdRZEOpi.js";import"./AvatarStack-ByHEeQa7.js";import"./Badge-CVEppqDk.js";import"./BigNumber-Bg1ofazi.js";import"./Breadcrumb-BF3l43g2.js";import"./Link-BjYhTK1P.js";import"./Heading-DViBSNIF.js";import"./Legend-9054_P7x.js";import"./FileCardList-o4UnmRGi.js";import"./Image-BxoMCQ1N.js";import"./Color-B_L_jSYT.js";import"./Label-7gHNx5q_.js";import"./ContextualHelpTrigger-BZZdrkgN.js";import"./CounterBadge-B6vj9Dqf.js";import"./DonutChart-48XA97RY.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-CFBYRPqa.js";import"./Header-5t7o3Hne.js";import"./Initials-C20rNA0F.js";import"./InlineCode-CkOTYzGC.js";import"./PopoverTrigger-lEvm5luT.js";import"./Separator-CUu_rnx_.js";import"./Message-CK6j6Y0e.js";import"./MessageSeparator-ZDTmypgR.js";import"./NavigationGroup-DpBlg96L.js";import"./Notification-CY5CezJs.js";import"./NotificationProvider-DYLCryBZ.js";import"./ProgressBar-DePOjU9y.js";import"./Rating-BloKNl8U.js";import"./Skeleton-CpVZIb00.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,T=S("submit"),Ur={title:"Integrations/React Hook Form/CheckboxButton",component:d,render:()=>{const t=async F=>{await u(1500),T(F)},o=a({defaultValues:{acceptTerms:!1}}),f=j();return r.jsx(c,{form:o,onSubmit:t,children:r.jsxs(b,{children:[r.jsx(f,{name:"acceptTerms",children:r.jsxs(m,{children:[r.jsx(s,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"})]})}),r.jsxs(B,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},e={},n={render:t=>{const o=a();return C.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(d,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(s,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"})]})}),r.jsxs(m,{...t,isInvalid:!0,children:[r.jsx(s,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:t=>{const o=a();return r.jsxs(c,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(d,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(s,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
