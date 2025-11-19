import{j as r,r as C}from"./iframe-RkNYvT67.js";import{c as p,u as a,F as c,t as j}from"./Form-pYBt_OI-.js";import{R as h,S as x}from"./ResetButton-DVKahqzM.js";import{B as l}from"./Button-Cq2sGnot.js";import{S as B,s as u}from"./Section-C9URTgx-.js";import{A as b}from"./ActionGroup-U66WTNaW.js";import{T as i}from"./Text-CGI13fZ7.js";import{w as m,F as E}from"./Modal-xVut-wtw.js";import{C as d}from"./Content-CugomRfa.js";import"./index-nuYtCEEu.js";import"./dynamic-D525euPD.js";import"./flowComponent-t1J_uYA_.js";import"./index-BXAy4ZoD.js";import"./clsx-B-dksMZM.js";import"./index-CYuD20gW.js";import"./useLocalizedStringFormatter-CZYF-KE5.js";import"./context-DpnYhhMC.js";import"./browser-O08qKn7T.js";import"./utils-Cw0V24oX.js";import"./IconWarning-Bv_c0irh.js";import"./LoadingSpinner-C8ge1gn9.js";import"./Button-BaIk0AjS.js";import"./ProgressBar-DatwHdcd.js";import"./Hidden-DglwBjTS.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-zSkRpitG.js";import"./useFocusable-Cc38Xz3k.js";import"./context-QFyIn5AW.js";import"./RSPContexts-iWdoYzW5.js";import"./Collection-Dn2VpDMj.js";import"./CollectionBuilder-G2QPbUNk.js";import"./SelectionIndicator-ygw8vgtw.js";import"./Separator-AC7DyvUW.js";import"./useStatic-DSkca5nN.js";import"./EmulatedBoldText-wSSRmDQ8.js";import"./FileCardList-BOij6tHP.js";import"./Avatar-D-Vh6qCe.js";import"./AlertIcon-Dfi2fKkE.js";import"./Image-Du0dM-WM.js";import"./Link-CcuThIFH.js";import"./ControlledNotification-Bv9UL5dV.js";import"./Flex-B3wiFoJ1.js";import"./Accordion-DmcKhtrA.js";import"./Alert-D3bKy03a.js";import"./AlertBadge-Bdr69yR6.js";import"./Align-fxln_Dgz.js";import"./AvatarStack-C0E2D8b6.js";import"./BigNumber-DNM4Asro.js";import"./Breadcrumb-BVRejx5y.js";import"./Heading-4A_9k7B7.js";import"./Legend-CfpByMiV.js";import"./Color-CF8_g_Rt.js";import"./TableFooterRow-DKyMLwZS.js";import"./SkeletonText-mgkPpEwS.js";import"./Label-CSQY-O06.js";import"./CounterBadge-B73tBZKq.js";import"./DonutChart-Bi52zQsm.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-2cEex6ck.js";import"./Header-Daa8R0Vo.js";import"./Initials-BYiwEIK7.js";import"./InlineCode-vcmJPAHr.js";import"./LayoutCard-552oNMIB.js";import"./Separator-BzLOFugX.js";import"./MessageSeparator-CT9RS-8F.js";import"./NavigationGroup-bJXjtOzI.js";import"./Notification-DMDBZmDj.js";import"./NotificationProvider-Cdy3Vamk.js";import"./ProgressBar-YmHjvNRH.js";import"./Rating-B1PBw_H7.js";import"./Skeleton-DFoxDyNL.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,T=S("submit"),Lr={title:"Integrations/React Hook Form/CheckboxButton",component:p,render:()=>{const t=async F=>{await u(1500),T(F)},o=a({defaultValues:{acceptTerms:!1}}),f=j();return r.jsx(c,{form:o,onSubmit:t,children:r.jsxs(B,{children:[r.jsx(f,{name:"acceptTerms",children:r.jsxs(m,{children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"})]})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},e={},n={render:t=>{const o=a();return C.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"})]})}),r.jsxs(m,{...t,isInvalid:!0,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:t=>{const o=a();return r.jsxs(c,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
