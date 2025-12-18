import{j as r,r as S}from"./iframe-DZYTde4e.js";import{b as n,u as p,F as a,t as x}from"./Form-DAXzYjaL.js";import{L as m}from"./Label-DZlptx1G.js";import{R as u,S as l}from"./ResetButton-CmisILQg.js";import{B as d}from"./Button-CI_UMDNZ.js";import{S as j,s as c}from"./Section-BS2Y3V6J.js";import{A as b}from"./ActionGroup-Ckwbfgsv.js";import{d as s,g as E}from"./TimeField-D-kTf3v3.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-Cr3CK9yB.js";import"./PropsContextProvider-CgtZzzdB.js";import"./mergeRefs-CwEw5UGZ.js";import"./index-DAiWoi8o.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-Cqhwqj9s.js";import"./context-Du59aHbH.js";import"./browser-D1RFTwuv.js";import"./utils-Z6vXhZ96.js";import"./ProgressBar-DZyCS9ga.js";import"./Hidden-CW62RqME.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-DXCUbPmL.js";import"./Text-BDClvQAl.js";import"./EmulatedBoldText-S-B02nx0.js";import"./LoadingSpinner-qhZotF0H.js";import"./Button-CC2_Lwz2.js";import"./useFocusRing-BNBaS5jL.js";import"./useFocusable-v1ukumRO.js";import"./context-CBzv9cN1.js";import"./RSPContexts-BlMA0jp2.js";import"./Collection-BPkXYQex.js";import"./CollectionBuilder-D0jI_Gb0.js";import"./SelectionIndicator-BtmzIdOy.js";import"./Separator-B8KzwdIi.js";import"./useStatic-Cc8Tg3eq.js";import"./Accordion-DiPyOI-t.js";import"./Alert-o31AdO5J.js";import"./AlertIcon-DI40NDQv.js";import"./AlertBadge-B-5ctEFQ.js";import"./Align-Bd9WPaYv.js";import"./Popover-DM3qcDl0.js";import"./OverlayTrigger-m1G0j68U.js";import"./TableFooterRow-DLS1mk-5.js";import"./SkeletonText-BUQiET49.js";import"./Avatar-Dmmmqcaw.js";import"./AvatarStack-BhWncLCg.js";import"./Badge-X0UYy-cl.js";import"./BigNumber-8rUzV783.js";import"./Breadcrumb-ySYD737Q.js";import"./Link-DC_xwsX0.js";import"./Heading-CAPeE680.js";import"./Legend-7UlaW6sh.js";import"./FileCardList-CawIlP9w.js";import"./Image-EqBeX_Jm.js";import"./Color-BBOLURjV.js";import"./Content-eCyDCyWy.js";import"./ContextualHelpTrigger-ql3WkHfV.js";import"./CounterBadge-CzzRj_yg.js";import"./DonutChart-D3LmI0Kl.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-O-W3HO2z.js";import"./Header-DCViW_g1.js";import"./Initials-t14XTLYH.js";import"./InlineCode-Ji-F6tIS.js";import"./PopoverTrigger--kk_uIkh.js";import"./Separator-DBcIVj4L.js";import"./Message-Bphq-Ucd.js";import"./MessageSeparator-BFaxocAk.js";import"./NavigationGroup-CwR3lyRV.js";import"./Notification-Boctb1zI.js";import"./NotificationProvider-DZIN2fGZ.js";import"./ProgressBar-DQG5KsVg.js";import"./Rating-BX6XEAkD.js";import"./Skeleton-BXF3hqOE.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,B=g("submit"),Nr={title:"Integrations/React Hook Form/SearchField",component:n,render:()=>{const o=async F=>{await c(5e3),B(F)},h=p({defaultValues:{user:""}}),f=x();return r.jsx(a,{form:h,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(f,{name:"user",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},e={},t={render:()=>{const o=p();return S.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsxs(s,{isInvalid:!0,children:[r.jsx(m,{children:"Suche"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=p();return r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
