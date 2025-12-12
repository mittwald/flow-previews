import{j as r,r as F}from"./iframe-DEcBxJMv.js";import{b as n,u as p,F as a,t as S}from"./Form-BWEAk-wT.js";import{R as u,S as l}from"./ResetButton-DEcSG1p7.js";import{B as d}from"./Button-SrFk_XSt.js";import{S as x,s as c}from"./Section-DBHphcZQ.js";import{A as E}from"./ActionGroup-DvFbVXMb.js";import{S as s,g as j}from"./TimeField-Dm82K8tp.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BupQFwyZ.js";import"./PropsContextProvider-MiOt2FVz.js";import"./mergeRefs-sinOTIgX.js";import"./index-BqRQQrKV.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-BRb5cwJZ.js";import"./context-CCmXnIub.js";import"./browser-BXvtU8ie.js";import"./utils-UdYzeLBf.js";import"./IconWarning-BC7HEquB.js";import"./remote-DoDHjwnJ.js";import"./Text-BBAymND1.js";import"./EmulatedBoldText-CK8KF88J.js";import"./LoadingSpinner-BVhceB8v.js";import"./Button-BxMepmz1.js";import"./ProgressBar-EpRxxAE3.js";import"./Hidden-D2mpT24u.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-D_wOvvGC.js";import"./useFocusable-BmM1dgKm.js";import"./context-font-zWS.js";import"./RSPContexts-WhR4y82c.js";import"./Collection-DpX_tac4.js";import"./CollectionBuilder-DE4qpmv-.js";import"./SelectionIndicator-Cf3jtetL.js";import"./Separator-UL7-w-P3.js";import"./useStatic-BAiSxx7G.js";import"./Accordion-BLxSKLD2.js";import"./Alert-Bj8aMttH.js";import"./AlertIcon-B311quy6.js";import"./AlertBadge-DgPHrTJs.js";import"./Align-DJzhUqNo.js";import"./Popover-C7mJHuVQ.js";import"./OverlayTrigger-u_RpKHc5.js";import"./TableFooterRow-C_lpJ_Ld.js";import"./SkeletonText-DAnNzdg5.js";import"./Avatar-bYuIu1Zy.js";import"./AvatarStack-DTmDz1dE.js";import"./Badge-bbz8daB-.js";import"./BigNumber-BlHVGSpu.js";import"./Breadcrumb-GNNk4mVy.js";import"./Link-CPvKToX3.js";import"./Heading-DVq-3Nns.js";import"./Legend-C5yWylkj.js";import"./FileCardList-Bi3qt08T.js";import"./Image-CcShDLXX.js";import"./Color-B19feJBC.js";import"./Content-ClXCVH_y.js";import"./Label-DKovwxNh.js";import"./ContextualHelpTrigger-PNpDQr7A.js";import"./CounterBadge-BITuIXzG.js";import"./DonutChart-DfevOAtY.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-Cw2rsL0x.js";import"./Header-DifY7CnZ.js";import"./Initials-TsKejgdG.js";import"./InlineCode-BkoHhJoS.js";import"./PopoverTrigger-BYjVsibp.js";import"./Separator-Cmo-OklH.js";import"./Message-Dzzvnonj.js";import"./MessageSeparator-DMvMYf8R.js";import"./NavigationGroup-DIvfJjdh.js";import"./Notification-DUi0yP4R.js";import"./NotificationProvider-Qm9FlLcY.js";import"./ProgressBar-ULT9xIn5.js";import"./Rating-C0VI3x7Z.js";import"./Skeleton-B3H61kIa.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,g=b("submit"),Nr={title:"Integrations/React Hook Form/Switch",component:n,render:()=>{const t=async h=>{await c(5e3),g(h)},o=p({defaultValues:{isEnabled:!1}}),f=S();return r.jsx(a,{form:o,onSubmit:t,children:r.jsxs(x,{children:[r.jsx(f,{name:"isEnabled",children:r.jsx(s,{children:"Text"})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},e={},i={render:t=>{const o=p();return F.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{...t,children:"Field1"})}),r.jsxs(s,{children:["Field2",r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:t=>{const o=p();return r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{...t,children:"Field"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const Ur=["Default","WithFieldError","WithFocus"];export{e as Default,i as WithFieldError,m as WithFocus,Ur as __namedExportsOrder,Nr as default};
