import{j as r,r as S}from"./iframe-Ckegua2-.js";import{b as n,u as p,F as a,t as x}from"./Form-VPf9Y9GV.js";import{L as m}from"./Label-DbzN7GKj.js";import{R as u,S as l}from"./ResetButton-CPqSJojW.js";import{B as d}from"./Button-DoXsYGKN.js";import{S as j,s as c}from"./Section-hzyeLE3m.js";import{A as b}from"./ActionGroup-BqOUYrfn.js";import{d as s,g as E}from"./TimeField-CnyVG1v1.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-6Flvv8a3.js";import"./PropsContextProvider-B0wHrVrI.js";import"./mergeRefs-CXKhTFR6.js";import"./index-CxQn1E-Y.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-Q4I4FS-7.js";import"./context-Dskisrvm.js";import"./browser-CQVzEu0I.js";import"./utils-CYmNuJtI.js";import"./ProgressBar-DIFZ8Kql.js";import"./Hidden-kHVBbfV7.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-Gc4Ng5zo.js";import"./Text-Bc5eZX2G.js";import"./EmulatedBoldText-DGrw2Xfi.js";import"./LoadingSpinner-Cp0jDW5T.js";import"./Button-DWZpmyCC.js";import"./useFocusRing-BMhGy4sM.js";import"./useFocusable-oEaC2Y8Z.js";import"./context-CF7hXZMA.js";import"./RSPContexts-B2_NTObV.js";import"./Collection-ezizCYTp.js";import"./CollectionBuilder-BabOu3fh.js";import"./SelectionIndicator-BgkqkO5H.js";import"./Separator-B9FzUmmI.js";import"./useStatic-CoW39G77.js";import"./Accordion-B_N1C8pF.js";import"./Alert-JZD3v-jA.js";import"./AlertIcon-Dy5HewGT.js";import"./AlertBadge-CARGCkX2.js";import"./Align-Dm8_YoZ3.js";import"./Popover-D8pa3B3p.js";import"./OverlayTrigger-DO7Mueac.js";import"./TableFooterRow-CHZHJv30.js";import"./SkeletonText-BLLVdmDs.js";import"./Avatar-B-hMO_N2.js";import"./AvatarStack-C33GWe6X.js";import"./Badge-DMon6P2Z.js";import"./BigNumber-CA9AE9Qf.js";import"./Breadcrumb-DXpAsBUS.js";import"./Link-D6ZKnidg.js";import"./Heading-CD3Wslox.js";import"./Legend-pYfOY7A3.js";import"./FileCardList-CcmxMc-_.js";import"./Image-B-kLfcch.js";import"./Color-BRQcMNt3.js";import"./Content-Dg-EjuzS.js";import"./ContextualHelpTrigger-CXW4Wy_s.js";import"./CounterBadge-BSnWWYKA.js";import"./DonutChart-Df00Mh3q.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DlPxXhrq.js";import"./Header-DFUpbH_h.js";import"./Initials-C9kUHQxR.js";import"./InlineCode-CKyRvQPe.js";import"./PopoverTrigger-Cbnk17aQ.js";import"./Separator-CpyG2-QQ.js";import"./Message-hrhHm_Tz.js";import"./MessageSeparator-C9EaqawW.js";import"./NavigationGroup-gYW7EtWF.js";import"./Notification-Cb_wPwY7.js";import"./NotificationProvider-DMKJ6Z2r.js";import"./ProgressBar-BEYlfi9a.js";import"./Rating-Bth5rzY2.js";import"./Skeleton-Beogy4tJ.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,B=g("submit"),Nr={title:"Integrations/React Hook Form/SearchField",component:n,render:()=>{const o=async F=>{await c(5e3),B(F)},h=p({defaultValues:{user:""}}),f=x();return r.jsx(a,{form:h,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(f,{name:"user",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},e={},t={render:()=>{const o=p();return S.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsxs(s,{isInvalid:!0,children:[r.jsx(m,{children:"Suche"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=p();return r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
