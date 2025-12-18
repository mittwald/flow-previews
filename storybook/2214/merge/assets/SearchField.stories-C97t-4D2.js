import{j as r,r as S}from"./iframe-ALQ5zsOr.js";import{b as n,u as p,F as a,t as x}from"./Form-BSuNEw67.js";import{L as m}from"./Label-DovPcrx0.js";import{R as u,S as l}from"./ResetButton-C9Qwvy6d.js";import{B as d}from"./Button-BX6tjTLL.js";import{S as j,s as c}from"./Section-Bs1N8UQx.js";import{A as b}from"./ActionGroup-CwDRFfGd.js";import{d as s,g as E}from"./TimeField-BGaFn9l6.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-0GSV0qwf.js";import"./PropsContextProvider-CajZDkla.js";import"./mergeRefs-DuV0Rexf.js";import"./index-D7ydgW4V.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-D3jE5yaH.js";import"./context-kp7gAgjv.js";import"./browser-BKuntv9s.js";import"./utils-Co6jRk79.js";import"./ProgressBar-Be_QMw9N.js";import"./Hidden-BWCTvshd.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-e5IJmYa2.js";import"./Text-CARFdFUA.js";import"./EmulatedBoldText-BY9TtX8n.js";import"./LoadingSpinner-vZR7mZ_m.js";import"./Button-CMqrvij-.js";import"./useFocusRing-CKtfjksp.js";import"./useFocusable-Cd2GyxLR.js";import"./context-DQRC5U0a.js";import"./RSPContexts-CUYinsO9.js";import"./Collection-DLxcLWTn.js";import"./CollectionBuilder-C5lgjdY8.js";import"./SelectionIndicator-DGcgd3ZA.js";import"./Separator-C_CbFzxr.js";import"./useStatic-5go3Gdxn.js";import"./Accordion-BUE91It4.js";import"./Alert-DYosH7oc.js";import"./AlertIcon-CfY0Fdcx.js";import"./AlertBadge-XCHqrboo.js";import"./Align-BPEmxHoH.js";import"./Popover-uPtwk0G7.js";import"./OverlayTrigger-BGEoP9rw.js";import"./TableFooterRow-D1lPZp5u.js";import"./SkeletonText-w2TDxcrn.js";import"./Avatar-QqNm7BCQ.js";import"./AvatarStack-M9qsVSFW.js";import"./Badge-pH50ychv.js";import"./BigNumber-BLN-CZJ3.js";import"./Breadcrumb-BbJLeIhI.js";import"./Link-C8aOLutX.js";import"./Heading-D0DtiPxo.js";import"./Legend-CwaE3KaX.js";import"./FileCardList-Dr6bdZn3.js";import"./Image-CBcw_AfH.js";import"./Color-97yNqHhE.js";import"./Content-D5LTnoQh.js";import"./ContextualHelpTrigger-QzT4JqfM.js";import"./CounterBadge-8qsknsn0.js";import"./DonutChart-BZDaYje8.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-C3I35rk-.js";import"./Header-BmFuB9FK.js";import"./Initials-GjCQVizr.js";import"./InlineCode-AnZuJLOL.js";import"./PopoverTrigger-Cfi7p5HS.js";import"./Separator-DUxRAwFB.js";import"./Message-evw6xdzh.js";import"./MessageSeparator-Cu_84WKB.js";import"./NavigationGroup-j5bwk659.js";import"./Notification-BFFQhJkq.js";import"./NotificationProvider-nOh3LXem.js";import"./ProgressBar-C-_9cUNc.js";import"./Rating-DC-OgzhD.js";import"./Skeleton-B9JjKPfi.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,B=g("submit"),Nr={title:"Integrations/React Hook Form/SearchField",component:n,render:()=>{const o=async F=>{await c(5e3),B(F)},h=p({defaultValues:{user:""}}),f=x();return r.jsx(a,{form:h,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(f,{name:"user",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},e={},t={render:()=>{const o=p();return S.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsxs(s,{isInvalid:!0,children:[r.jsx(m,{children:"Suche"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=p();return r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
