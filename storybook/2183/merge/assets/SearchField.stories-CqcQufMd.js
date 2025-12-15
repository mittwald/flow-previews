import{j as r,r as S}from"./iframe-Br-RCPWN.js";import{b as n,u as p,F as a,t as x}from"./Form-DEqxISVK.js";import{L as m}from"./Label-BJkXaCeQ.js";import{R as u,S as l}from"./ResetButton-bLd0bg_q.js";import{B as d}from"./Button-D54g6t8r.js";import{S as j,s as c}from"./Section-DJ8xVnwh.js";import{A as b}from"./ActionGroup-Br-HBLHh.js";import{d as s,g as E}from"./TimeField-BGRSwV-o.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CeRu270G.js";import"./PropsContextProvider-CSAj95jw.js";import"./mergeRefs-DP0fvyvw.js";import"./index-DO8vOkwc.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-DcURVzAt.js";import"./context-Bc5k9Bh6.js";import"./browser-Dyp86VHf.js";import"./utils-Dak_ECAp.js";import"./ProgressBar-DLYSkAPs.js";import"./Hidden-BWng0Hd6.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-C1NRfwVV.js";import"./remote-Bo4xuhzH.js";import"./Text-CIylET5F.js";import"./EmulatedBoldText-DiJCrkGJ.js";import"./LoadingSpinner-B0xf-tui.js";import"./Button-CoaZdKpJ.js";import"./useFocusRing-kD3u5y5H.js";import"./useFocusable-B6Sg882a.js";import"./context-De-RWUql.js";import"./RSPContexts-CI5k95q6.js";import"./Collection-DW1fpUON.js";import"./CollectionBuilder-BjAB2jGU.js";import"./SelectionIndicator-H4UlTQ5u.js";import"./Separator-WgOMTL7q.js";import"./useStatic-eGeAE8fm.js";import"./Accordion-hQD9PfV1.js";import"./Alert-Bb_4C7nc.js";import"./AlertIcon-Ci_dM1ct.js";import"./AlertBadge-DZwGkMpO.js";import"./Align-DfN4ymbR.js";import"./Popover-QdAZ89s_.js";import"./OverlayTrigger-D0y2BIl1.js";import"./TableFooterRow--YVmAQJL.js";import"./SkeletonText-DH8cB97o.js";import"./Avatar-CQV4Pag9.js";import"./AvatarStack-mpuF30DC.js";import"./Badge-AGFHXSuV.js";import"./BigNumber-BKnsR0fX.js";import"./Breadcrumb-Dn0ZcgHN.js";import"./Link-Cd6zxchg.js";import"./Heading-BOVN6eFE.js";import"./Legend-m_Z_E65H.js";import"./FileCardList-Cr1bdGd9.js";import"./Image-CX8OimUo.js";import"./Color-BM0XuHzd.js";import"./Content-B9XeZb2J.js";import"./ContextualHelpTrigger-DYkgoDVG.js";import"./CounterBadge-CiNfB30V.js";import"./DonutChart-BSut2oKM.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-jxwvzdOg.js";import"./Header-q2hXiR9Q.js";import"./Initials-2ZjSAOrE.js";import"./InlineCode-vkQ-McU7.js";import"./PopoverTrigger-B_oYUYip.js";import"./Separator-DOub_aiP.js";import"./Message-DH3zGPpQ.js";import"./MessageSeparator-Bc8NECux.js";import"./NavigationGroup-Buu17kA2.js";import"./Notification-B1zm2nBo.js";import"./NotificationProvider-h_8RrIcw.js";import"./ProgressBar-Di15BDR2.js";import"./Rating-BAfMiDeC.js";import"./Skeleton-NDiigi_I.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,B=g("submit"),Ur={title:"Integrations/React Hook Form/SearchField",component:n,render:()=>{const o=async F=>{await c(5e3),B(F)},h=p({defaultValues:{user:""}}),f=x();return r.jsx(a,{form:h,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(f,{name:"user",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},e={},t={render:()=>{const o=p();return S.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsxs(s,{isInvalid:!0,children:[r.jsx(m,{children:"Suche"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=p();return r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Vr=["Default","WithFieldError","WithFocus"];export{e as Default,t as WithFieldError,i as WithFocus,Vr as __namedExportsOrder,Ur as default};
