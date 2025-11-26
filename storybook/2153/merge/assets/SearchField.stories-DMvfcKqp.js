import{j as r,r as S}from"./iframe-QYf_yreC.js";import{b as n,u as p,F as a,t as x}from"./Form-SyGNl1L6.js";import{L as m}from"./Label-DkpOuIpZ.js";import{R as u,S as l}from"./ResetButton-Bk_LcARC.js";import{B as d}from"./Button-ClcJ4r4J.js";import{S as j,s as c}from"./Section-B2DHZKCC.js";import{A as b}from"./ActionGroup-CNS7lIAN.js";import{e as s,F as E}from"./Modal-BZuSJnKZ.js";import"./index-nuYtCEEu.js";import"./dynamic-DxvJo010.js";import"./flowComponent-BlD0f313.js";import"./index-DrqlcLhB.js";import"./clsx-B-dksMZM.js";import"./index-Dl4zJFgP.js";import"./useLocalizedStringFormatter-BSKtfzGO.js";import"./context-DoHwa-Uz.js";import"./browser-BbcMJkiW.js";import"./utils-9temXcui.js";import"./ProgressBar-BpNDlZ7L.js";import"./Hidden-D4BgLsni.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-CJ0iL8xC.js";import"./Text-DYo1hnMM.js";import"./EmulatedBoldText-BUtEOorO.js";import"./LoadingSpinner-DyzLehc_.js";import"./Button-BY7Kz_qM.js";import"./useFocusRing-CKFComO5.js";import"./useFocusable-Bm9MC9Cg.js";import"./context-BGZffbOF.js";import"./RSPContexts-CQ49TXVP.js";import"./Collection-DjuEe1dE.js";import"./CollectionBuilder-Ce2bTmZV.js";import"./SelectionIndicator-DHFL4Bc-.js";import"./Separator-DJyRay3v.js";import"./useStatic-CgWt-Vtk.js";import"./FileCardList-DTUmUWf5.js";import"./Avatar-B_ln5OAs.js";import"./AlertIcon-DGipYwqO.js";import"./Image-CSQDDycD.js";import"./Link-VGOGyvf3.js";import"./ControlledNotification-CA1OLKqo.js";import"./Flex-FeaqVm2Q.js";import"./Accordion-QaDyvb9t.js";import"./Alert-bj_Y0zgx.js";import"./AlertBadge-ClDIorBf.js";import"./Align-B8IK4Kvb.js";import"./AvatarStack-S7hrW2Du.js";import"./BigNumber-Ct2H2kB1.js";import"./Breadcrumb-B5Ha9Tr5.js";import"./Heading-Ztp4MNID.js";import"./Legend-BN69fYiw.js";import"./Color-Bp6xg0fX.js";import"./TableFooterRow-DqL_vA4D.js";import"./SkeletonText-DntNO9xb.js";import"./Content-ysq6PY7h.js";import"./CounterBadge-CnGG8oCU.js";import"./DonutChart-Bw-cC5fd.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-CrN3wwhj.js";import"./Header-NzTBG9RN.js";import"./Initials-D93mZZQg.js";import"./InlineCode-Y0cx0rl0.js";import"./LayoutCard-C6WMVQDl.js";import"./Separator-vqPdnx36.js";import"./MessageSeparator-C5w9jueb.js";import"./NavigationGroup-DrewGvf7.js";import"./Notification-Dfr21Mg6.js";import"./NotificationProvider-Cnm_GiLp.js";import"./ProgressBar-D7-_y3N0.js";import"./Rating-4NQ2FU04.js";import"./Skeleton-CnrauAdF.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),Hr={title:"Integrations/React Hook Form/SearchField",component:n,render:()=>{const e=async f=>{await c(5e3),g(f)},h=p({defaultValues:{user:""}}),F=x();return r.jsx(a,{form:h,onSubmit:e,children:r.jsxs(j,{children:[r.jsx(F,{name:"user",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},o={},t={render:()=>{const e=p();return S.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsxs(s,{isInvalid:!0,children:[r.jsx(m,{children:"Suche"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const e=p();return r.jsxs(a,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
