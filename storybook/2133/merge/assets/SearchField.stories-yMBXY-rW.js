import{j as r,r as S}from"./iframe-DxjJvypA.js";import{c as n,u as p,F as a,t as x}from"./Form-DJxnwuL9.js";import{L as m}from"./Label-BCxsZWDW.js";import{R as u,S as l}from"./ResetButton-CKNshwdg.js";import{B as d}from"./Button-CsJkXLJC.js";import{S as j,s as c}from"./Section-B6nN9o_0.js";import{A as b}from"./ActionGroup-CVcTWpTg.js";import{e as s,F as E}from"./Modal-scDbqKwL.js";import"./index-nuYtCEEu.js";import"./dynamic-BdL6WG8t.js";import"./flowComponent-DUeX89k8.js";import"./index-183dggCm.js";import"./clsx-B-dksMZM.js";import"./index-12LB0401.js";import"./useLocalizedStringFormatter-B-C4j2VW.js";import"./context-IWHzWN32.js";import"./browser-CB6HLjfz.js";import"./utils-6KDkR0i-.js";import"./ProgressBar-5owblEDR.js";import"./Hidden-r4JGJoQA.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-BlszW1tj.js";import"./Text-CGLUa4sd.js";import"./EmulatedBoldText-CPQw7A1N.js";import"./LoadingSpinner-q348yrim.js";import"./Button-nEfrx5gJ.js";import"./useFocusRing-DXxhUawj.js";import"./useFocusable-BcokvUUD.js";import"./context-CTfXc2Zo.js";import"./RSPContexts-BduYfYam.js";import"./Collection-_X54BM7-.js";import"./CollectionBuilder-Bm_NDCjy.js";import"./SelectionIndicator-CSBpDXmM.js";import"./Separator-DoMs1cQk.js";import"./useStatic-iE5J9zsV.js";import"./getActionGroupSlot-DvyUR_ym.js";import"./FileCardList-BVyoDE-7.js";import"./Avatar-BR29CIP8.js";import"./AlertIcon-CJADbW9L.js";import"./Image-C9uy31u2.js";import"./Link-DMUApF-a.js";import"./ControlledNotification-vaU_F80i.js";import"./LayoutCard-aWGkBZVt.js";import"./Accordion-Ps3GdnvV.js";import"./Alert-B_YHHoEM.js";import"./AlertBadge-LOZq_93c.js";import"./Align-lkWsfgzV.js";import"./AvatarStack-CwQZo75P.js";import"./BigNumber-B3EhvRla.js";import"./Breadcrumb-73u-YP5B.js";import"./Heading-BRsOw7TR.js";import"./Legend-rhAR0u5-.js";import"./Color-CGGKQlcf.js";import"./TableFooterRow-DFeDu75P.js";import"./SkeletonText-eFRLkdn1.js";import"./Content-D4JTeq-s.js";import"./CounterBadge-CpPkfl65.js";import"./DonutChart-CeTOSEye.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-Clnhjbhg.js";import"./Header-D2mqm9n1.js";import"./Initials-BkyQRHGv.js";import"./InlineCode-2bpBAEcp.js";import"./Separator-Ci8H9o73.js";import"./MessageSeparator-CYyIHhcK.js";import"./NavigationGroup-BPerNp2h.js";import"./Notification-Cqym3ej0.js";import"./NotificationProvider-CPmTQg-x.js";import"./ProgressBar-CRpWDhXs.js";import"./Rating-Cr0_tTre.js";import"./Skeleton-BtPwNpqY.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),Hr={title:"Integrations/React Hook Form/SearchField",component:n,render:()=>{const e=async f=>{await c(5e3),g(f)},h=p({defaultValues:{user:""}}),F=x();return r.jsx(a,{form:h,onSubmit:e,children:r.jsxs(j,{children:[r.jsx(F,{name:"user",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},o={},t={render:()=>{const e=p();return S.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsxs(s,{isInvalid:!0,children:[r.jsx(m,{children:"Suche"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const e=p();return r.jsxs(a,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
