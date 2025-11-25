import{j as r,r as F}from"./iframe-CRHerQcT.js";import{b as n,u as p,F as a,t as S}from"./Form-CHvE1Qna.js";import{R as u,S as l}from"./ResetButton-KhvpTA0a.js";import{B as d}from"./Button-DOdtzIa_.js";import{S as x,s as c}from"./Section-DCbopNVT.js";import{A as E}from"./ActionGroup-bop6Cb2x.js";import{S as s,F as j}from"./Modal-CHikTCfT.js";import"./index-nuYtCEEu.js";import"./dynamic-JzWN_IYl.js";import"./flowComponent-Po2jQ9NZ.js";import"./index-BbKg1nkj.js";import"./clsx-B-dksMZM.js";import"./index-DOvz_Dla.js";import"./useLocalizedStringFormatter-B1bSBhnk.js";import"./context-C5gXDLZB.js";import"./browser-C1kPNy51.js";import"./utils-B8O46aeb.js";import"./IconWarning-S9zVz1Ke.js";import"./Text-sklVEIT5.js";import"./EmulatedBoldText-CArsfrvv.js";import"./LoadingSpinner-DjcUww4s.js";import"./Button-DPVH9eDh.js";import"./ProgressBar-NMXq-w2-.js";import"./Hidden-BcqgQAy4.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-DdX5Sdo5.js";import"./useFocusable-O8acuieM.js";import"./context-C4Lb4VEy.js";import"./RSPContexts-DxbMYf-Z.js";import"./Collection-BkWkcg8z.js";import"./CollectionBuilder-CTEpaBir.js";import"./SelectionIndicator-BJEbb9Gg.js";import"./Separator-CIAUU7Mv.js";import"./useStatic-CvvgeXIU.js";import"./FileCardList-BRkY0El4.js";import"./Avatar-B_AsKOkR.js";import"./AlertIcon-BgWetiy7.js";import"./Image-HxAJgvwY.js";import"./Link-DtavQq9t.js";import"./ControlledNotification-BLJs-Z1G.js";import"./Flex-Drl5GGOg.js";import"./Accordion-DRGBj4f5.js";import"./Alert-pe0uKkFF.js";import"./AlertBadge-DQMWdOiZ.js";import"./Align-DLnBGGPL.js";import"./AvatarStack-C0_9IyGj.js";import"./BigNumber-C6mS8Wh6.js";import"./Breadcrumb-Wl5kqkjz.js";import"./Heading-PN47vIIN.js";import"./Legend-B6gewgni.js";import"./Color-4MH-JGEe.js";import"./TableFooterRow-D_R0KUn8.js";import"./SkeletonText-DT_aA1lI.js";import"./Content-ozSr22eC.js";import"./Label-RXr9Ag3i.js";import"./CounterBadge-D5n1cIT5.js";import"./DonutChart-BzjBcwZM.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-BrKKi1jH.js";import"./Header-BkK7wzu1.js";import"./Initials-HsORkqZ3.js";import"./InlineCode-DGlO1jad.js";import"./LayoutCard-0IlyXBle.js";import"./Separator-GyMKFIRg.js";import"./MessageSeparator-Bp-V0ng0.js";import"./NavigationGroup-CIbHeakV.js";import"./Notification-BsGc8vQq.js";import"./NotificationProvider-yfmcKWLq.js";import"./ProgressBar-D49n6bfx.js";import"./Rating-C48Ki5al.js";import"./Skeleton-DfnIMzY3.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,B=b("submit"),Hr={title:"Integrations/React Hook Form/Switch",component:n,render:()=>{const t=async h=>{await c(5e3),B(h)},o=p({defaultValues:{isEnabled:!1}}),f=S();return r.jsx(a,{form:o,onSubmit:t,children:r.jsxs(x,{children:[r.jsx(f,{name:"isEnabled",children:r.jsx(s,{children:"Text"})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},e={},i={render:t=>{const o=p();return F.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{...t,children:"Field1"})}),r.jsxs(s,{children:["Field2",r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:t=>{const o=p();return r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{...t,children:"Field"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
