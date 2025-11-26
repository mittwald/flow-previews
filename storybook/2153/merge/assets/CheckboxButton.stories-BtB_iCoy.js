import{j as r,r as C}from"./iframe-tNeMQtR9.js";import{b as p,u as a,F as c,t as j}from"./Form-CZq0j07w.js";import{R as h,S as x}from"./ResetButton-DjLAqSBa.js";import{B as l}from"./Button-evMO-5rj.js";import{S as b,s as u}from"./Section-CWr8AAoQ.js";import{A as B}from"./ActionGroup-BG5GPQGU.js";import{T as i}from"./Text-C2VO0De_.js";import{w as m,F as E}from"./Modal-BTUku4xq.js";import{C as d}from"./Content-CJ0-JcWV.js";import"./index-nuYtCEEu.js";import"./dynamic-C77k3JSm.js";import"./flowComponent-Cm6q17-o.js";import"./index-KVcqOv8o.js";import"./clsx-B-dksMZM.js";import"./index-CkwyjQRx.js";import"./useLocalizedStringFormatter-BvPPnk_e.js";import"./context-CPiapOtt.js";import"./browser-tvBxR0oJ.js";import"./utils-COmC6Eka.js";import"./IconWarning-CQOJDPfQ.js";import"./LoadingSpinner-CNWC6196.js";import"./Button-BinTn0sL.js";import"./ProgressBar-CqKQSfDd.js";import"./Hidden-Cg7taIb1.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-CrzENmB0.js";import"./useFocusable-BOEQm_aX.js";import"./context-Cey1J_Al.js";import"./RSPContexts-DY330ZPC.js";import"./Collection-BtpQxErv.js";import"./CollectionBuilder-DjYSc1J7.js";import"./SelectionIndicator-CUsz2YTu.js";import"./Separator-DgMEcD2E.js";import"./useStatic-D2eB1aGn.js";import"./EmulatedBoldText-Cjn4wbX9.js";import"./FileCardList-BMiH65Ui.js";import"./Avatar-DDlp-vfW.js";import"./AlertIcon-Bzk-eUz1.js";import"./Image-CCt_1c0z.js";import"./Link-D-oNPjX9.js";import"./ControlledNotification-BwqgxSUH.js";import"./Flex-rZ8v-_CO.js";import"./Accordion-B23Ox3j7.js";import"./Alert-DZNlkX8e.js";import"./AlertBadge-D7TFwUaN.js";import"./Align-DCuTz2PT.js";import"./AvatarStack-8752QnfM.js";import"./BigNumber-CjI3llLI.js";import"./Breadcrumb-BQFrdOyt.js";import"./Heading-C8p-a7zJ.js";import"./Legend-DGYMeAYO.js";import"./Color-CkZmA5bq.js";import"./TableFooterRow-C3NFPVoX.js";import"./SkeletonText-VT80yi-y.js";import"./Label-QQ-I3K-S.js";import"./CounterBadge-DMa-J370.js";import"./DonutChart-LklFYUFk.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-CXJ82N6E.js";import"./Header-6aMHBv44.js";import"./Initials-DngG0C9b.js";import"./InlineCode-DyN8wBPc.js";import"./LayoutCard-CuTcuwsm.js";import"./Separator-YVCX1fHW.js";import"./MessageSeparator-CgLaydGc.js";import"./NavigationGroup-BfN1VqG1.js";import"./Notification-jWU6KLhG.js";import"./NotificationProvider-C8ET-e-A.js";import"./ProgressBar-Bcq6KtH-.js";import"./Rating-kZ5WeiDB.js";import"./Skeleton-kxM3gt-s.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,T=S("submit"),Lr={title:"Integrations/React Hook Form/CheckboxButton",component:p,render:()=>{const t=async F=>{await u(1500),T(F)},o=a({defaultValues:{acceptTerms:!1}}),f=j();return r.jsx(c,{form:o,onSubmit:t,children:r.jsxs(b,{children:[r.jsx(f,{name:"acceptTerms",children:r.jsxs(m,{children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"})]})}),r.jsxs(B,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},e={},n={render:t=>{const o=a();return C.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"})]})}),r.jsxs(m,{...t,isInvalid:!0,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:t=>{const o=a();return r.jsxs(c,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
