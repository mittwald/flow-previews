import{j as r,r as S}from"./iframe-cN7Lzdqj.js";import{c as n,u as p,F as a,t as x}from"./Form-zS2RouYP.js";import{L as m}from"./Label-DyuE6_xN.js";import{R as u,S as l}from"./ResetButton-BMtkxiIc.js";import{B as d}from"./Button-BwVoLe8A.js";import{S as j,s as c}from"./Section-DYu4NkMo.js";import{A as b}from"./ActionGroup-DX4E3UwM.js";import{e as s,F as E}from"./Modal-BvOAVp6n.js";import"./index-nuYtCEEu.js";import"./dynamic-DQRqFpn-.js";import"./flowComponent-ClNnNn_u.js";import"./index-CXWzxOff.js";import"./clsx-B-dksMZM.js";import"./index-Bef0Wflz.js";import"./useLocalizedStringFormatter-18qmqoa4.js";import"./context-B7YjNia1.js";import"./browser-Bpxr7vqL.js";import"./utils-Dbx-ArCm.js";import"./ProgressBar-CMrNr0Rm.js";import"./Hidden-By4OwLil.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-CUvGDlf1.js";import"./Text-BAPm9zxH.js";import"./EmulatedBoldText-BFt1sMFF.js";import"./LoadingSpinner-CTzp-c3F.js";import"./Button-BpQqb0nf.js";import"./useFocusRing-Q59ju1-g.js";import"./useFocusable-DoOUadEO.js";import"./context-dEL8T1DH.js";import"./RSPContexts-ClDg08BX.js";import"./Collection-r0rjmb-q.js";import"./CollectionBuilder-_LjgOwmd.js";import"./SelectionIndicator-C0yq45Os.js";import"./Separator-UtafTuzR.js";import"./useStatic-DPvlriRj.js";import"./FileCardList-Dra2QlnJ.js";import"./Avatar-C0Asp2HI.js";import"./AlertIcon-C-ExwOqO.js";import"./Image-BlZiNNFc.js";import"./Link-oX3ddIiA.js";import"./ControlledNotification-D1FOQGyy.js";import"./Flex-BoyQ6jvg.js";import"./Accordion-BMxO4mcN.js";import"./Alert-DRm0M_-I.js";import"./AlertBadge-CfRun1E8.js";import"./Align-IxMmEPNd.js";import"./AvatarStack-BoJnhU26.js";import"./BigNumber-CuAdmGiQ.js";import"./Breadcrumb-BkaPZxVT.js";import"./Heading-D9z7iTpY.js";import"./Legend-DfNTsat6.js";import"./Color-BKlRe18i.js";import"./TableFooterRow-NzFJ-M5U.js";import"./SkeletonText-DVQeD1Fq.js";import"./Content-D9H_HcvI.js";import"./CounterBadge-BMowvMS6.js";import"./DonutChart-Dcix-a4p.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-C8aSHTlq.js";import"./Header-Cqwjc9TR.js";import"./Initials-igV7Y7XO.js";import"./InlineCode-xANS0eJt.js";import"./LayoutCard-DaNXTyxD.js";import"./Separator-BbfT4Xvo.js";import"./MessageSeparator-DrM4lDRk.js";import"./NavigationGroup-B6pE0lML.js";import"./Notification-CgZQ9wbr.js";import"./NotificationProvider-CkbZ2iuD.js";import"./ProgressBar-C5OsEuon.js";import"./Rating-Bdupu4iU.js";import"./Skeleton-BvnGctBd.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),Hr={title:"Integrations/React Hook Form/SearchField",component:n,render:()=>{const e=async f=>{await c(5e3),g(f)},h=p({defaultValues:{user:""}}),F=x();return r.jsx(a,{form:h,onSubmit:e,children:r.jsxs(j,{children:[r.jsx(F,{name:"user",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},o={},t={render:()=>{const e=p();return S.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsxs(s,{isInvalid:!0,children:[r.jsx(m,{children:"Suche"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const e=p();return r.jsxs(a,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
