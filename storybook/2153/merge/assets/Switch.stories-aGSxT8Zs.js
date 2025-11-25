import{j as r,r as F}from"./iframe-DGpdmZy6.js";import{b as n,u as p,F as a,t as S}from"./Form-D6ip5OeB.js";import{R as u,S as l}from"./ResetButton-C-ek5KZS.js";import{B as d}from"./Button--Vm3DJA2.js";import{S as x,s as c}from"./Section-OXIXjQEc.js";import{A as E}from"./ActionGroup-BO_R-HXV.js";import{S as s,F as j}from"./Modal-k3eojm_4.js";import"./index-nuYtCEEu.js";import"./dynamic-DNRDSutR.js";import"./flowComponent-BQEf5M_T.js";import"./index-De-tUa4b.js";import"./clsx-B-dksMZM.js";import"./index-CrYgLF30.js";import"./useLocalizedStringFormatter-Zkj79Hgs.js";import"./context-GZA4a4Iz.js";import"./browser-B8HytOQQ.js";import"./utils-CfRYmgOV.js";import"./IconWarning-D9ML-GA0.js";import"./Text-BXzwFxO1.js";import"./EmulatedBoldText-CnA6n1pz.js";import"./LoadingSpinner-D-s3tm4d.js";import"./Button-CcaaVk2n.js";import"./ProgressBar-BRkbw9Mx.js";import"./Hidden-DBVn3F7o.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-B3OG5RkS.js";import"./useFocusable-CIlqLEIw.js";import"./context-BFV2yP4B.js";import"./RSPContexts-C3hd5u3G.js";import"./Collection-vhKnWwMf.js";import"./CollectionBuilder-B9NCAwqd.js";import"./SelectionIndicator-xePv5RSf.js";import"./Separator-F2jO3kT9.js";import"./useStatic-BZw01sJd.js";import"./FileCardList-CKzDrmKJ.js";import"./Avatar-DVvgb2Xm.js";import"./AlertIcon-Bwvtphoy.js";import"./Image-Cn_QWKsO.js";import"./Link-CguFfPfy.js";import"./ControlledNotification-rPJOiTKo.js";import"./Flex-FXUr_mGC.js";import"./Accordion-CLpjyq9Z.js";import"./Alert-DXCJPXtD.js";import"./AlertBadge-BuTdg19f.js";import"./Align-6bfVl_L9.js";import"./AvatarStack-B9hL9-8U.js";import"./BigNumber-BDnXKUew.js";import"./Breadcrumb-DERgwsy8.js";import"./Heading-D9ExrM7H.js";import"./Legend-C45L9tw3.js";import"./Color-CLgKnwGx.js";import"./TableFooterRow-D497U3pl.js";import"./SkeletonText-Ct2YzDKK.js";import"./Content-DYEeGbNd.js";import"./Label-PpyRVBZT.js";import"./CounterBadge-DkSRGtKd.js";import"./DonutChart-DANJLMjV.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-BJrTxMO1.js";import"./Header-D_phYTs8.js";import"./Initials-IbErwSCF.js";import"./InlineCode-DttkcdFo.js";import"./LayoutCard-BmKEOMGc.js";import"./Separator-F4fQOqnh.js";import"./MessageSeparator-ZxZNVJUN.js";import"./NavigationGroup-Ci_EZV7N.js";import"./Notification-m02SjDLR.js";import"./NotificationProvider-C2jvC1ES.js";import"./ProgressBar-CeifPY35.js";import"./Rating-DvaCapzL.js";import"./Skeleton-CQJ_ScCC.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,B=b("submit"),Hr={title:"Integrations/React Hook Form/Switch",component:n,render:()=>{const t=async h=>{await c(5e3),B(h)},o=p({defaultValues:{isEnabled:!1}}),f=S();return r.jsx(a,{form:o,onSubmit:t,children:r.jsxs(x,{children:[r.jsx(f,{name:"isEnabled",children:r.jsx(s,{children:"Text"})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},e={},i={render:t=>{const o=p();return F.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{...t,children:"Field1"})}),r.jsxs(s,{children:["Field2",r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:t=>{const o=p();return r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{...t,children:"Field"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
