import{j as r,r as S}from"./iframe-D6fHsxXv.js";import{b as n,u as p,F as a,t as x}from"./Form-aMcCtTdR.js";import{L as m}from"./Label-BFZcxZYB.js";import{R as u,S as l}from"./ResetButton-D26IFSpx.js";import{B as d}from"./Button-ByZH5IaN.js";import{S as j,s as c}from"./Section-DZa8lXDk.js";import{A as b}from"./ActionGroup-Bn5GGBe3.js";import{e as s,F as E}from"./Modal-CGXu-7BF.js";import"./index-nuYtCEEu.js";import"./dynamic-BLI65pIy.js";import"./flowComponent-CyxS6jtd.js";import"./index-a9Z31mTH.js";import"./clsx-B-dksMZM.js";import"./index-BN2jmjED.js";import"./useLocalizedStringFormatter-CFiZqHkg.js";import"./context-DBHOSboP.js";import"./browser-CwuXyXeK.js";import"./utils-CX0v46bh.js";import"./ProgressBar-p_vCaDV8.js";import"./Hidden-DOuWayhK.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-BQPhDOnw.js";import"./Text-BlUe4lOx.js";import"./EmulatedBoldText-C3KADN9z.js";import"./LoadingSpinner-YR9PsY9I.js";import"./Button-CGoM5cNA.js";import"./useFocusRing-mSLmiDmW.js";import"./useFocusable-C5yjySsw.js";import"./context-B25Uysh-.js";import"./RSPContexts-ot9YLsND.js";import"./Collection-C7VAUULI.js";import"./CollectionBuilder-Da2MDVhj.js";import"./SelectionIndicator-BI8Ai2Ij.js";import"./Separator-CsPA1GTq.js";import"./useStatic-ZhhRmIwk.js";import"./FileCardList-CKOF_41c.js";import"./Avatar-BZa2aNzB.js";import"./AlertIcon-y7uDyP2w.js";import"./Image-BE61ZkEV.js";import"./Link-BXLnihOz.js";import"./ControlledNotification-DW7-c_1o.js";import"./Flex-Bnwwl7yh.js";import"./Accordion-BNspTTT6.js";import"./Alert-QOLcAREl.js";import"./AlertBadge-D8pE3XVJ.js";import"./Align-jX76HIXo.js";import"./AvatarStack-D1CQ9CP4.js";import"./BigNumber-HDD6Ha1g.js";import"./Breadcrumb-C3NrF8Li.js";import"./Heading-CN7gV4ri.js";import"./Legend-g2tREy-a.js";import"./Color-Bkm_a0pP.js";import"./TableFooterRow-DGrjNW1t.js";import"./SkeletonText-3m6Qm9dA.js";import"./Content-CavwTwhy.js";import"./CounterBadge-CM2z3a4b.js";import"./DonutChart-BhFaY8J1.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DyavuTK0.js";import"./Header-OT8Q3euI.js";import"./Initials-CZzuu5uh.js";import"./InlineCode-CKBf34T8.js";import"./LayoutCard-3KlgAbCz.js";import"./Separator-DVOspp54.js";import"./MessageSeparator-CCKnTU1s.js";import"./NavigationGroup-DV-BiGeA.js";import"./Notification-C3O4RVn7.js";import"./NotificationProvider-DlGFFFM5.js";import"./ProgressBar-DAX1bvy4.js";import"./Rating-Dfz4xv42.js";import"./Skeleton-sfWcrayS.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),Hr={title:"Integrations/React Hook Form/SearchField",component:n,render:()=>{const e=async f=>{await c(5e3),g(f)},h=p({defaultValues:{user:""}}),F=x();return r.jsx(a,{form:h,onSubmit:e,children:r.jsxs(j,{children:[r.jsx(F,{name:"user",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},o={},t={render:()=>{const e=p();return S.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsxs(s,{isInvalid:!0,children:[r.jsx(m,{children:"Suche"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const e=p();return r.jsxs(a,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <SearchField>
            <Label>Suche</Label>
          </SearchField>
        </Field>
        <SearchField isInvalid>
          <Label>Suche</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </SearchField>
      </Form>;
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <SearchField>
            <Label>Suche</Label>
          </SearchField>
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
}`,...i.parameters?.docs?.source}}};const Kr=["Default","WithFieldError","WithFocus"];export{o as Default,t as WithFieldError,i as WithFocus,Kr as __namedExportsOrder,Hr as default};
