import{j as r,r as F}from"./iframe-BLnMNn74.js";import{b as n,u as p,F as a,t as S}from"./Form-D1UTqeWr.js";import{R as u,S as l}from"./ResetButton-_Ssv2ALf.js";import{B as d}from"./Button-BheRlZ5y.js";import{S as x,s as c}from"./Section-C4IRs01H.js";import{A as E}from"./ActionGroup-D4qujtmo.js";import{S as s,F as j}from"./Modal-8XeHYI3F.js";import"./index-nuYtCEEu.js";import"./dynamic-lDfDlCad.js";import"./flowComponent-Cc_1rAUW.js";import"./index-D7hijKS_.js";import"./clsx-B-dksMZM.js";import"./index-BEG_ZaEs.js";import"./useLocalizedStringFormatter-B2X4EAgn.js";import"./context-DeTRhxa_.js";import"./browser-3pbWDgJF.js";import"./utils-mouUCLqv.js";import"./IconWarning-DVYn3YAA.js";import"./Text-BLxKn04K.js";import"./EmulatedBoldText-Y_QL0NOh.js";import"./LoadingSpinner-CXYzRfKv.js";import"./Button-DcXCtAho.js";import"./ProgressBar-CiddY3ze.js";import"./Hidden-DG1PJtoX.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-DSyHnBAC.js";import"./useFocusable-CD4hwFyS.js";import"./context-tC_fb_7Z.js";import"./RSPContexts-PYGgvhgu.js";import"./Collection-B9Zfgr-f.js";import"./CollectionBuilder-BNaZkMOR.js";import"./SelectionIndicator-B3Vil9K4.js";import"./Separator-CoYUerX-.js";import"./useStatic-C1gHOY5o.js";import"./FileCardList-C-nFF2lq.js";import"./Avatar-uSFzf8En.js";import"./AlertIcon-D_ZK5_qh.js";import"./Image-C3aTXuYo.js";import"./Link-BiwBBQmE.js";import"./ControlledNotification-CJ1U_sXf.js";import"./Flex-DEZ5_BjM.js";import"./Accordion-DYry0ver.js";import"./Alert-DpWN8tfH.js";import"./AlertBadge-DR63qZD8.js";import"./Align-DGThSHH9.js";import"./AvatarStack-C5tI56sp.js";import"./BigNumber-B8IdDyzZ.js";import"./Breadcrumb-QEC6aw0y.js";import"./Heading-D0fV1MUw.js";import"./Legend-DalDE9ec.js";import"./Color-CZRI8S1_.js";import"./TableFooterRow-DZByrFxu.js";import"./SkeletonText-CgnC14Qd.js";import"./Content-D01rsQck.js";import"./Label-DsxxKAsc.js";import"./CounterBadge-DDvI3NyR.js";import"./DonutChart-CCUCxJB3.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-48_UokG_.js";import"./Header-Dvm5iR7H.js";import"./Initials-CGdYflvx.js";import"./InlineCode-5yLIxxaJ.js";import"./LayoutCard-BJitsBmJ.js";import"./Separator-B4qHJCoW.js";import"./MessageSeparator-BlU-rXLl.js";import"./NavigationGroup-BwV6U3dj.js";import"./Notification-BlXVrBim.js";import"./NotificationProvider-B_e8WRLe.js";import"./ProgressBar-CqlEDKCU.js";import"./Rating-CMJWfAMs.js";import"./Skeleton-Dhd804V2.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,B=b("submit"),Hr={title:"Integrations/React Hook Form/Switch",component:n,render:()=>{const t=async h=>{await c(5e3),B(h)},o=p({defaultValues:{isEnabled:!1}}),f=S();return r.jsx(a,{form:o,onSubmit:t,children:r.jsxs(x,{children:[r.jsx(f,{name:"isEnabled",children:r.jsx(s,{children:"Text"})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},e={},i={render:t=>{const o=p();return F.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{...t,children:"Field1"})}),r.jsxs(s,{children:["Field2",r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:t=>{const o=p();return r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{...t,children:"Field"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
