import{j as r,r as S}from"./iframe-56IBTyTv.js";import{c as n,u as p,F as a,t as x}from"./Form-PvUfpyd4.js";import{L as m}from"./Label-XId0FOSA.js";import{R as u,S as l}from"./ResetButton-B4EwSCy2.js";import{B as d}from"./Button-CFrxsoAe.js";import{S as j,s as c}from"./Section-CWOxkqLh.js";import{A as b}from"./ActionGroup-J5RwwMSR.js";import{d as s,g as E}from"./TimeField-DFBvkPXF.js";import"./index-nuYtCEEu.js";import"./dynamic-CXTlw0o3.js";import"./PropsContextProvider-Bnm9-YIt.js";import"./mergeRefs-Cyrc671G.js";import"./index-CFQkVl6N.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-CJPwUZ4n.js";import"./context-C94D1Tcb.js";import"./browser-DgtGg3YC.js";import"./utils-By6OiP0m.js";import"./ProgressBar-BjWRzbkF.js";import"./Hidden-BYV7a_dx.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-DWxFADKK.js";import"./Text-D89DiGla.js";import"./EmulatedBoldText-BnqixNdP.js";import"./LoadingSpinner-DIFU_u_Q.js";import"./Button-Bg0OEiur.js";import"./useFocusRing-CwXi6gl-.js";import"./useFocusable-Ctb1BwR8.js";import"./context-C8voyd_c.js";import"./RSPContexts-ONk7znnk.js";import"./Collection-BYrAemKx.js";import"./CollectionBuilder-Bc4oKRVn.js";import"./SelectionIndicator-DENIl1oK.js";import"./Separator-BgOKs_kR.js";import"./useStatic-BFaumh86.js";import"./Accordion-zGlAAwDO.js";import"./Alert-KjDlqK_2.js";import"./AlertIcon-DXhK-bl3.js";import"./AlertBadge-CSdPQEPk.js";import"./Align-BexLs-oj.js";import"./Popover-BfnMJAl3.js";import"./OverlayTrigger-BjNrDJjP.js";import"./TableFooterRow-CKg0W8E3.js";import"./SkeletonText-D5ouES9k.js";import"./Avatar-n5CHccvP.js";import"./AvatarStack-C2OuNUTw.js";import"./Badge-BorAN_Zo.js";import"./BigNumber-BK1aV7_F.js";import"./Breadcrumb-DCvkjqRg.js";import"./Link-gAUYFHTC.js";import"./Heading-C8An-zqi.js";import"./Legend-pkpzEGV_.js";import"./FileCardList-FudbpZWY.js";import"./Image-Clsgyrfz.js";import"./Color-BHlBrJNB.js";import"./Content-fBwvLB0a.js";import"./ContextualHelpTrigger-jAzey3OP.js";import"./CounterBadge-BLzRgZI1.js";import"./DonutChart-CblbZ-Gl.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DIclsztf.js";import"./Header-BsQFcaSy.js";import"./Initials-lP5x31RC.js";import"./InlineCode-Dotm0ZC8.js";import"./PopoverTrigger-CUNBmLil.js";import"./Separator-Cc_0uyhZ.js";import"./Message-BPeVl3z6.js";import"./MessageSeparator-B8eILiD5.js";import"./NavigationGroup-_2LkB9uU.js";import"./Notification-iD7WbJZd.js";import"./NotificationProvider-cB8fVvxQ.js";import"./ProgressBar-Dh_0DhV8.js";import"./Rating-CvVeafk5.js";import"./Skeleton-S1htOct_.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,B=g("submit"),Nr={title:"Integrations/React Hook Form/SearchField",component:n,render:()=>{const o=async F=>{await c(5e3),B(F)},h=p({defaultValues:{user:""}}),f=x();return r.jsx(a,{form:h,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(f,{name:"user",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},e={},t={render:()=>{const o=p();return S.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsxs(s,{isInvalid:!0,children:[r.jsx(m,{children:"Suche"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=p();return r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Ur=["Default","WithFieldError","WithFocus"];export{e as Default,t as WithFieldError,i as WithFocus,Ur as __namedExportsOrder,Nr as default};
