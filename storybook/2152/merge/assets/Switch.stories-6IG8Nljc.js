import{j as r,r as F}from"./iframe-CwbJq3r1.js";import{c as n,u as p,F as a,t as S}from"./Form-C9I1kaA2.js";import{R as u,S as l}from"./ResetButton-Cg_lrBPM.js";import{B as d}from"./Button-CDiKsYfE.js";import{S as x,s as c}from"./Section-BfEoCltm.js";import{A as E}from"./ActionGroup-DSsfeKXt.js";import{S as s,F as j}from"./Modal-UmnffMZn.js";import"./index-nuYtCEEu.js";import"./dynamic-IznNfavT.js";import"./flowComponent-DXmJ7qTr.js";import"./index-DOh9HP8s.js";import"./clsx-B-dksMZM.js";import"./index-BteSo1JG.js";import"./useLocalizedStringFormatter-B4yqbLzs.js";import"./context-BZjsOLmp.js";import"./browser-kBiuzLEF.js";import"./utils-CPaMkJSd.js";import"./IconWarning--_iZ6FJr.js";import"./Text-CrE3MVm4.js";import"./EmulatedBoldText-BqYq2ptk.js";import"./LoadingSpinner-mT4GMrz2.js";import"./Button-Bhd7ARuI.js";import"./ProgressBar-D7w8upNS.js";import"./Hidden-kKtmtVK1.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-BPZjqIep.js";import"./useFocusable-Bezx6XMf.js";import"./context-B56GsAs1.js";import"./RSPContexts-y_L0XZPW.js";import"./Collection-BPSIvTLJ.js";import"./CollectionBuilder-Dfx3RB_n.js";import"./SelectionIndicator-D2MfWhCg.js";import"./Separator-BubC8oQ4.js";import"./useStatic-D3JCqzcf.js";import"./FileCardList-CFXH-qjX.js";import"./Avatar-C4sAvZAr.js";import"./AlertIcon-D4SK6nAz.js";import"./Image-Bmadiq8c.js";import"./Link-BAl7QXrG.js";import"./ControlledNotification-Deb0rzCB.js";import"./Flex-DUcNemwf.js";import"./Accordion-BQnPG_jT.js";import"./Alert-x-P_ExCm.js";import"./AlertBadge-DzKW-VdF.js";import"./Align-DDaFErA1.js";import"./AvatarStack-DTk1p07I.js";import"./BigNumber-CBUp9ofh.js";import"./Breadcrumb-CmDjMlTt.js";import"./Heading-FVvo5o9O.js";import"./Legend-D05yZHp2.js";import"./Color-DfZVycWq.js";import"./TableFooterRow-DQtCx6U6.js";import"./SkeletonText-C0pUD_bb.js";import"./Content-C5Mjar79.js";import"./Label-hfc8gnGk.js";import"./CounterBadge-Dgds6XQc.js";import"./DonutChart-Bll2GL_J.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-CSYNvEVP.js";import"./Header-DUtH1frW.js";import"./Initials-DbAAmjP_.js";import"./InlineCode-CA30spDN.js";import"./LayoutCard-BEWgIH8M.js";import"./Separator-ucvqUY6a.js";import"./MessageSeparator-BVYCvU4X.js";import"./NavigationGroup-CmJE1VHy.js";import"./Notification-Cfojyaki.js";import"./NotificationProvider-x4r_49LO.js";import"./ProgressBar-DSuKBqER.js";import"./Rating-e_Mh9Lse.js";import"./Skeleton-DkzLlt2Q.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,B=b("submit"),Hr={title:"Integrations/React Hook Form/Switch",component:n,render:()=>{const t=async h=>{await c(5e3),B(h)},o=p({defaultValues:{isEnabled:!1}}),f=S();return r.jsx(a,{form:o,onSubmit:t,children:r.jsxs(x,{children:[r.jsx(f,{name:"isEnabled",children:r.jsx(s,{children:"Text"})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},e={},i={render:t=>{const o=p();return F.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{...t,children:"Field1"})}),r.jsxs(s,{children:["Field2",r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:t=>{const o=p();return r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{...t,children:"Field"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
