import{j as r,r as F}from"./iframe-CVdzphmp.js";import{b as n,u as p,F as a,t as S}from"./Form-GraeHhDs.js";import{R as u,S as l}from"./ResetButton-BC5ETspy.js";import{B as d}from"./Button-Cy2rd34B.js";import{S as x,s as c}from"./Section-DtrIGiG-.js";import{A as E}from"./ActionGroup-CWQpjp5Z.js";import{S as s,F as j}from"./Modal-dLKFywtU.js";import"./index-nuYtCEEu.js";import"./dynamic-D15r1Yxg.js";import"./flowComponent-CzVecZL_.js";import"./index-DhI8Ssxe.js";import"./clsx-B-dksMZM.js";import"./index-XbyfyjmF.js";import"./useLocalizedStringFormatter-DSC0kUTs.js";import"./context-BRBaLiQc.js";import"./browser-NAvxjlqe.js";import"./utils-CFM6TLUG.js";import"./IconWarning-Dqi9ABql.js";import"./Text-Bkok2Uad.js";import"./EmulatedBoldText-Buf1io-r.js";import"./LoadingSpinner-DTzlaVu1.js";import"./Button-CTZeRvkz.js";import"./ProgressBar-1X1fHZT0.js";import"./Hidden-Dt0LCI07.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-BvvALaA3.js";import"./useFocusable-By55uwCe.js";import"./context-B-mwp0vS.js";import"./RSPContexts-DDuv6DrT.js";import"./Collection-D1raa_37.js";import"./CollectionBuilder-D0Q13mlX.js";import"./SelectionIndicator-wxrHnCmJ.js";import"./Separator-DMedQabI.js";import"./useStatic-CTNvYRV_.js";import"./FileCardList-CelLg_wh.js";import"./Avatar-5by9MeQI.js";import"./AlertIcon-Xp4f2JBr.js";import"./Image-C129SSb1.js";import"./Link-DafBlrAX.js";import"./ControlledNotification-Cxvk1MBM.js";import"./Flex-CXweaQA0.js";import"./Accordion-CII8tjDR.js";import"./Alert-CxRF3ICH.js";import"./AlertBadge-g5AIFmAM.js";import"./Align-D1ekpy-F.js";import"./AvatarStack-gtLPvBlC.js";import"./BigNumber-DDAMaBcj.js";import"./Breadcrumb-D6jlLVdK.js";import"./Heading-DzvfYRfV.js";import"./Legend-Ch6lQmnj.js";import"./Color-bOvY6mSn.js";import"./TableFooterRow-BNbzk5NJ.js";import"./SkeletonText-CyW34AgL.js";import"./Content-DxRrX9zb.js";import"./Label-BcwsyfCE.js";import"./CounterBadge-CKtsFS1H.js";import"./DonutChart-BqUMdaQw.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-Y2YDUvsA.js";import"./Header-cd3ubJu7.js";import"./Initials-8P49ASMZ.js";import"./InlineCode-ClEEVqRB.js";import"./LayoutCard-DFxi45F0.js";import"./Separator-BfdYcmQH.js";import"./MessageSeparator-CuotSqOA.js";import"./NavigationGroup-CEF9lIWg.js";import"./Notification-3G2vZj4A.js";import"./NotificationProvider-BuTudFPl.js";import"./ProgressBar-Cb_NqQgZ.js";import"./Rating-D1vk6HX_.js";import"./Skeleton-DCmfrDd3.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,B=b("submit"),Hr={title:"Integrations/React Hook Form/Switch",component:n,render:()=>{const t=async h=>{await c(5e3),B(h)},o=p({defaultValues:{isEnabled:!1}}),f=S();return r.jsx(a,{form:o,onSubmit:t,children:r.jsxs(x,{children:[r.jsx(f,{name:"isEnabled",children:r.jsx(s,{children:"Text"})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},e={},i={render:t=>{const o=p();return F.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{...t,children:"Field1"})}),r.jsxs(s,{children:["Field2",r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:t=>{const o=p();return r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{...t,children:"Field"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
          <Switch {...props}>Field1</Switch>
        </Field>
        <Switch>
          Field2
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </Switch>
      </Form>;
  }
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Switch {...props}>Field</Switch>
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
}`,...m.parameters?.docs?.source}}};const Kr=["Default","WithFieldError","WithFocus"];export{e as Default,i as WithFieldError,m as WithFocus,Kr as __namedExportsOrder,Hr as default};
