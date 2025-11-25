import{j as r,r as S}from"./iframe-Ce1y9mDa.js";import{c as n,u as p,F as a,t as x}from"./Form-CFvLKARQ.js";import{L as m}from"./Label-CYdyGifL.js";import{R as u,S as l}from"./ResetButton-BJASPMGl.js";import{B as d}from"./Button-7HXgfRQm.js";import{S as j,s as c}from"./Section-BnpA4R0K.js";import{A as b}from"./ActionGroup-GiQVcnjT.js";import{e as s,F as E}from"./Modal-B5SDnM4C.js";import"./index-nuYtCEEu.js";import"./dynamic-BLMgMZQd.js";import"./flowComponent-BBC2SOgI.js";import"./index-Dg18p-Ek.js";import"./clsx-B-dksMZM.js";import"./index-CQi4P5Ty.js";import"./useLocalizedStringFormatter-DJ1gfdUx.js";import"./context-Ds3IsYji.js";import"./browser-Cq8oxhIL.js";import"./utils-DDvzCibx.js";import"./ProgressBar-CB9towVx.js";import"./Hidden-C6qb3gI3.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-Cq_LhkIy.js";import"./Text-gkToWDQ-.js";import"./EmulatedBoldText-Dp9LuwQf.js";import"./LoadingSpinner-B-DDCCI1.js";import"./Button-CHIFuycL.js";import"./useFocusRing-DXrCjRvx.js";import"./useFocusable-7LnlwHoJ.js";import"./context-BS3tg5wC.js";import"./RSPContexts-Co0_PY2S.js";import"./Collection-Dzn6S5_i.js";import"./CollectionBuilder-DHKZo2jO.js";import"./SelectionIndicator-CEqK1ZkE.js";import"./Separator-DV4y1vPf.js";import"./useStatic-BHJIQiQW.js";import"./FileCardList-BlMAlev1.js";import"./Avatar-CBVDeneG.js";import"./AlertIcon-Dp0ZIISG.js";import"./Image-MnCK3KxN.js";import"./Link-D-pziWbs.js";import"./ControlledNotification-DXpIZWHx.js";import"./Flex-W6EMBjqA.js";import"./Accordion-CLOM0Ma4.js";import"./Alert-Cxybhncd.js";import"./AlertBadge-DOQyDmfm.js";import"./Align-BHiq55io.js";import"./AvatarStack-C1f-7D-W.js";import"./BigNumber-BuA-3GnB.js";import"./Breadcrumb-C2jdHzme.js";import"./Heading-CTEdnBPn.js";import"./Legend-D1sg630U.js";import"./Color-CF3eJFYM.js";import"./TableFooterRow-DSk7Viak.js";import"./SkeletonText-B6gTj_U8.js";import"./Content-DDAGDb2q.js";import"./CounterBadge-CvXy5Oz3.js";import"./DonutChart-DSfM5bil.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DNO1mdVn.js";import"./Header-B5pcUp1F.js";import"./Initials-DltL2xg8.js";import"./InlineCode-HVHT7k08.js";import"./LayoutCard-DG1Z6Pl5.js";import"./Separator-DXJX0Nok.js";import"./MessageSeparator-Byy5sV6o.js";import"./NavigationGroup-Cvtmebaj.js";import"./Notification-BfU9Xz2u.js";import"./NotificationProvider-CPeFG8LD.js";import"./ProgressBar-BH1las8m.js";import"./Rating-CFZ218Cx.js";import"./Skeleton-BBPWZ02g.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),Hr={title:"Integrations/React Hook Form/SearchField",component:n,render:()=>{const e=async f=>{await c(5e3),g(f)},h=p({defaultValues:{user:""}}),F=x();return r.jsx(a,{form:h,onSubmit:e,children:r.jsxs(j,{children:[r.jsx(F,{name:"user",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},o={},t={render:()=>{const e=p();return S.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsxs(s,{isInvalid:!0,children:[r.jsx(m,{children:"Suche"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const e=p();return r.jsxs(a,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
