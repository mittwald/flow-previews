import{j as r,r as F}from"./iframe-Du_qouD_.js";import{c as n,u as p,F as a,t as S}from"./Form-CbVRmMuM.js";import{R as u,S as l}from"./ResetButton-C_wM_wok.js";import{B as d}from"./Button-BKlVJwIr.js";import{S as x,s as c}from"./Section-CP9sTMI1.js";import{A as E}from"./ActionGroup-c_vby5Es.js";import{S as s,F as j}from"./Modal-MGKc6uhP.js";import"./index-nuYtCEEu.js";import"./dynamic-DNgOdReL.js";import"./flowComponent-rDAUUIs0.js";import"./index-D82te6aO.js";import"./clsx-B-dksMZM.js";import"./index-Cna9wk2l.js";import"./useLocalizedStringFormatter-BKry4ylq.js";import"./context-56QjP3j7.js";import"./browser-BIThWoNI.js";import"./utils-4z-LHo9M.js";import"./IconWarning-BYd1-Vrn.js";import"./Text-DSmwKiK5.js";import"./EmulatedBoldText-B6vrvEtA.js";import"./LoadingSpinner-BVVVUtHG.js";import"./Button-9sEBXLr3.js";import"./ProgressBar-C8JML2M-.js";import"./Hidden-CaZvTbg6.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-BYlN_rzy.js";import"./useFocusable-BqYSv_Ya.js";import"./context-DfFGI3iw.js";import"./RSPContexts-As5yeo4a.js";import"./Collection-BebXuOLE.js";import"./CollectionBuilder-D1Dgngsg.js";import"./SelectionIndicator-C_AcjXXq.js";import"./Separator-BJxFAi6I.js";import"./useStatic-6KqxvQye.js";import"./getActionGroupSlot-h_LfU4fO.js";import"./FileCardList--2ZieuqZ.js";import"./Avatar-oOQkBEoe.js";import"./AlertIcon-BgpHVoHm.js";import"./Image-B0yvlgyM.js";import"./Link-DmpqZIYe.js";import"./ControlledNotification-CTznOicW.js";import"./LayoutCard-CmyaRvn3.js";import"./Accordion-D5QR60XG.js";import"./Alert-Uq-uDDS4.js";import"./AlertBadge-DNhsD8PX.js";import"./Align-CyVr7OuT.js";import"./AvatarStack-B5s0vN09.js";import"./BigNumber-Bu3QLXdy.js";import"./Breadcrumb-CfGUSdKq.js";import"./Heading-BD53zFfj.js";import"./Legend-BiYpWzHE.js";import"./Color-7P_eHJ9S.js";import"./TableFooterRow-BddxhsDt.js";import"./SkeletonText-DpYKmaWm.js";import"./Content-COgSVb0P.js";import"./Label-DvpwKxrD.js";import"./CounterBadge-DDdYZMsC.js";import"./DonutChart-Bdt4MC04.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-Be-RmoYN.js";import"./Header-DGdm1J9_.js";import"./Initials-C70OZOod.js";import"./InlineCode-Bj3DEPPw.js";import"./Separator-eScn2XrM.js";import"./MessageSeparator-Brh9XJMv.js";import"./NavigationGroup-DtZinfMC.js";import"./Notification-C9dD5dH2.js";import"./NotificationProvider-RI2P6NdS.js";import"./ProgressBar-CmgKYrsQ.js";import"./Rating-CkwJjaD1.js";import"./Skeleton-DIz56cOV.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,B=b("submit"),Hr={title:"Integrations/React Hook Form/Switch",component:n,render:()=>{const t=async h=>{await c(5e3),B(h)},o=p({defaultValues:{isEnabled:!1}}),f=S();return r.jsx(a,{form:o,onSubmit:t,children:r.jsxs(x,{children:[r.jsx(f,{name:"isEnabled",children:r.jsx(s,{children:"Text"})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},e={},i={render:t=>{const o=p();return F.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{...t,children:"Field1"})}),r.jsxs(s,{children:["Field2",r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:t=>{const o=p();return r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{...t,children:"Field"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
