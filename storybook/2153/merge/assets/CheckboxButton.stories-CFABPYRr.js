import{j as r,r as C}from"./iframe-DGpdmZy6.js";import{b as p,u as a,F as c,t as j}from"./Form-D6ip5OeB.js";import{R as h,S as x}from"./ResetButton-C-ek5KZS.js";import{B as l}from"./Button--Vm3DJA2.js";import{S as b,s as u}from"./Section-OXIXjQEc.js";import{A as B}from"./ActionGroup-BO_R-HXV.js";import{T as i}from"./Text-BXzwFxO1.js";import{w as m,F as E}from"./Modal-k3eojm_4.js";import{C as d}from"./Content-DYEeGbNd.js";import"./index-nuYtCEEu.js";import"./dynamic-DNRDSutR.js";import"./flowComponent-BQEf5M_T.js";import"./index-De-tUa4b.js";import"./clsx-B-dksMZM.js";import"./index-CrYgLF30.js";import"./useLocalizedStringFormatter-Zkj79Hgs.js";import"./context-GZA4a4Iz.js";import"./browser-B8HytOQQ.js";import"./utils-CfRYmgOV.js";import"./IconWarning-D9ML-GA0.js";import"./LoadingSpinner-D-s3tm4d.js";import"./Button-CcaaVk2n.js";import"./ProgressBar-BRkbw9Mx.js";import"./Hidden-DBVn3F7o.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-B3OG5RkS.js";import"./useFocusable-CIlqLEIw.js";import"./context-BFV2yP4B.js";import"./RSPContexts-C3hd5u3G.js";import"./Collection-vhKnWwMf.js";import"./CollectionBuilder-B9NCAwqd.js";import"./SelectionIndicator-xePv5RSf.js";import"./Separator-F2jO3kT9.js";import"./useStatic-BZw01sJd.js";import"./EmulatedBoldText-CnA6n1pz.js";import"./FileCardList-CKzDrmKJ.js";import"./Avatar-DVvgb2Xm.js";import"./AlertIcon-Bwvtphoy.js";import"./Image-Cn_QWKsO.js";import"./Link-CguFfPfy.js";import"./ControlledNotification-rPJOiTKo.js";import"./Flex-FXUr_mGC.js";import"./Accordion-CLpjyq9Z.js";import"./Alert-DXCJPXtD.js";import"./AlertBadge-BuTdg19f.js";import"./Align-6bfVl_L9.js";import"./AvatarStack-B9hL9-8U.js";import"./BigNumber-BDnXKUew.js";import"./Breadcrumb-DERgwsy8.js";import"./Heading-D9ExrM7H.js";import"./Legend-C45L9tw3.js";import"./Color-CLgKnwGx.js";import"./TableFooterRow-D497U3pl.js";import"./SkeletonText-Ct2YzDKK.js";import"./Label-PpyRVBZT.js";import"./CounterBadge-DkSRGtKd.js";import"./DonutChart-DANJLMjV.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-BJrTxMO1.js";import"./Header-D_phYTs8.js";import"./Initials-IbErwSCF.js";import"./InlineCode-DttkcdFo.js";import"./LayoutCard-BmKEOMGc.js";import"./Separator-F4fQOqnh.js";import"./MessageSeparator-ZxZNVJUN.js";import"./NavigationGroup-Ci_EZV7N.js";import"./Notification-m02SjDLR.js";import"./NotificationProvider-C2jvC1ES.js";import"./ProgressBar-CeifPY35.js";import"./Rating-DvaCapzL.js";import"./Skeleton-CQJ_ScCC.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,T=S("submit"),Lr={title:"Integrations/React Hook Form/CheckboxButton",component:p,render:()=>{const t=async F=>{await u(1500),T(F)},o=a({defaultValues:{acceptTerms:!1}}),f=j();return r.jsx(c,{form:o,onSubmit:t,children:r.jsxs(b,{children:[r.jsx(f,{name:"acceptTerms",children:r.jsxs(m,{children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"})]})}),r.jsxs(B,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},e={},n={render:t=>{const o=a();return C.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"})]})}),r.jsxs(m,{...t,isInvalid:!0,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:t=>{const o=a();return r.jsxs(c,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
