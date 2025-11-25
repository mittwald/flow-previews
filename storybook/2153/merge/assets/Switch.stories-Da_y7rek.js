import{j as r,r as F}from"./iframe-C7sy8eLt.js";import{b as n,u as p,F as a,t as S}from"./Form-CEjV-kW2.js";import{R as u,S as l}from"./ResetButton-5Orn1GpQ.js";import{B as d}from"./Button-BZw3q7YG.js";import{S as x,s as c}from"./Section-B_6olPV1.js";import{A as E}from"./ActionGroup-Bou60yfQ.js";import{S as s,F as j}from"./Modal-CgkmliK_.js";import"./index-nuYtCEEu.js";import"./dynamic-xNYmGRJM.js";import"./flowComponent-DIjd7Mwu.js";import"./index-Cpqj0oV0.js";import"./clsx-B-dksMZM.js";import"./index-CQGWyvrR.js";import"./useLocalizedStringFormatter-CTGu5obF.js";import"./context-CzQbumPb.js";import"./browser-BbONOrP3.js";import"./utils-ClB0n4MX.js";import"./IconWarning-BlJBP8EW.js";import"./Text-CNjgj0Nh.js";import"./EmulatedBoldText-D386pHKZ.js";import"./LoadingSpinner-DOZFO_5L.js";import"./Button-Dbk_q6kB.js";import"./ProgressBar-DVj1Bza0.js";import"./Hidden-BiwDbxQo.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-Ah8T3Rlp.js";import"./useFocusable-BdiuUyMg.js";import"./context-cT4ej6gr.js";import"./RSPContexts-BXBNaV8B.js";import"./Collection-Bs_bKP_m.js";import"./CollectionBuilder--gmJ_NYC.js";import"./SelectionIndicator-BYKIsOg-.js";import"./Separator-BY5kq_RL.js";import"./useStatic-C3MBsJUa.js";import"./FileCardList-BcoXYZaJ.js";import"./Avatar-pqiTjDaw.js";import"./AlertIcon-pdEEQLjK.js";import"./Image-BzosvY75.js";import"./Link-CYOMmfe5.js";import"./ControlledNotification-1haiwG2D.js";import"./Flex-Cery0S_5.js";import"./Accordion-CYXfOEtJ.js";import"./Alert-CuOVoIP4.js";import"./AlertBadge-DbgGv4eB.js";import"./Align-BlvYLRO8.js";import"./AvatarStack-CXX7ZouY.js";import"./BigNumber-D9-VIDaq.js";import"./Breadcrumb-B3K0GN86.js";import"./Heading-k3TZmz5u.js";import"./Legend-D0oOrj9r.js";import"./Color-Ds7_816d.js";import"./TableFooterRow-yox3njQ3.js";import"./SkeletonText-oFV3v-ow.js";import"./Content--Il2Vbk0.js";import"./Label-rfHe5hPU.js";import"./CounterBadge-sYYq6djQ.js";import"./DonutChart-Bw97G3qW.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DvMkVg-s.js";import"./Header-DwdbIsc5.js";import"./Initials-nwj7pVwk.js";import"./InlineCode-fcdnehc6.js";import"./LayoutCard-YIuI0q1W.js";import"./Separator-CnXIIkpp.js";import"./MessageSeparator-BAFFdBEb.js";import"./NavigationGroup-MvGeIrOF.js";import"./Notification-BKYjv64k.js";import"./NotificationProvider-NTC8P3ww.js";import"./ProgressBar-gRP8sWKC.js";import"./Rating-BnzoQ1_w.js";import"./Skeleton-D46xLN5H.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,B=b("submit"),Hr={title:"Integrations/React Hook Form/Switch",component:n,render:()=>{const t=async h=>{await c(5e3),B(h)},o=p({defaultValues:{isEnabled:!1}}),f=S();return r.jsx(a,{form:o,onSubmit:t,children:r.jsxs(x,{children:[r.jsx(f,{name:"isEnabled",children:r.jsx(s,{children:"Text"})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},e={},i={render:t=>{const o=p();return F.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{...t,children:"Field1"})}),r.jsxs(s,{children:["Field2",r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:t=>{const o=p();return r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{...t,children:"Field"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
