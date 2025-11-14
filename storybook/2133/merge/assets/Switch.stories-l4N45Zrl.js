import{j as r,r as F}from"./iframe-DxjJvypA.js";import{c as n,u as p,F as a,t as S}from"./Form-DJxnwuL9.js";import{R as u,S as l}from"./ResetButton-CKNshwdg.js";import{B as d}from"./Button-CsJkXLJC.js";import{S as x,s as c}from"./Section-B6nN9o_0.js";import{A as E}from"./ActionGroup-CVcTWpTg.js";import{S as s,F as j}from"./Modal-scDbqKwL.js";import"./index-nuYtCEEu.js";import"./dynamic-BdL6WG8t.js";import"./flowComponent-DUeX89k8.js";import"./index-183dggCm.js";import"./clsx-B-dksMZM.js";import"./index-12LB0401.js";import"./useLocalizedStringFormatter-B-C4j2VW.js";import"./context-IWHzWN32.js";import"./browser-CB6HLjfz.js";import"./utils-6KDkR0i-.js";import"./IconWarning-BlszW1tj.js";import"./Text-CGLUa4sd.js";import"./EmulatedBoldText-CPQw7A1N.js";import"./LoadingSpinner-q348yrim.js";import"./Button-nEfrx5gJ.js";import"./ProgressBar-5owblEDR.js";import"./Hidden-r4JGJoQA.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-DXxhUawj.js";import"./useFocusable-BcokvUUD.js";import"./context-CTfXc2Zo.js";import"./RSPContexts-BduYfYam.js";import"./Collection-_X54BM7-.js";import"./CollectionBuilder-Bm_NDCjy.js";import"./SelectionIndicator-CSBpDXmM.js";import"./Separator-DoMs1cQk.js";import"./useStatic-iE5J9zsV.js";import"./getActionGroupSlot-DvyUR_ym.js";import"./FileCardList-BVyoDE-7.js";import"./Avatar-BR29CIP8.js";import"./AlertIcon-CJADbW9L.js";import"./Image-C9uy31u2.js";import"./Link-DMUApF-a.js";import"./ControlledNotification-vaU_F80i.js";import"./LayoutCard-aWGkBZVt.js";import"./Accordion-Ps3GdnvV.js";import"./Alert-B_YHHoEM.js";import"./AlertBadge-LOZq_93c.js";import"./Align-lkWsfgzV.js";import"./AvatarStack-CwQZo75P.js";import"./BigNumber-B3EhvRla.js";import"./Breadcrumb-73u-YP5B.js";import"./Heading-BRsOw7TR.js";import"./Legend-rhAR0u5-.js";import"./Color-CGGKQlcf.js";import"./TableFooterRow-DFeDu75P.js";import"./SkeletonText-eFRLkdn1.js";import"./Content-D4JTeq-s.js";import"./Label-BCxsZWDW.js";import"./CounterBadge-CpPkfl65.js";import"./DonutChart-CeTOSEye.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-Clnhjbhg.js";import"./Header-D2mqm9n1.js";import"./Initials-BkyQRHGv.js";import"./InlineCode-2bpBAEcp.js";import"./Separator-Ci8H9o73.js";import"./MessageSeparator-CYyIHhcK.js";import"./NavigationGroup-BPerNp2h.js";import"./Notification-Cqym3ej0.js";import"./NotificationProvider-CPmTQg-x.js";import"./ProgressBar-CRpWDhXs.js";import"./Rating-Cr0_tTre.js";import"./Skeleton-BtPwNpqY.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,B=b("submit"),Hr={title:"Integrations/React Hook Form/Switch",component:n,render:()=>{const t=async h=>{await c(5e3),B(h)},o=p({defaultValues:{isEnabled:!1}}),f=S();return r.jsx(a,{form:o,onSubmit:t,children:r.jsxs(x,{children:[r.jsx(f,{name:"isEnabled",children:r.jsx(s,{children:"Text"})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},e={},i={render:t=>{const o=p();return F.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{...t,children:"Field1"})}),r.jsxs(s,{children:["Field2",r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:t=>{const o=p();return r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{...t,children:"Field"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
