import{j as r,r as x}from"./iframe-Dk60Gpin.js";import{b as a,u as l,F as d,t as j}from"./Form-BlvV6-f1.js";import{L as o}from"./Label-DRmbs-HY.js";import{R as c,S as f}from"./ResetButton-B_ncRbLl.js";import{B as p}from"./Button-BaFAPk6P.js";import{S as g,s as u}from"./Section-CoeixnSJ.js";import{A as b}from"./ActionGroup-Dtx1HegN.js";import{N as t,v as E,g as S}from"./TimeField-4D5Nhq3P.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-4gi8GiXC.js";import"./PropsContextProvider-BdZs02Td.js";import"./mergeRefs-MJGqjKNq.js";import"./index-DJhA7Wui.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-Bc2xZT0_.js";import"./context-fp4w0YcD.js";import"./browser-BvxtBXb9.js";import"./utils-Ch0ZZJ4D.js";import"./ProgressBar-D9iry1uY.js";import"./Hidden-D3Wnlg7j.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-BTcUjjec.js";import"./Text-BbMQM1DG.js";import"./EmulatedBoldText-BXENtjIV.js";import"./LoadingSpinner-BDrvrciy.js";import"./Button-BnOkCogS.js";import"./useFocusRing-BRWpt41V.js";import"./useFocusable-BjdDuCYq.js";import"./context-BthpMtM5.js";import"./RSPContexts-CVMXvjX8.js";import"./Collection-BeF55kv5.js";import"./CollectionBuilder-B_txidaV.js";import"./SelectionIndicator-Dw3nAwCY.js";import"./Separator-CD2VJwjG.js";import"./useStatic-CwfWB48x.js";import"./Accordion--PiuPE_9.js";import"./Alert-eguRclW1.js";import"./AlertIcon-BvG3TXg-.js";import"./AlertBadge-Ci3q7ONa.js";import"./Align-otZVcDBU.js";import"./Popover-DUzfCkJT.js";import"./OverlayTrigger-D41F-SKL.js";import"./TableFooterRow-ZiMRcLMp.js";import"./SkeletonText-BdDEip2O.js";import"./Avatar-uhIZWmRw.js";import"./AvatarStack-Ce0OtoHB.js";import"./Badge-Ci0_YhS-.js";import"./BigNumber-D_1n_f24.js";import"./Breadcrumb-DTmlwgi3.js";import"./Link-Bk7l3Hhl.js";import"./Heading-BClLfS9l.js";import"./Legend-lyiM8tnC.js";import"./FileCardList-z1TOLFrB.js";import"./Image-BFIYVrgb.js";import"./Color-CuKRh3Mj.js";import"./Content-qRe1c-jG.js";import"./ContextualHelpTrigger-3ee7SYMq.js";import"./CounterBadge-DvjVQF88.js";import"./DonutChart-DxQSNKcp.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-B1AdWPYh.js";import"./Header-C1g8Z3mN.js";import"./Initials-BwxHVFlG.js";import"./InlineCode-DeaiiFf1.js";import"./PopoverTrigger-aEhJpWUL.js";import"./Separator-DpLqTccG.js";import"./Message-DgNLVg8a.js";import"./MessageSeparator-CqkN_4jq.js";import"./NavigationGroup-BNi9xF1W.js";import"./Notification-BYPtdgjX.js";import"./NotificationProvider-DbUFBJzc.js";import"./ProgressBar-BAxPsWQD.js";import"./Rating-CiM8MErc.js";import"./Skeleton-DAWVrv5Y.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,B=y("submit"),Hr={title:"Integrations/React Hook Form/NumberField",component:a,render:()=>{const e=async F=>{await u(1500),B(F)},h=l({defaultValues:{ageDefaultValue:36}}),i=j();return r.jsx(d,{form:h,onSubmit:e,children:r.jsxs(g,{children:[r.jsx(i,{name:"age",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageRequired",rules:{required:"Please enter your age"},children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageMinValue",rules:{required:"Please enter your age"},children:r.jsxs(t,{minValue:18,children:[r.jsx(o,{children:"Age"}),r.jsx(E,{children:"You have to be at least 18 years old"})]})}),r.jsxs(b,{children:[r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},s={},n={render:()=>{const e=l({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const e=l({defaultValues:{field:""}});return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(p,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(p,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name="field">
          <NumberField>
            <Label>Age</Label>
          </NumberField>
        </Field>
        <NumberField isInvalid>
          <Label>Age</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </NumberField>
      </Form>;
  }
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <NumberField>
            <Label>Age</Label>
          </NumberField>
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
}`,...m.parameters?.docs?.source}}};const Kr=["Default","WithFieldError","WithFocus"];export{s as Default,n as WithFieldError,m as WithFocus,Kr as __namedExportsOrder,Hr as default};
