import{j as r,r as C}from"./iframe-C7sy8eLt.js";import{b as p,u as a,F as c,t as j}from"./Form-CEjV-kW2.js";import{R as h,S as x}from"./ResetButton-5Orn1GpQ.js";import{B as l}from"./Button-BZw3q7YG.js";import{S as b,s as u}from"./Section-B_6olPV1.js";import{A as B}from"./ActionGroup-Bou60yfQ.js";import{T as i}from"./Text-CNjgj0Nh.js";import{w as m,F as E}from"./Modal-CgkmliK_.js";import{C as d}from"./Content--Il2Vbk0.js";import"./index-nuYtCEEu.js";import"./dynamic-xNYmGRJM.js";import"./flowComponent-DIjd7Mwu.js";import"./index-Cpqj0oV0.js";import"./clsx-B-dksMZM.js";import"./index-CQGWyvrR.js";import"./useLocalizedStringFormatter-CTGu5obF.js";import"./context-CzQbumPb.js";import"./browser-BbONOrP3.js";import"./utils-ClB0n4MX.js";import"./IconWarning-BlJBP8EW.js";import"./LoadingSpinner-DOZFO_5L.js";import"./Button-Dbk_q6kB.js";import"./ProgressBar-DVj1Bza0.js";import"./Hidden-BiwDbxQo.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-Ah8T3Rlp.js";import"./useFocusable-BdiuUyMg.js";import"./context-cT4ej6gr.js";import"./RSPContexts-BXBNaV8B.js";import"./Collection-Bs_bKP_m.js";import"./CollectionBuilder--gmJ_NYC.js";import"./SelectionIndicator-BYKIsOg-.js";import"./Separator-BY5kq_RL.js";import"./useStatic-C3MBsJUa.js";import"./EmulatedBoldText-D386pHKZ.js";import"./FileCardList-BcoXYZaJ.js";import"./Avatar-pqiTjDaw.js";import"./AlertIcon-pdEEQLjK.js";import"./Image-BzosvY75.js";import"./Link-CYOMmfe5.js";import"./ControlledNotification-1haiwG2D.js";import"./Flex-Cery0S_5.js";import"./Accordion-CYXfOEtJ.js";import"./Alert-CuOVoIP4.js";import"./AlertBadge-DbgGv4eB.js";import"./Align-BlvYLRO8.js";import"./AvatarStack-CXX7ZouY.js";import"./BigNumber-D9-VIDaq.js";import"./Breadcrumb-B3K0GN86.js";import"./Heading-k3TZmz5u.js";import"./Legend-D0oOrj9r.js";import"./Color-Ds7_816d.js";import"./TableFooterRow-yox3njQ3.js";import"./SkeletonText-oFV3v-ow.js";import"./Label-rfHe5hPU.js";import"./CounterBadge-sYYq6djQ.js";import"./DonutChart-Bw97G3qW.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DvMkVg-s.js";import"./Header-DwdbIsc5.js";import"./Initials-nwj7pVwk.js";import"./InlineCode-fcdnehc6.js";import"./LayoutCard-YIuI0q1W.js";import"./Separator-CnXIIkpp.js";import"./MessageSeparator-BAFFdBEb.js";import"./NavigationGroup-MvGeIrOF.js";import"./Notification-BKYjv64k.js";import"./NotificationProvider-NTC8P3ww.js";import"./ProgressBar-gRP8sWKC.js";import"./Rating-BnzoQ1_w.js";import"./Skeleton-D46xLN5H.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,T=S("submit"),Lr={title:"Integrations/React Hook Form/CheckboxButton",component:p,render:()=>{const t=async F=>{await u(1500),T(F)},o=a({defaultValues:{acceptTerms:!1}}),f=j();return r.jsx(c,{form:o,onSubmit:t,children:r.jsxs(b,{children:[r.jsx(f,{name:"acceptTerms",children:r.jsxs(m,{children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"})]})}),r.jsxs(B,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},e={},n={render:t=>{const o=a();return C.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"})]})}),r.jsxs(m,{...t,isInvalid:!0,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:t=>{const o=a();return r.jsxs(c,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
